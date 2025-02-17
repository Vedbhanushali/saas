import { LoaderFunction, redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { createClerkClient } from "@clerk/remix/api.server";

export const loader: LoaderFunction = async (args) => {
  // Use getAuth() to retrieve the user's ID
  const { userId } = await getAuth(args);

  // If there is no userId, then redirect to sign-in route
  if (!userId) {
    return redirect("/sign-in?redirect_url=" + args.request.url);
  }
  // Initialize clerkClient and perform an operation
  const user = await createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  }).users.getUser(userId);

  // Return the retrieved user data
  return { serialisedUser: JSON.stringify(user) };
};

// ADD profile Details page
export default function ProfileDetails() {
  return (
    <div>
      <h1>Profile Details</h1>
    </div>
  );
}
