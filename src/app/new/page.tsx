"use client";
import {
  BronzeStarIcon,
  DiamondIcon,
  GoldStarIcon,
  PlatinumIcon,
  SilverStarIcon,
} from "@/icons";
import { useState } from "react";

interface GiftOption {
  id: number;
  title: string;
  price: string;
  reference: string;
  icon: JSX.Element; // Change this type if your icon components have a different type
}
const GiftOptions: GiftOption[] = [
  {
    id: 1,
    title: "Bronze Box - value aprox. €85",
    price: "85",
    reference: "YREVTSLPRO61",
    icon: <BronzeStarIcon />,
  },
  {
    id: 2,
    title: "Silver Box - value aprox. €140",
    price: "€140",
    reference: "YREVTSLPRO62",
    icon: <SilverStarIcon />,
  },
  {
    id: 3,
    title: "Gold Box - value aprox. €195",
    price: "195",
    reference: "YREVTSLPRO63",
    icon: <GoldStarIcon />,
  },
  {
    id: 4,
    title: "Platinum Box - value aprox. €295",
    price: "295",
    reference: "YREVTSLPRO64",
    icon: <PlatinumIcon />,
  },
  {
    id: 5,
    title: "Diamond Box - value aprox. €350",
    price: "350",
    reference: "YREVTSLPRO65",
    icon: <DiamondIcon />,
  },
];

const DefaultGift: React.FC<{ item: GiftOption; onClick: () => void }> = ({
  item,
  onClick,
}) => (
  <div
    className="flex w-fit items-center justify-center gap-2 border border-grayhard px-10"
    onClick={onClick}
  >
    <div className="h-10 w-10">{item.icon}</div>
    <span>{item.title}</span>
  </div>
);

const OptionsBox: React.FC<{
  options: GiftOption[];
  onOptionSelect: (option: GiftOption) => void;
}> = ({ options, onOptionSelect }) => (
  <div className="flex justify-center">
    <div className="flex flex-col items-start gap-2">
      {options.map((option) => (
        <div
          key={option.id}
          className="flex items-center gap-2"
          onClick={() => onOptionSelect(option)}
        >
          <div className="h-10 w-10">{option.icon}</div>
          <span>{option.title}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function page() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedGift, setSelectedGift] = useState<GiftOption>(
    GiftOptions[GiftOptions.length - 1]
  );

  const showAllOptions = () => {
    setShowOptions(!showOptions);
  };

  const hideOptions = () => {
    setShowOptions(false);
  };

  const handleOptionSelect = (option: GiftOption) => {
    setSelectedGift(option);
    hideOptions();
  };

  return (
    <div className="flex flex-col items-center py-10">
      <div className="default-items">
        <DefaultGift item={selectedGift} onClick={showAllOptions} />
      </div>
      {showOptions && (
        <OptionsBox options={GiftOptions} onOptionSelect={handleOptionSelect} />
      )}
    </div>
  );
}
