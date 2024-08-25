export interface ProjectDescription {
  thumbnail: string;
  name: string;
  description: string;
  bgGradientFrom: string;
  bgGradientTo: string;
  projectLink?: string;
}

export const projectsDescription: ProjectDescription[] = [
  {
    thumbnail: "/images/elsa-montevideo.png",
    name: "Elsa Montevideo",
    description: "Software Solutions.",
    bgGradientFrom: "#7A19F3",
    bgGradientTo: "#A952F3",
  },
  {
    thumbnail: "/images/raw_track.png",
    name: "Raw Track",
    description: "Race tracking app.",
    bgGradientFrom: "#b9e31d",
    bgGradientTo: "#c9e26e",
  },
  {
    thumbnail: "/images/santa_property.jpeg",
    name: "Santa Property",
    description: "Property listing website.",
    bgGradientFrom: "#0f69e7",
    bgGradientTo: "#498ae6",
  },
  {
    thumbnail: "/images/raw_track.png",
    name: "Raw Track",
    description: "Race tracking app.",
    bgGradientFrom: "#e76113",
    bgGradientTo: "#e78145",
  },
];

export default projectsDescription;
