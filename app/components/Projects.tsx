import { bungeeShade } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Phasmic from "../../public/phasmic.png";

const PROJECTS = [
  {
    name: "Music For The Cosmos",
    byline: "Project Byline",
    text: "Longer text Longer text Longer text Longer text Longer text Longer text Longer text Longer text Longer text ",
    images: ["/cosmos.jpeg", "/spiral.jpeg"],
  },
  {
    name: "Cosmos For The Subterfs",
    byline: "Project Byline",
    text: "Tonger LextTonger LextTonger LextTonger LextTonger LextTonger LextTonger Lext",
    images: ["/spiral.jpeg", "/cosmos.jpeg"],
  },
];

interface ProjectsProps {
  id: string;
}

const Projects = ({ id }: ProjectsProps) => {
  const imageUrl = "/phasmic.png";
  return (
    <div id={id} className="h-full w-full flex flex-col gap-y-4 relative pt-8">
      <h2
        className={cn(
          "relative flex justify-center   text-white text-6xl font-bold uppercase",
          bungeeShade.className
        )}
        style={{ WebkitTextStroke: "#a855f7 1px" }}
      >
        Past Phasms
      </h2>
      {PROJECTS.map((project) => (
        <div
          key={project.name}
          className="flex flex-col lg:grid md:grid-cols-8 border-4 border-purple-500 rounded-xl gap-y-2 relative"
          style={{
            borderWidth: "2px",
            borderStyle: "dotted",
            borderImage:
              "repeating-linear-gradient(15deg, transparent, white , rgba(168, 85,247, 1) 40px) 1 round",
          }}
        >
          <div className="col-span-3 gap-y-1 pb-2 md:pb-0 h-full flex flex-col justify-center items-center lg:items-end text-center lg:text-end uppercase tracking-tighter  bg-black text-white pr-4">
            <h2 className="pt-4 md:pt-0 text-lg">{project.name}</h2>
            <p className="text-sm font-light">{project.byline}</p>
            <p className="text-sm max-w-[75%]">{project.text}</p>
            <span className="h-[1px] w-[90%] bg-white"></span>
          </div>
          <div className="col-span-5 h-full  flex flex-wrap flex-row gap-y-2 gap-x-4  bg-gradient-to-b from-purple-500/50 via-black to-purple-500/50 justify-center relative object-contain p-4 rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl">
            <Image
              className="object-contain rounded border bg-black"
              src={project.images[0]}
              alt={`Image of ${project.name}`}
              height={350}
              width={350}
            />
            <Image
              className="object-contain rounded border bg-black"
              src={project.images[1]}
              alt={`Image of ${project.name}`}
              height={350}
              width={350}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
