import clsx from "clsx";
import { ReactEventHandler, ReactNode } from "react";

interface props {
  varient?: string;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: ReactEventHandler;
}

export const Button = ({
  onClick,
  disabled,
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
          "bg-sky p-4 px-10 text-white": varient == "footer",
        }
      )}
    >
      {children}
    </button>
  );
};
