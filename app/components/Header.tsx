"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import {
  cutiveMono,
  shrikhand,
  grenzeGotisch,
  lakkiReddy,
  milonga,
  sancreek,
  eagleLake,
  imbue,
  texturina,
  piedra,
  almendraDisplay,
  bigelowRules,
  geostarFill,
  michroma,
  orbitron,
  poiretOne,
  contrailOne,
  nanumBushScript,
  unifrakturMaguntia,
  rubik,
} from "../../lib/fonts";

const fontArray = [
  rubik.className,
  cutiveMono.className,
  shrikhand.className,
  grenzeGotisch.className,
  lakkiReddy.className,
  milonga.className,
  sancreek.className,
  eagleLake.className,
  imbue.className,
  texturina.className,
  piedra.className,
  almendraDisplay.className,
  bigelowRules.className,
  geostarFill.className,
  michroma.className,
  orbitron.className,
  poiretOne.className,
  contrailOne.className,
  nanumBushScript.className,
  unifrakturMaguntia.className,
];

const word = "Phasmic".split("");

interface HeaderProps {
  className: string;
}

const Header = ({ className }: HeaderProps) => {
  const [letters, setLetters] = useState(
    word.map(() => fontArray[Math.floor(Math.random() * fontArray.length)])
  );

  const [textSize, setTextSize] = useState(120);

  useEffect(() => {
    const changeFont = (index: number) => {
      setLetters((currentFonts) =>
        currentFonts.map((font, i) =>
          i === index
            ? fontArray[Math.floor(Math.random() * fontArray.length)]
            : font
        )
      );

      setTimeout(() => changeFont(index), Math.random() * 5000 + 1000);
    };

    word.forEach((_, index) => changeFont(index));
  }, []);

  useEffect(() => {
    let textSizeCalc = window.innerWidth / 9;
    setTextSize(textSizeCalc);
    const handleResize = () => {
      let textSizeCalc = window.innerWidth / 9;
      setTextSize(textSizeCalc);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const textStyle = {
    fontSize: `${textSize}px`,
  };

  return (
    <div
      id="Home"
      className={cn("w-full max-w-[100%] border-black bg-black", className)}
    >
      <div className="flex flex-col h-[300px] lg:h-[550px] items-center justify-center text-white">
        <p
          style={textStyle}
          className=" font-bold items-center justify-center  flex gap-x-2 "
        >
          {letters.map((className, index) => (
            <span
              key={index}
              className={cn(
                "letter flex items-center justify-center text-center lg:px-16 md:px-12 px-2 ",
                className
              )}
            >
              {word[index]}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Header;
