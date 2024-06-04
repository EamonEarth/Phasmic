"use client";

import React, { useEffect, useRef, useState } from "react";
import { ubuntu, bungeeHairline } from "../../lib/fonts";
import { cn } from "@/lib/utils";
import ScrollingTicker from "./ScrollingTicker";
import { HorizontalTicker } from "react-infinite-ticker";
import {
  AudioWaveform,
  Clapperboard,
  Pencil,
  Projector,
  SearchIcon,
} from "lucide-react";
import Search from "./Search";
import ServicesTooltip from "./ServicesTooltip";

const adminContent = [
  "Grant Applications",
  "•",
  "Proofreading",
  "•",
  "Copywriting",
  "•",
  "Accounting",
  "•",
  "Project Structuring",
  "•",
  "Production",
  "•",
  "Report",
  "•",
  "Analysis",
  "•",
];

const soundContent = [
  "Sound Technicians",
  "•",
  "DJs",
  "•",
  "Players",
  "•",
  "Mix & Master",
  "•",
  "Engineering",
  "•",
  "Composers",
  "•",
  "Producers",
];

const visualsContent = [
  "Lighting Technicians",
  "•",
  "VJs",
  "•",
  "Graphic Design",
  "•",
  "Motion Graphics",
  "•",
  "Storyboarding",
  "•",
  "Branding",
];

const filmContent = [
  "Cine- and Videographers",
  "•",
  "Animation Scanning",
  "•",
  "Analog Photography processing",
  "•",
  "Photographers",
  "•",
  "Video production",
  "•",
];

const allContentTitles: string[] = [
  ...adminContent,
  ...soundContent,
  ...visualsContent,
  ...filmContent,
].filter((_, i) => i % 2 == 0);
const contentArray = [
  {
    title: "Writing • Admin",
    scrollSpeed: "scrolling-content-admin",
    content: adminContent.filter((item, index) => index % 2 === 0),
    icon: Pencil,
  },
  {
    title: "Film • Photography",
    scrollSpeed: "scrolling-content-film",
    content: visualsContent.filter((item, index) => index % 2 === 0),
    icon: Clapperboard,
  },
  {
    title: "Music • Audio",
    scrollSpeed: "scrolling-content-music",
    content: soundContent.filter((item, index) => index % 2 === 0),
    icon: AudioWaveform,
  },
  {
    title: "Lighting • Visuals",
    scrollSpeed: "scrolling-content-lighting",
    content: filmContent.filter((item, index) => index % 2 === 0),
    icon: Projector,
  },
];

interface ServicesBlockProps {
  className: string;
}

const ServicesBlock = ({ className }: ServicesBlockProps) => {
  const [showTooltip, setShowTooltip] = useState("");
  const [expandTooltip, setExpandTooltip] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [highlightedCategories, setHighlightedCategories] = useState(
    Array(contentArray.length).fill(0)
  );
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (searchInput) {
      const newState = contentArray.map((content) =>
        content.content.some((service) =>
          service.toLowerCase().includes(searchInput.toLowerCase())
        )
          ? 1
          : 0
      );
      setHighlightedCategories(newState);
    } else {
      setHighlightedCategories(Array(contentArray.length).fill(0));
    }
  }, [searchInput]);

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
    console.count("highlighted");

    // Return a combination of elements, highlighting the match
    return (
      <>
        {beforeMatch}
        <span className="bg-pink-200" style={{ textDecoration: "underline" }}>
          {matchText}
        </span>
        {afterMatch}
      </>
    );
  };

  return (
    <div
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => {
          setShowTooltip("");
        }, 200);
      }}
      className="relative w-full h-full flex flex-col items-center bg-white md:pl-4 pr-0 rounded-t-xl"
    >
      {/* BG IMG DIV */}
      {/* <div
        style={{
          // backgroundImage: "url(/images/porthole.webp)",
          // backgroundImage: "url(/images/oil1.webp)",
          // backgroundImage: "url(/images/oil2.webp)",
          // backgroundImage: "url(/images/oil3.webp)",
          minHeight: "100%",
          // width: "80%",
          right: "0",
          backgroundImage: "url(/images/oil4.webp)",
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          backgroundRepeat: "repeat",
          filter: "invert(0.9)",
          transform: "perspective(10rem)",
        }}
        className="h-full w-full z-0 bg-red-500 absolute right-0 opacity-50"
      /> */}
      <div
        className={cn(
          " md:hidden uppercase tracking-wider text-sm font-bold text-center py-3 my-4 h-full w-[50%] border-gray-400 border-dashed  border  flex  items-center justify-center",
          ubuntu.className
        )}
      >
        Services
      </div>

      <div className={cn("grid grid-cols-10 items-center ", className)}>
        <p
          id="desktop services"
          className={cn(
            "hidden relative md:flex flex-col col-span-2 font-bold h-[90%] border-gray-400 border-dashed border-b-[1px] md:border-b-0 w-[50%] md:w-auto md:border-r-[1px] p-2 justify-center items-center uppercase tracking-widest",
            ubuntu.className
          )}
        >
          Services
          {showSearch ? (
            <Search
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              setShowSearch={setShowSearch}
            />
          ) : (
            <SearchIcon
              style={{ transition: "transform 0.3s ease-in-out" }}
              className="hover:scale-150 cursor-pointer"
              onClick={() => setShowSearch(!showSearch)}
            />
          )}
        </p>
        <div
          className={cn(
            "col-span-10 md:col-span-8 text-left md:py-8 pb-12 text-xs md:text-sm tracking-wide flex flex-col gap-y-6 relative",
            bungeeHairline.className
          )}
        >
          {contentArray.map((content, index) => (
            <span
              style={{ transition: "padding 0.8s" }}
              className={cn(
                "border-2 border-black border-l-0 border-r-0"
                // showTooltip == content.title && "py-2"
              )}
              onMouseOver={() => {
                clearTooltipTimeout();
                setTimeout(() => setShowTooltip(content.title), 500);
              }}
              key={content.title}
            >
              <h2
                id={`${content.title} + ${index}`}
                style={{
                  WebkitTextStroke: "black 2px",
                  lineHeight: "30px",
                  wordSpacing: "8px",
                  transition:
                    "background-color 0.5s ease-in-out, background-image 0.5s ease-in-out",
                }}
                className={cn(
                  "tracking-widest text-start pl-4 flex gap-x-4 bg-white items-center w-full border border-l-0 text-[14px] h-[30px] md:text-[18px] pseudo-gradient",
                  highlightedCategories[index] === 1 && "highlighted"
                  // "bg-gradient-to-r from-transparent  to-green-800 from-35% glitch"
                )}
              >
                {/* <Icon className="opacity-80" size="16" /> */}
                {content.title}
              </h2>
              <ServicesTooltip
                ulClassNames=""
                textClassNames="text-xs md:text-lg justify-between flex"
                services={content.content}
                expandTooltip={showTooltip === content.title}
                searchInput={searchInput}
              />
              <HorizontalTicker
                duration={8000 + content.content.join("").length * 90}
              >
                <p
                  className="flex justify-around gap-x-4 whitespace-nowrap py-2 border-t"
                  style={{ WebkitTextStroke: "1px black" }}
                >
                  {"   "}
                  {content.content.map((entry) => (
                    <span className="px-2">
                      {highlightMatch(entry, searchInput)}
                    </span>
                  ))}
                </p>
              </HorizontalTicker>
            </span>
          ))}
          {/* {contentArray.map((content, index) => (
            <span
              style={{ transition: "padding 0.8s" }}
              className={cn(
                "border-2 border-black border-l-0 border-r-0",
                showTooltip == content.title && "py-2"
              )}
              onMouseOver={() => {
                clearTooltipTimeout();
                setTimeout(() => setShowTooltip(content.title), 500);
              }}
              key={content.title}
            >
              <ScrollingTicker
                Icon={content.icon}
                scrollingContentType={content.scrollSpeed}
                title={content.title}
                content={content.content}
                showTooltip={showTooltip}
                setShowTooltip={setShowTooltip}
                highlighted={highlightedCategories[index] === 1}
                searchInput={searchInput}
              />
            </span>
          ))} */}
          <p
            style={{ WebkitTextStroke: "0.5px black" }}
            className=" absolute bottom-2 right-2 w-full text-end pr-4 pt-3"
          >
            Tell us your needs and we&apos;ll find the right team for you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesBlock;
