import { ProhibitionIcon, TickIcon } from "@/icons";
import { Typography } from "./Typography";

export const StockCheck = (option: any) => {
  return (
    <div className="flex items-center gap-2 ">
      {option.stock == 0 ? (
        <div className="h-4 w-4 rotate-90 stroke-2 text-red">
          <ProhibitionIcon />
        </div>
      ) : (
        <div className="h-4 w-4 stroke-2 text-sky">
          <TickIcon />
        </div>
      )}

      <Typography varient="body1" color={option.stock < 1 ? "red" : "sky"}>
        {option.stock < 1 ? "Out of Stock" : "In Stock"}
      </Typography>
    </div>
  );
};
