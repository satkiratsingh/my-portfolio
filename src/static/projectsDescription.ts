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
    bgGradientFrom: "#b9e31d",
    bgGradientTo: "#c9e26e",
  },
  {
    thumbnail: "/next.svg",
    name: "Raw Track",
    description: "Race tracking app.",
    bgGradientFrom: "#0f69e7",
    bgGradientTo: "#498ae6",
  },
  {
    thumbnail: "/next.svg",
    name: "Raw Track",
    description: "Race tracking app.",
    bgGradientFrom: "#e76113",
    bgGradientTo: "#e78145",
  },
];

export default projectsDescription;
