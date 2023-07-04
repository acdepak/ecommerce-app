"use client";
import { Typography } from "@/components/Typography";
import { CryFaceIcon } from "@/icons";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-20">
      <div className="h-20 w-20">
        <CryFaceIcon />
      </div>
      <Typography varient="heading1" center className="max-w-4xl">
        The page you are looking for does not exist&#40;
      </Typography>
      <Typography varient="body1" center>
        We apologize for the inconvenience...
      </Typography>
      <Link href="/">
        <Typography varient="body1" color="sky">
          Home
        </Typography>
      </Link>
    </div>
  );
}
