import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-y-16 justify-center items-center min-h-screen bg-black underline-offset-2">
        <div className="flex flex-col items-start  text-white bg-black gap-y-4">
          <p className="text-4xl">
            Phasmic UG <span className="text-sm">(haftungsbeschränkt)</span>
          </p>
          <p className="flex flex-col text-lg">
            Tristan Ashley{" "}
            <a
              className="underline text-purple-700"
              href="mailto:tristan@phasmic.cc"
            >
              tristan@phasmic.cc
            </a>
          </p>
          <p className="text-sm">
            {" "}
            Kaiserin-Augusta-Allee 101 <p>HH Aufgang II</p>
          </p>
          <p className="text-sm">
            HRB 265106 – Amtsgericht München
            <p>USt ID: DE346344068</p>
          </p>
          <Link
            href="/"
            className="pt-6 flex w-full justify-start hover:text-purple-400"
          >
            <p
              style={{ transition: "transform 0.5s ease-in-out" }}
              className="flex items-center gap-x-2 uppercase font-bold rounded border border-purple-500 px-6 py-2 text-purple-500"
            >
              Home <Home size="18" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

// Phasmic UG (haftungsbeschränkt)
