"use client";
import React from "react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

function UserModalSignedOut() {
  return (
    <div className="flex flex-col items-center justify-center rounded-sm bg-slate-900 p-12 text-center">
      <div className="mb-8 text-white">
        <h2 className="mb-4 text-xl font-bold">
          Sign up for a personalized experience
        </h2>
        <p className="text-sm text-slate-400">
          Get exclusive access to investor documents, press materials, and
          more...
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <SignUpButton />
        <div className="flex gap-2 text-sm">
          <p>Already have an account?</p>
          <SignInButton />
        </div>
      </div>
    </div>
  );
}

export default UserModalSignedOut;
