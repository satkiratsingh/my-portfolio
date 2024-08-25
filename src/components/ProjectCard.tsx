import { ProjectDescription } from "@/static/projectsDescription";
import Image from "next/image";
import React from "react";

const ProjectCard = ({
  name,
  thumbnail,
  description,
  bgGradientFrom,
  bgGradientTo,
  projectLink,
}: ProjectDescription) => {
  return (
    <div className="w-full group hover:cursor-pointer">
      <div
        className="w-full flex flex-col items-end justify-start transition-all duration-200 sm:group-hover:scale-105 overflow-hidden px-12 pt-12 max-md:h-[320px] h-[600px] max-2xl:h-[500px] rounded-3xl"
        style={{
          backgroundImage: `linear-gradient(to bottom right, ${bgGradientFrom}, ${bgGradientTo})`,
        }}
      >
        <Image src={thumbnail} alt={name} width={600} height={600} />
      </div>
      <h4 className="transition-all duration-200 sm:group-hover:translate-y-4 sm:group-hover:scale-105 text-[24px] mt-2">
        {name}
      </h4>
      <p className="transition-all duration-200 sm:group-hover:translate-y-4 sm:group-hover:scale-105">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
