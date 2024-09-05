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
        WebkitTextStroke: "1px black",
      }}
      className={cn(
        "relative top-0  h-auto flex flex-col z-50  text-white-- opacity-[95%] overflow-hidden bg-white",
        expandTooltip ? "max-h-[300px]" : "max-h-[0px] bg-white"
      )}
    >
      <ul
        className={cn(
          "relative flex  justify-center md:-inset-x-[10%]- gap-x-12 py-4 gap-y-2  ",
          ulClassNames
        )}
      >
        <div className="flex flex-col ">
          {services
            .sort()
            .filter((_, index) => index % 2 === 0)
            .map((service) => (
              <li
                key={service}
                className={cn(
                  "font-semibold",
                  textClassNames,
                  searchInput &&
                    service.toLowerCase().includes(searchInput.toLowerCase())
                    ? "bg-pink-300/50 text-lg"
                    : ""
                )}
              >
                • {service}
              </li>
            ))}
        </div>
        <div className="flex flex-col  ">
          {services
            .sort()
            .filter((_, index) => index % 2 === 1)
            .map((service) => (
              <li
                key={service}
                className={cn(
                  "font-semibold",
                  textClassNames,
                  searchInput &&
                    service.toLowerCase().includes(searchInput.toLowerCase())
                    ? "bg-pink-300/50"
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
