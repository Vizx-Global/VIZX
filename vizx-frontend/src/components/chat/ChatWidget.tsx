// src/components/chat/ChatWidget.tsx (or wherever you keep it)
import { useEffect } from "react";

declare global {
  interface Window {
    $zoho?: any;
  }
}

export default function ChatWidget() {
  useEffect(() => {
    // Avoid double-inserting (dev HMR / multiple mounts)
    if (document.getElementById("zsiqscript")) return;

    // Initialize Zoho SalesIQ before loading the script
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || { ready() {} };

    const s = document.createElement("script");
    s.id = "zsiqscript";
    s.src =
      "https://salesiq.zohopublic.com/widget?wc=siq29f8e974d50eb742a4aa785f394fe049aa2dfaf8f0cb3822d2c7499850e56cea";
    s.defer = true;

    // ⬇️ Important: bypass Cloudflare Rocket Loader / script optimizers
    s.setAttribute("data-cfasync", "false");

    // (Optional) small health log
    s.onload = () => {
      // You can force-open if you like:
      // window.$zoho?.salesiq?.floatwindow?.visible?.("show");
      // console.info("[Zoho SalesIQ] widget loaded");
    };
    s.onerror = () => {
      console.error("[Zoho SalesIQ] failed to load widget script.");
    };

    document.body.appendChild(s);
  }, []);

  return null; // nothing to render
}
