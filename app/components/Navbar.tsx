"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
import { NAV_ITEMS } from "./Sidebar";
import { bungeeInline } from "@/lib/fonts";
import { useScroll } from "../context/ScrollContext";

const Navbar = () => {
  const { scrollToSection } = useScroll();
  const pathname = usePathname();
  return (
    <div className="w-full h-[60px] flex justify-center gap-x-2 items-center bg-black  md:pr-24 border-b-[0.1px] border-dotted">
      {NAV_ITEMS.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          className={cn(
            "text-white uppercase tracking-wider font-semibold font-sans text-sm hover:text-purple-500",
            pathname === item.link && "underline underline-offset-4",
            bungeeInline.className
          )}
        >
          <div
            className="cursor-pointer"
            onClick={() => {
              scrollToSection(item.name);
              window.history.pushState(null, "", `#${item.name}`);
            }}
          >
            {item.name}
          </div>
        </Button>
      ))}
    </div>
  );
};

export default Navbar;
