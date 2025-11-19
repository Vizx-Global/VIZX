// src/types/global.d.ts
export {};

declare global {
  interface Window {
    $zoho?: any;
    ZOHO?: any;
    botpressWebChat?: {
      open?: () => void;
      close?: () => void;
    };
  }
}
