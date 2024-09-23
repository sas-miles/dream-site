import React from "react";
import Chat from "./Chat";
import ContextSideBar from "./ContextSideBar";
import SiteNav from "./SiteNav";

function OpenSmartBar() {
  return (
    <div className="container fixed inset-0 z-50 mx-auto flex flex-col items-center justify-center px-8 py-12">
      <div className="flex h-[100%] w-[100%] rounded-md bg-slate-950">
        {/* Site Nav */}
        <SiteNav />

        {/* Chat */}
        <Chat />

        {/* Context Sidebar */}
        <ContextSideBar />
      </div>
    </div>
  );
}

export default OpenSmartBar;
