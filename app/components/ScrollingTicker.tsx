import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React, { SetStateAction, useRef, useState } from "react";
import ServicesTooltip from "./ServicesTooltip";

interface ScrollingTickerProps {
  title: string;
  content: string[];
  scrollingContentType: string;
  Icon: React.ElementType;
  showTooltip: string;
  setShowTooltip: React.Dispatch<SetStateAction<string>>;
  highlighted: boolean;
  searchInput: string;
}

const ScrollingTicker = ({
  title,
  content,
  scrollingContentType,
  Icon,
  showTooltip,
  setShowTooltip,
  highlighted,
  searchInput,
}: ScrollingTickerProps) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearTooltipTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleCheck = () => {
    console.log(showTooltip, title);
    showTooltip === title;
  };

  return (
    <div
      style={{ transition: "max-height 0.8s " }}
      className={cn(
        "scrolling-ticker border border-l-0 border-r-0 flex flex-col h-auto   w-full",
        showTooltip === title ? "max-h-[500px]" : "max-h-[60px]",
        searchInput && !highlighted && "opacity-50"
      )}
    >
      <h2
        style={{
          WebkitTextStroke: "black 2px",
          lineHeight: "30px",
          wordSpacing: "8px",
          transition:
            "background-color 0.6s ease-in-out, background-gradient 0.6s ease-in-out",
        }}
        className={cn(
          "tracking-widest text-start pl-4 flex gap-x-4 bg-white items-center w-full border border-l-0 text-[14px] md:text-[18px]",
          showTooltip === title && "!bg-pink-300 !to-transparent",
          highlighted &&
            "bg-gradient-to-l from-transparent  to-pink-300 from-35% glitch"
        )}
      >
        <Icon className="opacity-80" size="16" />
        {title}
      </h2>

      <ServicesTooltip
        ulClassNames=""
        textClassNames="text-sm  justify-between flex"
        services={content}
        expandTooltip={showTooltip === title}
        searchInput={searchInput}
      />

      <div className={cn(" ", scrollingContentType)}>
        {Array.from({ length: 2 }).flatMap((_, duplicationIndex) =>
          content.map((contentTitle, index) => (
            <div
              style={{
                WebkitTextStroke: "1px black",
                lineHeight: "30px",
                wordSpacing: "8px",
                transition: "background-color 0.6s ease-in-out",
              }}
              key={`${duplicationIndex}-${index}`}
              className={cn(
                "ticker-item bg-white",
                showTooltip === title && "bg-blue-300"
              )}
            >
              {contentTitle}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ScrollingTicker;
