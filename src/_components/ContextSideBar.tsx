import React from "react";
import { cn } from "~/lib/utils";

import { Button } from "./ui/button";
import { useSmartBarStore, useIsChatActive } from "~/store/smartbarStore";
import { ChevronsDownUp, X } from "lucide-react";
import UserModal from "./UserModal";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";

function ContextSideBar() {
  const { toggleSmartBar } = useSmartBarStore();

  const isChatActive = useIsChatActive();

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
      <Collapsible>
        <div className="flex flex-col gap-2">
          <CollapsibleTrigger
            className={cn(
              "flex w-full items-center justify-between rounded-md p-2 transition-colors",
              "hover:bg-slate-800",
              "data-[state=open]:bg-slate-800",
            )}
          >
            <h3 className="text-left text-sm uppercase">Dive Deeper...</h3>
            <div>
              <ChevronsDownUp className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col gap-2">
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
          </CollapsibleContent>
        </div>
      </Collapsible>

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
      {isChatActive && <UserModal />}
    </div>
  );
}

export default ContextSideBar;
