import React from "react";
import SearchBtn from "./SearchBtn";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" pl-[100px] py-[16px] flex">
      <div className="lebel w-[168px] h-[39px] mr-[60px]">
        <img
          className="logo w-[165px] h-[25px] top-0 left-0"
          alt="Genimeds"
          src="Genimeds.svg"
        ></img>
      </div>

      {/* lists */}
      <div className="flex w-[446px] h-[41px] items-center justify-between px-[10px] py-0 relative mx-[36px]">
        <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[18px] text-center tracking-[0] leading-[28px] whitespace-nowrap">
          <Link href='/medicines'>Medicines</Link>
        </div>
        <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[18px] text-center tracking-[0] leading-[28px] whitespace-nowrap">
          Upload Prescription
        </div>
        <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[18px] text-center tracking-[0] leading-[28px] whitespace-nowrap">
          Shops Nearby
        </div>
      </div>

      <SearchBtn />
    </div>
  );
};

export default Navbar;
