import React from "react";
import { useSmartBarStore } from "../store/smartbarStore";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useSharedChat } from "~/hooks/useSharedChat";

function ClosedSmartBar() {
  const { toggleSmartBar } = useSmartBarStore();
  const { input, handleInputChange, handleSubmit } = useSharedChat();

  return (
    <div className="fixed bottom-8 left-0 right-0 px-4">
      <div className="mx-auto flex max-w-screen-lg items-center justify-between rounded-md border border-slate-800 bg-slate-950">
        {/* Menu Button */}
        <div className="w-1/3 border-r border-slate-800 p-2">
          <Button
            onClick={toggleSmartBar}
            size="icon"
            className="flex w-full items-center gap-2 rounded-sm bg-blue-600 text-white"
          >
            Menu
            <MenuIcon className="h-4 w-4" />
          </Button>
        </div>

        {/* Search/Chat Input */}
        <div className="w-full">
          <div className="mx-4 flex-grow">
            <form className="flex w-full items-center" onSubmit={handleSubmit}>
              <Input
                value={input}
                onChange={handleInputChange}
                className="rounded-sm border-slate-800 bg-slate-950 text-white"
              />
              <Button
                type="submit"
                className="ml-2 rounded-sm bg-blue-600 px-4 py-2 text-white"
              >
                Send
              </Button>
            </form>
          </div>
        </div>

        {/* Login Link */}
        <div className="w-1/3 border-l border-slate-800 p-2">
          <button className="flex w-full justify-center px-4 py-2 text-white">
            <a href="#" className="flex items-center text-blue-600">
              LOGIN
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 000 2h10a1 1 0 100-2H3zM3 9a1 1 0 000 2h6a1 1 0 100-2H3zM3 13a1 1 0 000 2h10a1 1 0 100-2H3z"
                  clipRule="evenodd"
                />
                <path d="M13 9l4 4-4 4m-1-8v8m0-8v8" />
              </svg>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClosedSmartBar;
