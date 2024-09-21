import React from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import UserModalSignedOut from "./UserModalSignedOut";
import UserModalSignedIn from "./UserModalSignedIn";

function UserModal() {
  return (
    <div>
      <SignedOut>
        <UserModalSignedOut />
      </SignedOut>
      <SignedIn>
        <UserModalSignedIn />
      </SignedIn>
    </div>
  );
}

export default UserModal;
