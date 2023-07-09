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
        "rounded-full font-josefin text-sm font-bold leading-10",
        {
          "border border-black p-3 px-10 ": varient == "primary",
          "bg-sky px-10 py-4 text-white": varient == "footer",
          "bg-yellow px-40 py-3 tracking-widest": varient === "login",
        }
      )}
    >
      {children}
    </button>
  );
};
