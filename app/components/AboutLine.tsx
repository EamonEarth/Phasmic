import { fuzzyBubbles, ubuntu } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

const AboutLine = () => {
  return (
    <div
      className={cn(
        " z-50 w-[80%] h-auto text-center text-white pb-12 -mt-12 text-sm md:text-lg font-semibold",
        ubuntu.className
      )}
    >
      An entertainment company specialised in underground and experimental art.
    </div>
  );
};

export default AboutLine;
