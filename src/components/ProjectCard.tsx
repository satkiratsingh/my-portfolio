import { ProjectDescription } from "@/static/projectsDescription";
import React from "react";

const ProjectCard = ({
  name,
  thumbnail,
  description,
  bgGradientFrom,
  bgGradientTo,
}: ProjectDescription) => {
  return (
    <div className="w-full group hover:cursor-pointer">
      <div
        className="w-full transition-all duration-200 group-hover:scale-105 overflow-hidden px-12 pt-12 max-md:h-[320px] h-[600px] max-2xl:h-[500px] rounded-3xl"
        style={{
          backgroundImage: `linear-gradient(to bottom right, ${bgGradientFrom}, ${bgGradientTo})`,
        }}
      ></div>
      <h4 className="transition-all duration-200 group-hover:translate-y-4 group-hover:scale-105 text-[24px] mt-2">
        {name}
      </h4>
      <p className="transition-all duration-200 group-hover:translate-y-4 group-hover:scale-105">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
