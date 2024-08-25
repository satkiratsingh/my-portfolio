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
    <div className="w-full">
      <div
        className="w-full overflow-hidden px-12 pt-12 h-[500px] rounded-3xl"
        style={{
          backgroundImage: `linear-gradient(to bottom right, ${bgGradientFrom}, ${bgGradientTo})`,
        }}
      ></div>
      <h4 className="text-[24px] mt-2">{name}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
