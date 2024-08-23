import type { MetaFunction } from "@remix-run/node";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/remix";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Index Route</h1>
      <SignedIn>
        <p>You are signed in!</p>
        <div>
          <p>View your profile here</p>
          <UserButton />
        </div>
        <div>
          <SignOutButton />
        </div>
      </SignedIn>
      <SignedOut>
        <p>You are signed out</p>
        <div>
          <SignInButton />
        </div>
        <div>
          <SignUpButton />
        </div>
      </SignedOut>
    </div>
  );
}
