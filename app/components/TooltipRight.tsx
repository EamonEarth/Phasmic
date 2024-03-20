"use client";

import { ubuntu } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React, { SetStateAction, useEffect, useState } from "react";

interface TooltipRightProps {
  services: string[];
  title: string;
  Icon: React.ElementType;
  expandTooltip: boolean;
  setExpandTooltip: React.Dispatch<SetStateAction<boolean>>;
  textClassNames: string;
  ulClassNames: string;
}

const TooltipRight = ({
  services,
  title,
  Icon,
  expandTooltip,
  setExpandTooltip,
  textClassNames,
  ulClassNames,
}: TooltipRightProps) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  return (
    <div
      // style={{
      //   transformOrigin: "top",
      //   transform: loaded ? "scaleY(1)" : "scaleY(0)",
      //   transition: "transform 0.5s ease-in-out",
      // }}
      className={cn(
        "relative right-0 ml-24 h-auto w-[50%] flex flex-col z-50 bg-white text-white opacity-[95%] ",
        // bg-green-400
        ubuntu.className

        // expandTooltip && "h-[150px]"
      )}
    >
      <Icon className="absolute text-white bottom-0 right-0  object-contain opacity-30 z-0" />
      <h2
        // style={{ WebkitTextStroke: "2px black" }}
        className="flex gap-x-2 text-base  bg-black p-2 "
        // bg-pink-200
      >
        <Icon className="" size="24" />»{title}
      </h2>
      <ul className={cn("", ulClassNames)}>
        {services.map((service) => (
          <li
            // style={{ WebkitTextStroke: "1px black" }}
            key={service}
            className={cn("text-black", textClassNames)}
          >
            •{service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TooltipRight;
