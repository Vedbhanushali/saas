import type {
  MetaFunction,
  LoaderFunction,
  LinksFunction,
} from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css?url";

import { rootAuthLoader } from "@clerk/remix/ssr.server";

import { ClerkApp } from "@clerk/remix";

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
/*
to send additional data
export const loader: LoaderFunction = args => {
  return rootAuthLoader(args, ({ request }) => {
    const { sessionId, userId, getToken } = request.auth;
    // fetch data
    return { yourData: 'here' };
  });
};
*/
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="luxury">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
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
