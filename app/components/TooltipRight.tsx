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
    className={cn(
        "relative right-0 ml-24 h-auto w-[50%] flex flex-col z-50 bg-white text-white opacity-[95%] ",
        ubuntu.className)}>
      
      <Icon className="absolute text-white bottom-0 right-0  object-contain opacity-30 z-0" />
      <h2 className="flex gap-x-2 text-base  bg-black p-2">
        <Icon className="" size="24" />»{title}
      </h2>
      <ul className={cn("", ulClassNames)}>
        {services.map((service) => (
          <li
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
