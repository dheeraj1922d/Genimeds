"use client";

import React from "react";
import { SearchCtx } from "../SearchContext";
import { useContext } from "react";

const SearchBtn = () => {
  const { searchBar } = useContext(SearchCtx);
  return (
    <div className="flex h-[40px] w-[500px] items-center gap-[10px] p-[10px] pr-0 relative bg-[#00000005] rounded-[8px] overflow-hidden border border-solid border-[#00000040] ml-[100px]">
      <img className="w-[18px] h-[18px]" alt="Vector" src="vector.svg" />

      <input
        onChange={(e) => setTimeout(() => searchBar(e), 300)}
        type="text"
        placeholder="Browse Our Catalog."
        className="w-[500px]  border-none outline-none mt-[-0.50px] [font-family:'Inter-Light',Helvetica]  text-[#00000040] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap"
      />

      <buttion className="cursor-pointer">
        <div className="right-11 flex  justify-center items-center w-[117px] h-[40px] bg-white rounded-[8px] [background:linear-gradient(180deg,rgb(101,163,13)_0%,rgb(163,230,53)_100%)]">
          search
        </div>
      </buttion>
    </div>
  );
};

export default SearchBtn;
