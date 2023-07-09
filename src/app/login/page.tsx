"use client";
import { BreadCrumb, Button, Typography } from "@/components";
import { EyeClosedIcon, EyeOpenIcon } from "@/icons";
import clsx from "clsx";
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
              className="w-96 border-2 border-gray px-5 py-2 font-josefin text-xl text-dark focus:outline-none"
            />
          </div>

          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
            <label className="w-40 lg:px-10">
              <Typography varient="body">Password</Typography>
            </label>

            <div className="flex w-96 items-center border-2 border-gray">
              <input
                type={isDisabled ? "password" : "text"}
                className="w-full border-none px-5 py-2 font-josefin text-xl text-dark focus:outline-none"
              />

              <div
                onClick={() => setIsDisabled(!isDisabled)}
                className={clsx("h-4 w-5", {
                  "hidden opacity-0 ": !isDisabled,
                })}
              >
                <EyeClosedIcon />
              </div>

              <div
                onClick={() => setIsDisabled(!isDisabled)}
                className={clsx("h-4 w-5", {
                  "hidden opacity-0 ": isDisabled,
                })}
              >
                <EyeOpenIcon />
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

        <div>
          <Typography varient="heading5" center>
            SIGN-IN TO YOUR ACCOUNT:
          </Typography>
          <Typography varient="body1" color="sky" center className="underline">
            Create new!
          </Typography>
        </div>
      </div>
    </>
  );
}
