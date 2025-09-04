export type ChatMessage = { role: 'system' | 'user' | 'assistant'; content: string };

const API_BASE =
  process.env.REACT_APP_API_BASE || 'https://vizx-backend.vercel.app';

export async function chat(messages: ChatMessage[]) {
  const resp = await fetch(`${API_BASE}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages })
  });
  if (!resp.ok) throw new Error(await resp.text());
  return resp.json();
}
