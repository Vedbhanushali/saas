import type { LoaderFunctionArgs } from "@remix-run/node";

import {
  Outlet,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { redirect } from "@remix-run/node";

import { getAuth } from "@clerk/remix/ssr.server";
import Header from "./Header";
import Menu from "./Menu";

export async function loader(args: LoaderFunctionArgs) {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in?redirect_url=" + args.request.url);
  }
  return null;
}

export type RouteLoaderType = ReturnType<typeof useLoaderData<typeof loader>>;

export default function SchoolLayout() {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  let message = "Unknown Error";
  let details = "";

  if (isRouteErrorResponse(error)) {
    message = `${error.status} ${error.statusText}`;
    details = error.data;
  } else if (error instanceof Error) {
    message = error.message;
    details = error.stack || "";
  }

  return (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="ml-1">
          <div className="flex-wrap text-2xl font-medium text-yellow-800">
            {message}
          </div>
          <div className="mt-5 text-sm text-yellow-700">
            <pre>{details}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
