"use client";

import React from "react";
import { useSearchStore } from "../store";
import { FaSearch} from 'react-icons/fa'

const SearchBtn = () => {
  const search = useSearchStore((state) => state.search);
  return (
    <div className="flex h-[40px] w-[500px] items-center gap-[10px] p-[10px] pr-0 relative bg-[#00000005] rounded-[8px] overflow-hidden border border-solid border-[#00000040] ml-[100px]">
      <FaSearch/>
      <input
        onChange={(e) => search(e)}
        type="text"
        placeholder="Browse Our Catalog."
        className="w-[500px]  border-none outline-none mt-[-0.50px] [font-family:'Inter-Light',Helvetica]  text-[#00000040] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap"
      />

      <button className="cursor-pointer">
        <div className="right-11 flex  justify-center items-center w-[117px] h-[40px] bg-white rounded-[8px] [background:linear-gradient(180deg,rgb(101,163,13)_0%,rgb(163,230,53)_100%)]">
          search
        </div>
      </button>
    </div>
  );
};

export default SearchBtn;
