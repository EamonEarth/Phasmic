import { cn } from "@/lib/utils";
import React from "react";

import { slack, dancing, bungeeHairline } from "../../lib/fonts";

interface AboutGridProps {
  className: string;
}
const AboutGrid = ({ className }: AboutGridProps) => {
  return (
    <div
      className={cn(
        "h-full w-full flex flex-col md:grid grid-cols-8 items-center border p-4 bg-white",
        className
      )}
    >
      <div className="col-span-2 h-full w-[90%] flex gap-x-2 md:gap-x-0 py-2 md:pb-0 md:flex-col justify-start uppercase tracking-tighter text-center border-gray-400 border-dashed border-b-[1px] md:border-b-0 md:border-r-[1px]">
        <p className={dancing.className}>We</p>
        <p className={slack.className}>Are</p>
      </div>
      <div
        className={cn(
          "col-span-6   ml-2 lg:ml-12 md:text-end text-left text-xs md:text-sm tracking-wider pt-3 md:pt-0",
          bungeeHairline.className
        )}
        style={{
          lineHeight: "30px",
          WebkitTextStroke: "1px black",
          wordSpacing: "6px",
        }}
      >
        <p>
          - Your point of access to a wealth of the best creative talent.
        </p>
        <p>- Event/Production gurus with years of experience.</p>
        <p>- Good people to work with!</p>
      </div>
    </div>
  );
};

export default AboutGrid;
