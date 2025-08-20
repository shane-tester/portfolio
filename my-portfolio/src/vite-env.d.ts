/// <reference types="vite/client" />

// Ambient declarations for Vite environment variables - ensures type safety for import.meta.env
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}