import type {
  MetaFunction,
  LoaderFunction,
  LinksFunction,
} from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
  useRouteError,
} from "@remix-run/react";
import stylesheet from "./tailwind.css?url";

import { rootAuthLoader } from "@clerk/remix/ssr.server";

import { ClerkApp } from "@clerk/remix";
import LoadingBar from "./components/LoadingBar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
  },
];

export const loader: LoaderFunction = (args) => rootAuthLoader(args);

export function Layout({ children }: { children: React.ReactNode }) {
  const nav = useNavigation();
  return (
    <html lang="en" data-theme="luxury">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {nav.state !== "idle" ? <LoadingBar /> : null}
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return <Outlet />;
}

export default ClerkApp(App);

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
