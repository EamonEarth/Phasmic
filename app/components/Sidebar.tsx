"use client";
import React, { useState } from "react";
import {
  Home,
  MessageCircle,
  ChevronRightCircle,
  FileClock,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { bungeeHairline, ubuntu } from "@/lib/fonts";
import { useScroll } from "../context/ScrollContext";

export const NAV_ITEMS = [
  {
    name: "Home",
    link: "/",
    Icon: Home,
    tip: "Home",
  },
  // {
  //   name: "Projects",
  //   link: "/Projects",
  //   Icon: FileClock,
  //   tip: "Past Projects",
  // },
  {
    name: "Contact",
    link: "/Contact",
    Icon: MessageCircle,
    tip: "Get in touch",
  },
];

const Sidebar = () => {
  const { scrollToSection } = useScroll();
  const [expandSidebar, setExpandSidebar] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [toolTipVisible, setToolTipVisible] = useState("");

  return (
    <div
      className={cn(
        "hidden md:block fixed top-[25%] w-[140px] z-40 border-purple-500  border-r-4 border-t-4 border-b-4",
        expandSidebar ? "left-0 " : "-left-[78px]"
      )}
      style={{ transition: "left 0.5s ease-in-out" }}
    >
      <ChevronRightCircle
        onClick={() => setExpandSidebar(!expandSidebar)}
        className={cn(
          "absolute hidden lg:block rounded-full bottom-[10%] z-50  -right-4 bg-purple-500 chevron-space cursor-pointer opacity-80",
          expandSidebar && "bottom-[5%] -rotate-180 "
        )}
        style={{
          transition:
            "bottom 0.5s ease-in-out, transform 0.5s ease-in-out, right 0.5s ease-in-out",
        }}
      />
      <div className="flex flex-col justify-end p-2 py-8 gap-y-3 relative text-xs text-purple-500 uppercase ">
        {NAV_ITEMS.map((item) => (
          <div
            className={cn(
              "flex items-end gap-x-2 justify-end relative ",
              bungeeHairline.className
            )}
            key={item.name}
            onMouseEnter={() => setToolTipVisible(item.name)}
            onMouseLeave={() => setToolTipVisible("")}
          >
            <div className="flex flex-col justify-end items-center relative ">
              <div
                onClick={() => {
                  scrollToSection(item.name);
                  window.history.pushState(null, "", `#${item.name}`);
                  setActiveHash(`#${item.name}`);
                  console.log(window.location.hash);
                  console.log("name", `#${item.name}`);
                }}
                className="flex items-center gap-x-2 cursor-pointer w-[7.5rem] justify-end"
              >
                <p style={{ WebkitTextStroke: "1px rgb(168, 85, 247)" }}>
                  {item.name}
                </p>
                <item.Icon
                  className=" hover:scale-110"
                  strokeWidth={2}
                  size="42"
                  style={{ transition: "transform 0.3s ease-in-out" }}
                />
                {!expandSidebar && toolTipVisible === item.name && (
                  <div
                    className={cn(
                      "absolute left-36 rounded-r-full pr-3 bg-black text-white text-start z-50 opacity-50",
                      ubuntu.className
                    )}
                    // style={{ filter: "invert(1)", mixBlendMode: "difference" }}
                  >
                    {item.tip}
                  </div>
                )}
              </div>

              <span
                style={{
                  transition: "width 0.5s ease-in-out",
                }}
                className={cn(
                  " bg-purple-500 h-[2px] nav-indicator mt-[2px]   ",
                  activeHash === `#${item.name}` && "active"
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
