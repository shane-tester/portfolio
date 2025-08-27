/// <reference types="vite/client" />

/**
 * Ambient declarations for Vite environment variables used throughout the project.
 *
 * Purpose:
 * - Provide explicit, project-specific typings for import.meta.env to improve editor
 *   auto-completion and compile-time safety when accessing environment variables.
 * - Centralize environment variable documentation so consumers know which keys are available
 *   and what they represent.
 *
 * Notes:
 * - Extend this file with additional VITE_... keys as your project requires.
 * - Keep keys readonly to reflect that these values are injected at build/runtime and should
 *   not be mutated by application code.
 */

/**
 * Represents the shape of import.meta.env for this application.
 *
 * This interface should be extended with additional VITE_ prefixed variables as needed.
 *
 * @remarks
 * - All properties are readonly to reflect that environment variables are not mutable at runtime.
 */
interface ImportMetaEnv {
  /**
   * The human-readable application title used in the UI (e.g., page title, header).
   * Typically defined in your .env, .env.development, or .env.production files as VITE_APP_TITLE.
   */
  readonly VITE_APP_TITLE: string
  // more env variables...
}

/**
 * Augment the global ImportMeta to expose a typed env property.
 *
 * Consumers can access import.meta.env and receive proper typings defined in ImportMetaEnv.
 */
interface ImportMeta {
  readonly env: ImportMetaEnv
}