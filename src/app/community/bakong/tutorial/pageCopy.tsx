"use client";

import AnnouncementBar from "@/src/components/AnnouncementBar";
import Header from "@/src/components/Header";
import Link from "next/link";
import { useState } from "react";

export default function Tutorial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navLists = ["Change Logs", "Introduction"];
  return (
    <section>
      {/* <AnnouncementBar /> */}
      <div className="w-full pb-[150px] bg-[#f8f8f6] bg-cover">
        {/* <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" /> */}
        {/* container */}
        <div className="px-[80px] w-full pt-[30px] font-sora">
          {/* header guideline */}
          <p id="ChangeLogs" className="font-sora uppercase text-center font-semibold text-[33px] text-[#300304] leading-[120%] tracking-[-0.02em]">
            Hard to get started?
          </p>
          <p className="font-sora text-center font-normal text-[14px] text-[#300304] leading-[150%] tracking-[-0.02em] pt-[15px]">
            We got you covered with video tutorial
          </p>
          {/* first row blog */}
            <div className="w-full gap-[30px] pt-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {[1,2,3,4,5,6,7,8,9].map((item, index) => 
            <Link
            key={index}
            href="/community/bakong/tutorial/1">
              <div className="max-w-[440px] pb-[30px] flex flex-col">
                <img src={`/img/community/blog${index+1}.svg`} className="max-w-[440px] h-[294px] object-cover" alt=""  />
                <div className="flex flex-col gap-[15px]">
                  <p className="text-[16px] text-[#300304] font-normal leading-[150%] tracking-[-0.02em] pt-[15px]">Security</p>
                  <p className="text-[22px] h-[72px] text-[#300304] font-bold leading-[150%] tracking-[-0.02em] overflow-hidden">Lessons and insights from 8 years of Pixelgrade</p>
                  <p className="mt-auto text-[16px] text-[#300304] font-normal leading-[150%] tracking-[-0.02em]">27 March 2025</p>
                </div>
              </div>
            </Link>)}
          </div>
          </div>
        </div>
    </section>
  );
}
