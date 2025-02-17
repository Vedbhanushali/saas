import { SignOutButton } from "@clerk/remix";

export default function PrivateRoute() {
  return (
    <div>
      <h1>This is private</h1>
      <SignOutButton />
    </div>
  );
}
