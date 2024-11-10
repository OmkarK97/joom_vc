import Image from "next/image";
import React from "react";

interface HomeCardProps {
  img: string;
  title: string;
  discription: string;
  bgColour: string;
  handleClick: () => void;
}

const HomeCard = ({
  img,
  title,
  discription,
  bgColour,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={`${bgColour} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{discription}</p>
      </div>
    </div>
  );
};

export default HomeCard;
