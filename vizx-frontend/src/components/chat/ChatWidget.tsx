// src/components/chat/ChatWidget.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';

type ChatMessage = { role: 'system' | 'user' | 'assistant'; content: string };

const API_BASE =
  process.env.REACT_APP_API_BASE || 'http://localhost:5000';

async function chat(messages: ChatMessage[]) {
  const resp = await fetch(`${API_BASE}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });
  if (!resp.ok) throw new Error(await resp.text());
  return resp.json();
}

function extractText(data: any): string {
  return (
    data?.output?.text ??
    data?.text ??
    data?.choices?.[0]?.text ??
    data?.message ??
    JSON.stringify(data, null, 2)
  );
}

function randomId() {
  // Fallback for older browsers/builds
  // @ts-ignore
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    // @ts-ignore
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2);
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [msgs, setMsgs] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hi! I’m the Vizx Assistant. How can I help?' },
  ]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const systemPrompt = useMemo<ChatMessage>(
    () => ({
      role: 'system',
      content: 'You are Vizx Global’s helpful assistant. Be concise and professional.',
    }),
    []
  );

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [msgs, open]);

  async function send(e?: React.FormEvent) {
    e?.preventDefault();
    const q = input.trim();
    if (!q || busy) return;

    setBusy(true);
    setError(null);

    const userMsg: ChatMessage = { role: 'user', content: q };
    setMsgs((m) => [...m, userMsg]);
    setInput('');

    try {
      const context = [systemPrompt, ...msgs, userMsg];
      const data = await chat(context);
      const text = extractText(data);
      const botMsg: ChatMessage = { role: 'assistant', content: String(text) };
      setMsgs((m) => [...m, botMsg]);
    } catch (err: any) {
      console.error('chat error', err); // <— see real cause in devtools
      setError(err?.message || 'Something went wrong.');
    } finally {
      setBusy(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {open ? (
        <div className="w-[340px] max-w-[92vw] h-[480px] bg-white border border-gray-200 rounded-xl shadow-2xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 bg-black text-white flex items-center justify-between">
            <div className="font-semibold">Vizx Assistant</div>
            <button
              onClick={() => setOpen(false)}
              className="rounded px-2 py-1 hover:bg-white/10"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-auto p-3 space-y-3 bg-gray-50">
            {msgs.map((m, i) => (
              <div
                key={`${m.role}-${i}-${randomId()}`}
                className={`max-w-[85%] px-3 py-2 rounded-lg whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'bg-blue-600 text-white self-end ml-auto'
                    : 'bg-white text-gray-900 border border-gray-200'
                }`}
              >
                {m.content}
              </div>
            ))}
            {busy && <div className="text-sm text-gray-500">Thinking…</div>}
            {error && <div className="text-sm text-red-600">Error: {error}</div>}
          </div>

          <form onSubmit={send} className="p-3 border-t border-gray-200">
            <div className="flex gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Type a message…"
                rows={1}
                className="flex-1 resize-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                className="px-4 py-2 rounded-md bg-black text-white disabled:opacity-50"
              >
                Send
              </button>
            </div>
            <p className="mt-1 text-[11px] text-gray-400">
              Enter to send • Shift+Enter for newline
            </p>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="h-12 px-4 rounded-full bg-black text-white shadow-lg hover:opacity-90"
          aria-label="Open Vizx Assistant"
        >
          Chat
        </button>
      )}
    </div>
  );
}
