import { Typography } from "./Typography";

export const BreadCrumb = ({
  title,
  desc,
  path,
}: {
  title: string;
  desc: string;
  path: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-5 bg-gray py-10">
      <Typography varient="heading2" color="dark" center>
        {title}
      </Typography>
      <Typography
        varient="body1"
        center
        className={`max-w-6xl ${desc === "" && "hidden"}`}
      >
        {desc}
      </Typography>
      <Typography varient="body" color="grayhard" center>
        {path}
      </Typography>
    </div>
  );
};
