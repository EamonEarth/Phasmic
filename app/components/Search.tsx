"use client";
import { X } from "lucide-react";
import React, { SetStateAction, useState } from "react";

interface SearchProps {
  searchInput: string;
  setSearchInput: React.Dispatch<SetStateAction<string>>;
  setShowSearch: React.Dispatch<SetStateAction<boolean>>;
}

const Search = ({
  searchInput,
  setSearchInput,
  setShowSearch,
}: SearchProps) => {
  return (
    <div className="flex  items-center relative left-[20%]">
      <input
        autoFocus={true}
        className="border rounded-xl pl-2 py-1 relative  max-w-[60%] text-pink-300 bg-black focus:outline-none"
        placeholder="search"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <X
        size="16"
        className="opacity-60 cursor-pointer"
        onClick={() => {
          setShowSearch(false);
          setSearchInput("");
        }}
      />
    </div>
  );
};

export default Search;
