"use client";

import React from "react";
import { Container } from "react-bootstrap";

const Article = () => {
  return (
    <div>
      <Container>
        <div className=" flex flex-col  items-center relative px-[150px] py-[115px] pb-4">
          <div className="flex flex-col items-center relative">
           <h2 className=" [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[32px] text-center tracking-[0] leading-[normal]">
           Generic Medicine Vs Branded Medicines
          </h2>  
          </div>
         
          <div className=" mx-auto my-12 w-[781px] h-[455px] rounded-[16px] overflow-hidden border border-solid border-black">
            <iframe
              width={781}
              height={455}
              src="https://www.youtube.com/embed/qmfp-eElcUw?si=1oLPn1hbU4iODKAg"
              title="YouTube video"
              allowfullscreen
              autoplay
              
            ></iframe>
          </div>

          <h2 className=" [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[32px] text-center tracking-[0] leading-[normal]">
          Related Articles
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default Article;
