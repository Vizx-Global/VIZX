/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENAI_API_KEY: string;
  // add more VITE_* here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
