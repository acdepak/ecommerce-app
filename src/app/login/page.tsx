"use client";
import { BreadCrumb, Button, Typography } from "@/components";
import { EyeClosedIcon, EyeOpenIcon } from "@/icons";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <BreadCrumb title="Sign-In" desc="" path="Home / Login" />
      <div className="flex flex-col gap-5 py-10">
        <Typography varient="heading5" center>
          SIGN-IN TO YOUR ACCOUNT:
        </Typography>

        <div className="relative flex flex-col items-center gap-2 lg:right-24">
          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
            <label className="w-40 lg:px-10 ">
              <Typography varient="body">Email</Typography>
            </label>

            <input
              type="email"
              placeholder="your@mail.com"
              required
              className="w-96 border-2 border-gray px-5 py-3 font-josefin text-xl text-dark focus:outline-none lg:w-[460px]"
            />
          </div>

          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
            <label className="w-40 lg:px-10">
              <Typography varient="body">Password</Typography>
            </label>

            <div className="flex w-96 items-center border-2 border-gray lg:w-[460px]">
              <input
                type={isHidden ? "password" : "text"}
                required
                className="w-11/12 border-none px-5 py-3 font-josefin text-xl text-dark focus:outline-none"
              />

              <div
                onClick={() => setIsHidden(!isHidden)}
                className={clsx("h-4 w-5", {
                  "hidden opacity-0 ": !isHidden,
                })}
              >
                <EyeOpenIcon />
              </div>

              <div
                onClick={() => setIsHidden(!isHidden)}
                className={clsx("h-4 w-5", {
                  "hidden opacity-0 ": isHidden,
                })}
              >
                <EyeClosedIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 text-center">
          <Button varient="login" disabled={isDisabled}>
            SIGN IN
          </Button>
          <Typography varient="body1" color="sky" className="underline">
            Forgot your password?
          </Typography>
        </div>

        <div className="pt-10">
          <Typography varient="heading5" center>
            SIGN-IN TO YOUR ACCOUNT:
          </Typography>
          <Link href={"/signup"}>
            <Typography
              varient="body1"
              color="sky"
              center
              className="underline"
            >
              Create new!
            </Typography>
          </Link>
        </div>
      </div>
    </>
  );
}
