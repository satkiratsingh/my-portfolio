export interface ProjectDescription {
  thumbnail: string;
  name: string;
  description: string;
  bgGradientFrom: string;
  bgGradientTo: string;
}

export const projectsDescription: ProjectDescription[] = [
  {
    thumbnail: "/next.svg",
    name: "Raw Track",
    description: "Race tracking app.",
    bgGradientFrom: "#7A19F3",
    bgGradientTo: "#A952F3",
  },
  {
    thumbnail: "/next.svg",
    name: "Raw Track",
    description: "Race tracking app.",
    bgGradientFrom: "#006aff",
    bgGradientTo: "#0e53b3",
  },
  {
    thumbnail: "/next.svg",
    name: "Raw Track",
    description: "Race tracking app.",
    bgGradientFrom: "#7A19F3",
    bgGradientTo: "#A952F3",
  },
];

export default projectsDescription;
