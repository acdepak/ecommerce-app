"use client";
import React, { useState } from "react";

export const InputIncreaseDecrease = ({ stock }: { stock: number }) => {
  const [value, setValue] = useState<number>(1);

  const onValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = Number(e.target.value);
    setValue(input);
  };

  const minSet = () => {
    value > 1 && setValue(value - 1);
  };

  const maxSet = () => {
    value == stock && setValue(value + 1);
  };
  return (
    <div>
      <div className="flex w-fit items-center border border-grayhard bg-white py-2">
        <div
          className="pl-4 text-4xl text-grayhard hover:cursor-pointer"
          onClick={minSet}
        >
          -
        </div>
        <input
          className="w-14 text-center text-lg focus:outline-none"
          value={value}
          onChange={onValChange}
        />

        <div
          className="pr-4 text-4xl text-grayhard hover:cursor-pointer"
          onClick={maxSet}
        >
          +
        </div>
      </div>
    </div>
  );
};
