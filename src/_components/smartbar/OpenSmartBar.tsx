import React, { useState } from "react";
import Chat from "./Chat";
import ContextSideBar from "./ContextSideBar";
import SiteNav from "./SiteNav";

function OpenSmartBar() {
  const [isContextSideBarOpen, setIsContextSideBarOpen] = useState(false);
  const [isSiteNavOpen, setIsSiteNavOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950">
      <div className="flex h-full">
        {/* Site Nav */}
        <div
          className={`absolute inset-y-0 left-0 w-3/4 flex-shrink-0 overflow-y-auto transition-transform duration-300 ease-in-out md:relative md:w-64 lg:w-72 xl:w-80 ${isSiteNavOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} `}
        >
          <SiteNav onClose={() => setIsSiteNavOpen(false)} />
        </div>

        {/* Chat and Context Sidebar Container */}
        <div className="flex flex-grow flex-col overflow-hidden md:flex-row">
          {/* Chat */}
          <div className="flex flex-grow flex-col overflow-hidden">
            <Chat
              onToggleContextSideBar={() =>
                setIsContextSideBarOpen(!isContextSideBarOpen)
              }
              isContextSideBarOpen={isContextSideBarOpen}
              onToggleSiteNav={() => setIsSiteNavOpen(!isSiteNavOpen)}
            />
          </div>

          {/* Context Sidebar */}
          <div
            className={`absolute inset-y-0 right-0 w-3/4 flex-shrink-0 overflow-y-auto transition-transform duration-300 ease-in-out md:relative md:w-64 lg:w-72 xl:w-80 ${isContextSideBarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"} `}
          >
            <ContextSideBar
              isOpen={isContextSideBarOpen}
              onClose={() => setIsContextSideBarOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenSmartBar;
