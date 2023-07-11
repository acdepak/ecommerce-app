import clsx from "clsx";
import { ReactEventHandler, ReactNode } from "react";

interface props {
  varient?: "footer" | "login" | "primary";
  disabled?: boolean;
  children?: ReactNode;
  onClick?: ReactEventHandler;
}

export const Button = ({
  onClick,
  disabled = false,
  children,
  varient = "footer",
}: props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "flex h-14 items-center justify-center rounded-full font-josefin text-sm font-bold",
        {
          "border-2 border-dark p-3 px-10 ": varient == "primary",
          "bg-sky px-10 py-4 text-white": varient == "footer",
          "w-96 bg-yellow py-3 tracking-widest lg:w-[460px]":
            varient === "login",
        }
      )}
    >
      {children}
    </button>
  );
};
