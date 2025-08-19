import React from "react";

export default function Navbar() {
  return (
    <nav className="flex  justify-between items-center   mx-auto my-4 ">
      <img src="/navLogo.svg" alt="logo" className="max-w-[50px]" />
      <div>
        <ul
          className="flex
         items-center justify-center gap-12 mr-2.5"
        >
          <li>Team</li>
          <li>Team</li>
          <li>Team</li>
          <li>Team</li>
        </ul>
      </div>
    </nav>
  );
}
