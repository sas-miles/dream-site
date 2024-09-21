import React from "react";
import { Button } from "./ui/button";
import { useSmartBarStore } from "~/store/smartbarStore";
import { X } from "lucide-react";

function ContextSideBar() {
  const { toggleSmartBar } = useSmartBarStore();
  return (
    <div className="flex w-1/3 flex-col gap-12 border-l border-slate-800 p-4">
      <div>
        <Button
          onClick={toggleSmartBar}
          size="icon"
          className="flex w-full items-center gap-2 bg-blue-600 text-white"
        >
          Close
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 text-sm uppercase">Dive Deeper...</h3>
        <Button
          className="justify-start rounded-sm bg-slate-800 normal-case text-slate-300"
          size="sm"
        >
          Approach to engineering
        </Button>
        <Button
          className="justify-start rounded-sm bg-slate-800 normal-case text-slate-300"
          size="sm"
        >
          Approach to engineering
        </Button>
        <Button
          className="justify-start rounded-sm bg-slate-800 normal-case text-slate-300"
          size="sm"
        >
          Approach to engineering
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 text-sm uppercase">Related Resources</h3>
        <Button
          className="justify-start rounded-sm bg-slate-800 text-left normal-case text-slate-300"
          size="sm"
        >
          2024 Annual Report
        </Button>
        <Button
          className="justify-start rounded-sm bg-slate-800 text-left normal-case text-slate-300"
          size="sm"
        >
          CEO Keynote
        </Button>
        <Button
          className="justify-start rounded-sm bg-slate-800 text-left normal-case text-slate-300"
          size="sm"
        >
          Compliance Report
        </Button>
      </div>
    </div>
  );
}

export default ContextSideBar;
