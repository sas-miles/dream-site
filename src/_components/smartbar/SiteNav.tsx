import React from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface SiteNavProps {
  onClose: () => void;
}

function SiteNav({ onClose }: SiteNavProps) {
  return (
    <div className="h-full border-r border-slate-800">
      <div className="flex h-full flex-col p-4 md:p-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-bold">HADRON</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="flex-grow">
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="block py-2 text-lg transition-colors hover:text-blue-400"
              >
                Drone
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-lg transition-colors hover:text-blue-400"
              >
                Technology
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-lg transition-colors hover:text-blue-400"
              >
                Invest
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-lg transition-colors hover:text-blue-400"
              >
                Resources
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-auto text-sm text-slate-500">Hadron Labs, 2024</div>
      </div>
    </div>
  );
}

export default SiteNav;
