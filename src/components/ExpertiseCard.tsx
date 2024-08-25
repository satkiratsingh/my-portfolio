import React from "react";

interface ExpertiseCardProps {
  title: string;
  description: string;
}

const ExpertiseCard = ({ title, description }: ExpertiseCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[32px] max-md:text-[24px] font-semibold flex flex-row items-center">
        <span className="material-symbols-outlined m-0">stat_0</span>
        {title}
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default ExpertiseCard;
