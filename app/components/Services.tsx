import React from "react";
import { slack, dancing, ubuntu, bungeeHairline } from "../../lib/fonts";
import { cn } from "@/lib/utils";

interface ServicesProps {
  className: string;
}
const Services = ({ className }: ServicesProps) => {
  return (
    <div
      className={cn(
        "w-full h-full grid grid-cols-8 items-center border rounded-b-xl p-4 bg-white",
        className
      )}
    >
      <div
        className={cn(
          "col-span-2 uppercase tracking-tighter text-center h-full border-gray-400 border-dashed border-r-[1px] flex flex-col items-center justify-center",
          ubuntu.className
        )}
      >
        <p className={dancing.className}>Services</p>
        <p className={slack.className}>Offered</p>
      </div>
      <div
        className={cn(
          "col-span-6  ml-2 lg:ml-12 md:text-left text-left text-xs md:text-sm tracking-wide",
          bungeeHairline.className
        )}
        style={{
          WebkitTextStroke: "1px black",
          lineHeight: "30px",
          wordSpacing: "8px",
        }}
      >
        <p className="">- Conceptualize, organise and realise your events.</p>
        <p className="">- Bring domain-specific expertise to your project. </p>
        <p className="">
          - Align your vision with the trends and capabilities of today.{" "}
        </p>
      </div>
    </div>
  );
};

export default Services;
