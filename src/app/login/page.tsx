"use client";
import { BreadCrumb, Button, Typography } from "@/components";
import { useState } from "react";

export default function page() {
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <>
      <BreadCrumb title="Sign-In" desc="" path="Home / Login" />
      <div className="flex flex-col gap-5 py-10">
        <Typography varient="heading5" center>
          SIGN-IN TO YOUR ACCOUNT:
        </Typography>
        <div className="relative right-20 flex flex-col items-center gap-2">
          <div className="flex items-center gap-5">
            <label className="w-40 px-10">
              <Typography varient="body">Email</Typography>
            </label>
            <input
              type="email"
              placeholder="your@mail.com"
              className="w-96 border-2 border-gray px-5 py-2 font-josefin text-xl text-dark focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-5">
            <label className="w-40 px-10">
              <Typography varient="body">Password</Typography>
            </label>
            <div className="flex w-96 items-center border-2 border-gray">
              <input
                type="password"
                className="w-full border-none px-5 py-2 font-josefin text-xl text-dark focus:outline-none"
              />
              <div className="bg-red px-1">h</div>
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
