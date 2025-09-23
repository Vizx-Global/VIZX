import { useEffect } from "react";

declare global {
  interface Window {
    $zoho?: any;
  }
}

const ZOHO_SCRIPT_ID = "zsiqscript";
const HIDE_STYLE_ID = "zoho-salesiq-hide-style";
const HIDE_STYLE_CONTENT = `
  #zsiqwidget,
  #zsiq_float,
  .zsiq_floatmain {
    display: none !important;
  }
`;

let hideStyleElement: HTMLStyleElement | null = null;
let closePollHandle: number | null = null;
let zohoInitialized = false;
let closeHandlerAttached = false;
let shouldHideAfterClose = false;

function ensureHideStyle() {
  if (typeof document === "undefined") return;

  if (!hideStyleElement) {
    hideStyleElement = document.createElement("style");
    hideStyleElement.id = HIDE_STYLE_ID;
    hideStyleElement.textContent = HIDE_STYLE_CONTENT;
  }

  if (!document.head.contains(hideStyleElement)) {
    document.head.appendChild(hideStyleElement);
  }
}

function removeHideStyle() {
  if (hideStyleElement?.parentNode) {
    hideStyleElement.parentNode.removeChild(hideStyleElement);
  }
}

function stopCloseWatcher() {
  if (closePollHandle != null) {
    window.clearInterval(closePollHandle);
    closePollHandle = null;
  }
}

function watchForZohoClose() {
  if (typeof window === "undefined") return;

  stopCloseWatcher();

  let hasBeenVisible = false;

  closePollHandle = window.setInterval(() => {
    const floatWidget = document.querySelector<HTMLElement>(".zsiq_floatmain");

    if (!floatWidget) {
      if (hasBeenVisible && shouldHideAfterClose) {
        ensureHideStyle();
        shouldHideAfterClose = false;
        stopCloseWatcher();
      }
      return;
    }

    const computed = window.getComputedStyle(floatWidget);
    const rect = floatWidget.getBoundingClientRect();
    const isVisible =
      computed.display !== "none" &&
      computed.visibility !== "hidden" &&
      computed.opacity !== "0" &&
      rect.width > 0 &&
      rect.height > 0;

    if (isVisible) {
      hasBeenVisible = true;
      return;
    }

    if (hasBeenVisible && shouldHideAfterClose) {
      ensureHideStyle();
      shouldHideAfterClose = false;
      stopCloseWatcher();
    }
  }, 500);
}

function attachZohoCloseHandler() {
  if (closeHandlerAttached) return;

  const floatWindow = window.$zoho?.salesiq?.floatwindow;
  if (!floatWindow) return;

  const onClose = () => {
    if (shouldHideAfterClose) {
      ensureHideStyle();
      shouldHideAfterClose = false;
    }
    stopCloseWatcher();
  };

  let attached = false;

  if (typeof floatWindow.on === "function") {
    try {
      floatWindow.on("close", onClose);
      attached = true;
    } catch (error) {
      console.warn("[Zoho SalesIQ] Failed to register floatwindow.on close handler", error);
    }
  }

  if (!attached && typeof floatWindow.onClose === "function") {
    try {
      floatWindow.onClose(onClose);
      attached = true;
    } catch (error) {
      console.warn("[Zoho SalesIQ] Failed to register floatwindow.onClose handler", error);
    }
  }

  if (!attached && typeof window.$zoho?.salesiq?.events?.on === "function") {
    try {
      window.$zoho.salesiq.events.on("floatwindow.close", onClose);
      attached = true;
    } catch (error) {
      console.warn("[Zoho SalesIQ] Failed to register events.on close handler", error);
    }
  }

  if (attached) {
    closeHandlerAttached = true;
  }
}

export function handoffToAgent() {
  if (typeof window === "undefined") return;

  shouldHideAfterClose = true;
  removeHideStyle();
  stopCloseWatcher();
  window.$zoho?.salesiq?.floatwindow?.visible?.("show");
  watchForZohoClose();
}

export function initZoho() {
  if (typeof window === "undefined") return;

  if (zohoInitialized) {
    attachZohoCloseHandler();
    return;
  }

  zohoInitialized = true;

  window.$zoho = window.$zoho || {};
  const salesiq = window.$zoho.salesiq || {};
  const previousReady = typeof salesiq.ready === "function" ? salesiq.ready.bind(salesiq) : null;

  salesiq.ready = (...args: unknown[]) => {
    attachZohoCloseHandler();

    if (previousReady) {
      previousReady(...args);
    }
  };

  window.$zoho.salesiq = salesiq;

  if (document.getElementById(ZOHO_SCRIPT_ID)) {
    return;
  }

  const s = document.createElement("script");
  s.id = ZOHO_SCRIPT_ID;
  s.src =
    "https://salesiq.zohopublic.com/widget?wc=siq29f8e974d50eb742a4aa785f394fe049aa2dfaf8f0cb3822d2c7499850e56cea";
  s.defer = true;
  s.setAttribute("data-cfasync", "false");

  s.onload = () => {
    attachZohoCloseHandler();
  };
  s.onerror = () => {
    console.error("[Zoho SalesIQ] failed to load widget script.");
  };

  document.body.appendChild(s);
}

export default function ChatWidget() {
  useEffect(() => {
    initZoho();

    return () => {
      stopCloseWatcher();
    };
  }, []);

  return null;
}
