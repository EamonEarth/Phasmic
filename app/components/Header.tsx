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
  // imbue,
  // texturina,
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
  // // lakkiReddy.className, // FONT OFFENDER
  milonga.className,
  sancreek.className,
  // eagleLake.className, //offfend
  // // imbue.className,
  // // texturina.className,
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
    // lineHeight: `${textSize}px`,
  };

  // const textStyle = {
  //   fontSize: `${textSize}px`,
  //   lineHeight: `${textSize}px`, // Ensure consistent line height
  //   height: `${textSize}px`, // Fixed height based on textSize
  //   width: `${textSize}px`, // Fixed width based on textSize
  //   // display: "inline-block",
  //   overflow: "hidden", // Ensure overflow doesn't affect layout
  // };

  return (
    <div
      id="Home"
      className={cn(
        "w-full max-w-[100%] min-h-[350px] h-auto  border-black bg-black overflow-hidden",
        className
      )}
    >
      <div className="flex flex-col w-full  items-center justify-center text-white bg-green-200- ">
        <p
          style={textStyle}
          className="font-bold items-center- justify-center flex gap-x-2 overflow-hidden"
        >
          {letters.map((className, index) => (
            <span
              key={index}
              className={cn(
                "letter flex h-[300px] items-center justify-center min-h-[300px] max-h-[300px] text-center lg:px-16 md:px-12 px-2 bg-orange-200-",
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
