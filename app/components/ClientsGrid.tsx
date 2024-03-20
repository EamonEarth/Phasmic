import Image from "next/image";
import React from "react";

import { ubuntu } from "../../lib/fonts";
import { cn } from "@/lib/utils";

interface ClientsGridProps {
  className: string;
}
const ClientsGrid = ({ className }: ClientsGridProps) => {
  return (
    <div
      className={cn(
        "h-auto w-full border flex flex-col md:grid grid-cols-10 items-center rounded-b-xl bg-white p-4",
        className
      )}
    >
      <div className="col-span-2 h-full flex flex-col justify-center uppercase tracking-wider text-center font-bold border-gray-400 border-dashed border-b-[1px] md:border-b-0 w-[50%] md:w-auto md:border-r-[1px] p-2 ">
        <p className={ubuntu.className}>Previous Partners</p>
      </div>
      <div className=" col-span-8 flex flex-wrap opacity-100 gap-x-4 items-center justify-center">
        <Image
          className="grayscale "
          src="/amt_logo.svg"
          alt="logo"
          height={85}
          width={85}
        />
        <Image
          className="grayscale "
          src="/goethe_logo.svg"
          alt="logo"
          height={85}
          width={85}
        />
        <Image
          className="grayscale "
          src="/imu_logo.svg"
          alt="logo"
          height={85}
          width={85}
        />
        <Image
          className="grayscale "
          src="/museum_logo.svg"
          alt="logo"
          height={85}
          width={85}
        />
        <Image
          className="grayscale "
          src="/novo_logo.svg"
          alt="logo"
          height={85}
          width={85}
        />
        <Image
          className="grayscale "
          src="/oxi_logo.png"
          alt="logo"
          height={85}
          width={85}
        />
        <Image
          className="grayscale "
          src="/transatlantic_logo.png"
          alt="logo"
          height={60}
          width={100}
        />
        <Image
          className="grayscale "
          src="/zdf_logo.svg"
          alt="logo"
          height={85}
          width={85}
        />
      </div>
    </div>
  );
};

export default ClientsGrid;
