import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Intouch from './Intouch';
import PillThought from './PillThought';
import Palkia from './Palkia';

/**
 * Props for the App component.
 * Currently there are no configurable props for the root App, but the interface
 * is defined to make future additions explicit and to enable defensive typing.
 */
export interface AppProps {}

/**
 * Route configuration entry.
 */
export interface AppRoute {
  /** Path for the route (should start with '/') */
  path: string;
  /** React element to render for the route */
  element: JSX.Element;
}

/**
 * Application route definitions used by the App router.
 *
 * Exported so tests or other modules can inspect or reuse the route map.
 */
export const appRoutes: AppRoute[] = [
  { path: '/', element: <Home /> },
  { path: '/intouchcx', element: <Intouch /> },
  { path: '/pillthought', element: <PillThought /> },
  { path: '/palkia', element: <Palkia /> },
];

/**
 * Type guard to validate a route configuration object.
 *
 * @param candidate - Unknown value to validate as AppRoute.
 * @returns True if the candidate conforms to AppRoute shape.
 */
function isValidRoute(candidate: unknown): candidate is AppRoute {
  if (typeof candidate !== 'object' || candidate === null) {
    return false;
  }
  const maybe = candidate as Partial<AppRoute>;
  return (
    typeof maybe.path === 'string' &&
    maybe.path.length > 0 &&
    React.isValidElement(maybe.element)
  );
}

/**
 * Convert a route configuration array to an array of Route elements.
 * Performs defensive validation of each route entry and ignores invalid entries.
 *
 * @param routes - Array of AppRoute entries to render.
 * @returns Array of Route React elements.
 */
function renderRoutesFromConfig(routes: AppRoute[]): JSX.Element[] {
  return routes
    .filter((r) => {
      if (!isValidRoute(r)) {
        // Skip invalid route entries; keep runtime behavior predictable.
        // Do not throw to avoid breaking the whole app for a single bad entry.
        // eslint-disable-next-line no-console
        console.warn('Skipping invalid route configuration:', r);
        return false;
      }
      return true;
    })
    .map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ));
}

/**
 * Main application component that sets up routing for the portfolio site.
 *
 * This component configures the top-level BrowserRouter and maps the route
 * definitions to Route components. The router configuration is read from the
 * exported `appRoutes` array so it can be inspected or reused by tests.
 *
 * Defensive behaviors:
 * - Props are strictly typed via AppProps.
 * - Route entries are validated before being rendered.
 *
 * @component
 * @param props - AppProps (currently unused)
 * @returns The root React element for the application.
 *
 * @example
 * return <App />;
 */
const App: React.FC<AppProps> = (props) => {
  // Defensive check: ensure props is an object (guards against misuse)
  if (props == null || typeof props !== 'object') {
    // eslint-disable-next-line no-console
    console.warn('App component received unexpected props value; expected an object.');
  }

  return (
    <BrowserRouter>
      <Routes>{renderRoutesFromConfig(appRoutes)}</Routes>
    </BrowserRouter>
  );
};

export default App;