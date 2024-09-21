import React from "react";

function SiteNav() {
  return (
    <div className="w-1/3 border-r border-slate-800">
      <div className="flex h-[100%] flex-col items-center justify-between py-12">
        <div className="flex h-[100%] flex-col justify-between px-8">
          <h2>HADRON</h2>

          <div className="flex w-[100%]">
            <ul className="flex flex-col justify-between gap-12">
              <li className="text-lg uppercase">
                <a href="#">Drone</a>
              </li>
              <li className="text-lg uppercase">
                <a href="#">Technology</a>
              </li>
              <li className="text-lg uppercase">
                <a href="#">Invest</a>
              </li>
              <li className="text-lg uppercase">
                <a href="#">Resources</a>
              </li>
            </ul>
          </div>
          <div>Hadron Labs, 2024</div>
        </div>
      </div>
    </div>
  );
}

export default SiteNav;
