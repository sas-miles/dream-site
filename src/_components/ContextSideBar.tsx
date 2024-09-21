import React from "react";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { useSmartBarStore } from "../store/smartbarStore";
import { ChevronsDownUp, X } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import UserModal from "./UserModal";

function ContextSideBar() {
  const { setIsOpen, isChatActive } = useSmartBarStore();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex w-full flex-col gap-12 border-l border-slate-800 p-4">
      <div>
        <Button
          onClick={handleClose}
          size="icon"
          className="flex w-full items-center gap-2 rounded-sm bg-blue-600 text-white"
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
          <Button
            className="justify-start rounded-sm bg-slate-800 normal-case text-slate-300"
            size="sm"
          >
            Approach to engineering
          </Button>
          <CollapsibleContent className="flex flex-col gap-2">
            <Button
              className="justify-start rounded-sm bg-slate-800 normal-case text-slate-300"
              size="sm"
            >
              Design principles
            </Button>
            <Button
              className="justify-start rounded-sm bg-slate-800 normal-case text-slate-300"
              size="sm"
            >
              Company values
            </Button>
          </CollapsibleContent>
        </div>
      </Collapsible>

      <div className="flex flex-col gap-2">
        <Collapsible>
          <div className="flex flex-col gap-2">
            <CollapsibleTrigger
              className={cn(
                "flex w-full items-center justify-between rounded-md p-2 transition-colors",
                "hover:bg-slate-800",
                "data-[state=open]:bg-slate-800",
              )}
            >
              {" "}
              <h3 className="text-left text-sm uppercase">Related Resources</h3>
              <div>
                <ChevronsDownUp className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </div>
            </CollapsibleTrigger>
            <Button
              className="justify-start rounded-sm bg-slate-800 text-left normal-case text-slate-300"
              size="sm"
            >
              2024 Annual Report
            </Button>
            <CollapsibleContent className="flex flex-col gap-2">
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
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>
      {isChatActive && <UserModal />}
    </div>
  );
}

export default ContextSideBar;
