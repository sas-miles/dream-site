"use client";
import React from "react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { useSmartBarStore } from "~/store/smartbarStore";
function UserModalSignedOut() {
  const isChatActive = useSmartBarStore((state) => state.isChatActive);
  return (
    <div
      className={`flex flex-col rounded-sm bg-slate-900 ${
        isChatActive
          ? "items-start justify-start p-4 text-left"
          : "p-12 text-center"
      }`}
    >
      <div className="mb-8 text-white">
        <h2
          className={`!isChatActive ? "text-sm" : "text-xs text-center" } mb-4 font-bold`}
        >
          Sign up for a personalized experience
        </h2>
        <p className="text-sm text-slate-400">
          Get exclusive access to investor documents, press materials, and
          more...
        </p>
      </div>
      <div
        className={`flex flex-col gap-4 ${!isChatActive ? "items-center" : "items-start"}`}
      >
        <SignUpButton />
        <div className={`flex gap-2 text-sm`}>
          <p>Already have an account?</p>
          <SignInButton />
        </div>
      </div>
    </div>
  );
}

export default UserModalSignedOut;
