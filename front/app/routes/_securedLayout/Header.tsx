import { Link } from "@remix-run/react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/remix";

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          SaaS
        </Link>
      </div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
