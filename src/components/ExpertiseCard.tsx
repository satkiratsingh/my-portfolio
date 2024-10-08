import React from "react";

interface ExpertiseCardProps {
  title: string;
  description: string;
}

const ExpertiseCard = ({ title, description }: ExpertiseCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[32px] max-sm:text-[18px] max-md:text-[24px] font-semibold flex flex-row items-center">
        <span className="material-symbols-outlined max-md:text-[18px] mr-2 max-sm:text-[14px] m-0">
          stat_0
        </span>
        {title}
      </h3>
      <p className="max-sm:text-[14px]">{description}</p>
    </div>
  );
};

export default ExpertiseCard;
