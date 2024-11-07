import { SignOutButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return null;
};

export default function PrivateRoute() {
  return (
    <div>
      <h1>This is private</h1>
      <SignOutButton />
    </div>
  );
}
