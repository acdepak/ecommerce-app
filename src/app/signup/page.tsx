import { BreadCrumb, Button, Typography } from "@/components";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <BreadCrumb
        title="Create an Account"
        desc=""
        path="Home / create an account"
      />
      <div className="flex flex-col items-center justify-center gap-10 px-2 py-14">
        <Typography varient="heading4">CREATE YOUR OWN ACCOUNT:</Typography>

        <div className="flex w-full flex-col items-center justify-start gap-5 text-dark lg:relative lg:right-20 lg:justify-center">
          <div className="flex flex-col items-start gap-5 py-3 lg:flex-row lg:items-center">
            <label className="w-36">
              <Typography varient="body1">Social Title</Typography>
            </label>
            <div className="flex w-96 items-start  gap-5 lg:w-[460px] ">
              <div className="flex gap-2 text-lg">
                <input type="radio" value="Mr." name="social-title" />
                <span>Mr.</span>
              </div>
              <div className="flex gap-2 text-lg">
                <input type="radio" value="Ms." name="social-title" />
                <span>Ms.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
            <label className="w-36">
              <Typography varient="body1">First Name</Typography>
            </label>
            <input
              type="text"
              placeholder="Ananta"
              required
              className="w-96 rounded-md  border border-grayhard px-3 py-3 leading-tight text-grayhard focus:outline-none lg:w-[460px] "
            />
          </div>

          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
            <label className="w-36">
              <Typography varient="body1">Last Name</Typography>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              required
              className="w-96 rounded-md  border border-grayhard px-3 py-3 leading-tight text-grayhard focus:outline-none lg:w-[460px] "
            />
          </div>

          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
            <label className="w-36">
              <Typography varient="body1">Email</Typography>
            </label>
            <input
              type="email"
              required
              className="w-96 rounded-md  border border-grayhard px-3 py-3 leading-tight text-grayhard focus:outline-none lg:w-[460px] "
            />
          </div>

          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
            <label className="w-36">
              <Typography varient="body1">Password</Typography>
            </label>
            <input
              type="password"
              required
              className="w-96 rounded-md  border border-grayhard px-3 py-3 leading-tight text-grayhard focus:outline-none lg:w-[460px] "
            />
          </div>

          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
            <label className="w-36">
              <Typography varient="body1">Birthdate</Typography>
            </label>
            <input
              type="date"
              placeholder="MM/DD/YYYY"
              required
              className="w-96 rounded-md  border border-grayhard px-3 py-3 leading-tight text-grayhard focus:outline-none lg:w-[460px] "
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-8 px-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-4 h-5 w-6" />
            <Typography varient="body">
              Receive offers from our partners
            </Typography>
          </label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-4 h-5 w-6 " />
              <Typography varient="body">Sign up for our newsletter</Typography>
            </label>

            <Typography varient="body" width="md" className="pl-10">
              You may unsubscribe at any moment. For that purpose, please find
              contact into the legal notice
            </Typography>
          </div>
          <Button varient="login">CREATE AN ACCOUNT</Button>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 ">
          <Typography varient="heading5">ALREADY HAVE AN ACCOUNT</Typography>
          <Link href="/login" className="text-lg text-sky underline">
            log in!
          </Link>
        </div>
      </div>
    </div>
  );
}
