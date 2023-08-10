"use client";

import { useState } from "react";

export const MenuAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-7 rounded-full bg-dark group-hover:bg-red transition ease transform duration-300`;

  return (
    <button
      className="group flex h-10 w-10 flex-col items-center justify-center gap-1 "
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "translate-y-2 rotate-45 opacity-100" : "opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "-translate-y-2 -rotate-45 opacity-100" : "opacity-100"
        }`}
      />
    </button>
  );
};
