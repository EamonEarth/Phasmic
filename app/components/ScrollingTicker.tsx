import { cn } from "@/lib/utils";
import { LucideIcon, Search, SearchCheck } from "lucide-react";
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

  const highlightMatch = (contentTitle: string, searchInput: string) => {
    if (!searchInput) return contentTitle; // Return original if no search input

    const lowerCaseContent = contentTitle.toLowerCase();
    const lowerCaseSearchInput = searchInput.toLowerCase();
    const matchStart = lowerCaseContent.indexOf(lowerCaseSearchInput);
    if (matchStart === -1) return contentTitle; // Return original if no match

    const matchEnd = matchStart + searchInput.length;

    // Splitting the title into three parts: before, match, after
    const beforeMatch = contentTitle.substring(0, matchStart);
    const matchText = contentTitle.substring(matchStart, matchEnd);
    const afterMatch = contentTitle.substring(matchEnd);

    // Return a combination of elements, highlighting the match
    return (
      <>
        {beforeMatch}
        <span
          style={{
            textDecoration: "underline",
            transition: "underline 0.1s ease-in-out",
          }}
        >
          {matchText}
        </span>
        {afterMatch}
      </>
    );
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
        textClassNames="text-xs md:text-sm  justify-between flex"
        services={content}
        expandTooltip={showTooltip === title}
        searchInput={searchInput}
      />

      {/* <div className={cn(" ", scrollingContentType)}> */}
      <div className={cn("scrolling-content ", scrollingContentType)}>
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
                "ticker-item- flex px-[0.8rem] items-center relative bg-white z-[-10]",
                showTooltip === title && "bg-blue-300",
                contentTitle
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) && "text-pink-300"
              )}
            >
              {highlightMatch(contentTitle, searchInput)}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ScrollingTicker;

// <div
//   className={cn(
//     "absolute -botttom-12 flex justify-around w-full h-[50%] opacity-30 z-[-5] bg-pink-500",
//     contentTitle.length / 10 > 2 &&
//       "!w-[50%] left-[30%] rounded-se-full"
//   )}
// >
//   {/* <SearchCheck size="18" />
//   <SearchCheck size="18" />
//   <SearchCheck size="18" />
//   <SearchCheck size="18" /> */}
// </div>
