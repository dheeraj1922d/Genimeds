import React from "react";
import "./Home.css";
import { FaCircleCheck } from "react-icons/fa6";

const Page1 = () => {
  return (
    <div>
      <div className=" flex flex-col  items-center relative px-[150px] py-[115px] pb-4">
        <div className="flex flex-col items-center relative">
          <h2 className=" [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[32px] text-center tracking-[0] leading-[normal]">
            WHY SHOULD WE USE GENERIC MEDICINES ?
          </h2>

          <div className="stroke"></div>
          <div className=" top-[150px] flex flex-col w-[80px] h-[80px] items-center justify-center  bg-lime-400 rounded-[100px] mb-4">
            <div className="w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[32px] text-center tracking-[0] leading-[normal]">
              1
            </div>
          </div>
        </div>

        <div className="relative flex justify-between gap-2 mb-[200px]">
          <span className="decoration">Same </span>
          <h2 className="top_text ">Quality </h2>
          <span className="decoration">Low </span>
          <h2 className="top_text">Cost</h2>
        </div>

        <div className="flex flex-col w-[775px] items-start gap-[32px] relative">
          <div className="inline-flex justify-center items-center gap-[15px] relative flex-[0_0_auto]">
            <div className=" text-xgreen">
              <FaCircleCheck />
            </div>
            <p className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-zinc-500 text-[20px] text-center tracking-[0.60px] leading-[normal] whitespace-nowrap">
              Generic medicines: Equal quality, reduced expense, healthier lives
            </p>
          </div>
          <div className="inline-flex justify-center items-center gap-[15px] relative flex-[0_0_auto]">
            <div className=" text-xgreen">
              <FaCircleCheck />
            </div>
            <p className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-zinc-500 text-[20px] text-center tracking-[0.60px] leading-[normal] whitespace-nowrap">
              Top-tier care need not come with a top-tier price tag – choose
              generics
            </p>
          </div>
          <div className="flex w-[766px] items-center gap-[15px] relative flex-[0_0_auto]">
            <div className=" text-xgreen">
              <FaCircleCheck />
            </div>
            <p className="relative w-[727px] mt-[-1.00px] mr-[-9.33px] [font-family:'Inter-Regular',Helvetica] font-normal text-zinc-500 text-[20px] tracking-[0.60px] leading-[normal]">
              Experience the benefits of same-quality healthcare without the
              premium cost with generics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
