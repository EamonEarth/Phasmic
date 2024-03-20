"use client";

import { ubuntu } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React, { SetStateAction, useEffect, useState } from "react";

interface ServicesTooltipProps {
  services: string[];
  expandTooltip: boolean;
  textClassNames: string;
  ulClassNames: string;
  searchInput: string;
}

const ServicesTooltip = ({
  services,
  expandTooltip,
  textClassNames,
  ulClassNames,
  searchInput,
}: ServicesTooltipProps) => {
  return (
    <div
      style={{
        transition:
          "max-height 0.8s ease-in-out, background-color 0.6s ease-in-out",
      }}
      className={cn(
        "relative top-0 w-auto h-auto flex flex-col z-50  text-white opacity-[95%] overflow-hidden",
        ubuntu.className,
        expandTooltip ? "max-h-[300px] bg-green-800" : "max-h-[0px] bg-white"
      )}
    >
      <ul
        className={cn(
          "relative flex  justify-center md:justify-normal md:inset-x-[10%] gap-x-12 py-4 gap-y-2",
          ulClassNames
        )}
      >
        <div className="flex flex-col">
          {services
            .filter((_, index) => index % 2 === 0)
            .map((service) => (
              <li
                key={service}
                className={cn(
                  "text-white font-semibold",
                  textClassNames,
                  searchInput &&
                    service.toLowerCase().includes(searchInput.toLowerCase())
                    ? "!text-pink-300"
                    : ""
                )}
              >
                • {service}
              </li>
            ))}
        </div>
        <div className="flex flex-col ">
          {services
            .filter((_, index) => index % 2 === 1)
            .map((service) => (
              <li
                key={service}
                className={cn(
                  "text-white font-semibold",
                  textClassNames,
                  searchInput &&
                    service.toLowerCase().includes(searchInput.toLowerCase())
                    ? "!text-pink-300"
                    : ""
                )}
              >
                • {service}
              </li>
            ))}
        </div>
      </ul>
    </div>
  );
};

export default ServicesTooltip;
