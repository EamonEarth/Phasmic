import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white">
      <div
        style={{ fontSize: "8px" }}
        className="flex justify-around uppercase p-4 opacity-80 font-sans underline underline-offset-4"
      >
        <Link href="/impressum">
          <p>impressum</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
