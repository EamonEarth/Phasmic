import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import React, { SetStateAction, useState } from "react";

interface PhoneInfoProps {
  showPhone: boolean;
  setShowPhone: React.Dispatch<SetStateAction<boolean>>;
  transOpacity: number;
  setTransOpacity: React.Dispatch<SetStateAction<number>>;
}
const PhoneInfo = React.forwardRef<HTMLDivElement, PhoneInfoProps>(
  (props, ref) => {
    const { showPhone, setShowPhone, transOpacity, setTransOpacity } = props;

    const handleClose = () => {
      setTransOpacity(0);
      setTimeout(() => {
        setShowPhone(false);
      }, 300);
    };
    return (
      <div
        ref={ref}
        className={cn(
          "bg-black opacity-85 text-white w-auto max-w-[95%] flex flex-col p-4 gap-x-2  rounded-t-3xl rounded-ss-full  shrink-0 relative shadow-2xl"
        )}
        style={{
          opacity: transOpacity,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <X
          className={cn(
            "opacity-50 cursor-pointer z-50",
            showPhone && `absolute right-2 top-2`
          )}
          onClick={handleClose}
        />
        <div className="flex flex-col items-center justify-center lg:flex-row p-2 relative">
          <div
            style={{ WebkitTextStroke: "1px #b670f8" }}
            className="flex flex-col p-2  gap-y-2 justify-center items-center relative lg:top-[60%] text-purple-500 object-contain"
          >
            <h2
              style={{ wordSpacing: "50px" }}
              className="text-2xl font-bold bg-black rounded-l-full pl-4 pr-2 border border-purple-500 py-1 flex items-center tracking-tighter"
            >
              <span className="text-5xl -mr-1">T</span>ristan{" "}
              <span className="text-5xl -mr-1">A</span>shley
            </h2>
            <p className="font-bold text-xl">CEO</p>
            <p className="font-bold text-lg shrink-0">+49 1234 5678</p>
          </div>
        </div>
        <div
          className={cn(
            " bottom-2 text-center relative lg:absolute lg:right-2 opacity-60 font-light text-xs text-white"
          )}
        >
          <p style={{ WebkitTextStroke: "1px white" }}>
            english | deutsch | français
          </p>
        </div>
      </div>
    );
  }
);

PhoneInfo.displayName = "PhoneInfo";

export default PhoneInfo;

// name, title, number, languages
