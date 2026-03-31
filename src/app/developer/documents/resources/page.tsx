"use client";

import AnnouncementBar from "@/src/components/AnnouncementBar";
import Header from "@/src/components/Header";
import { useState } from "react";

export default function Resource() {
  const [activeIndexNavLeft, setActiveIndexNavLeft] = useState(0);
  const [activeIndexNavRight, setActiveIndexNavRight] = useState(0);
  // const navLists = ["KHQR", "CIFPT"];
  return (
    <section>
      <AnnouncementBar />
      <div className="w-full pb-[150px] bg-[#f8f8f6] bg-cover">
        <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" />
        {/* container */}
        <div className="pl-[80px] pr-[80px] pt-[30px] font-sora">
          {/* header guideline */}
          <p id="KHQRLogo" className="font-sora uppercase text-center font-semibold text-[33px] text-[#300304] leading-[120%] tracking-[-0.02em]">
            Downloadable assets
          </p>
          <p className="font-sora uppercase text-center font-normal text-[14px] text-[#300304] leading-[150%] tracking-[-0.02em] pt-[15px]">
            Down below is a documents for KHQR integration both design and
            technical <br /> integration
          </p>
          <section className="flex mt-[50px]">
            <nav className="w-[20%]">
              <ul className="font-sora font-normal text-[16px] tracking-[-0.02em] leading-[150%] [&_li]:py-3 w-[80%]">
                {["KHQR", "CIFPT"].map((item, index) => (
                  <a
                    href={`#${item.replace(/\s+/g, "")}`}
                    key={index}
                    onClick={() => setActiveIndexNavLeft(index)}
                  >
                    <li
                      className={`cursor-pointer px-4 transition-colors duration-200 border-b border-[#3104051A] ${activeIndexNavLeft === index ? "bg-[#300304] text-white" : "bg-[#f8f8f6] text-black"}`}
                    >
                      {item}
                    </li>
                  </a>
                ))}
              </ul>
            </nav>
            <article className="w-[60%]">
              <div>
                <p className="font-sora font-semibold text-[28px] tracking-[-0.02em] leading-[150%] text-[#300304] mb-[5px]">
                  KHQR Logo
                </p>
                <div className="h-[50px] w-[93%] bg-[#3104050D] flex items-center justify-between px-[20px] mt-[10px] mb-[10px]">
                  <div className="flex gap-[20px]">
                    <img
                      src="/img/resource/file_outline.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                    <p className="font-sora font-normal text-[16px] tracking-[-0.02em] leading-[150%] text-black">
                      KHQR Logo (zip)
                    </p>
                  </div>
                  <a href="/img/bakong-logo-red.svg" download>
                    <img
                      src="/img/resource/download.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                  </a>
                </div>
                <div className="h-[50px] w-[93%] bg-[#3104050D] flex items-center justify-between px-[20px] mt-[10px] mb-[10px]">
                  <div className="flex gap-[20px]">
                    <img
                      src="/img/resource/file_outline.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                    <p className="font-sora font-normal text-[16px] tracking-[-0.02em] leading-[150%] text-black">
                      KHQR Logo (zip)
                    </p>
                  </div>
                  <a href="/img/bakong-logo-red.svg" download>
                    <img
                      src="/img/resource/download.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                  </a>
                </div>
                <div className="h-[50px] w-[93%] bg-[#3104050D] flex items-center justify-between px-[20px] mt-[10px] mb-[10px]">
                  <div className="flex gap-[20px]">
                    <img
                      src="/img/resource/file_outline.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                    <p className="font-sora font-normal text-[16px] tracking-[-0.02em] leading-[150%] text-black">
                      KHQR Logo (zip)
                    </p>
                  </div>
                  <a href="/img/bakong-logo-red.svg" download>
                    <img
                      src="/img/resource/download.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="pt-[56px]" id="KHQRGuideline">
                <p className="font-sora font-semibold text-[28px] tracking-[-0.02em] leading-[150%] text-[#300304] mb-[5px] pb-[15px]">
                  KHQR Guideline
                </p>
                <div className="h-[50px] w-[93%] bg-[#3104050D] flex items-center justify-between px-[20px] mt-[10px] mb-[10px]">
                  <div className="flex gap-[20px]">
                    <img
                      src="/img/resource/file_outline.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                    <p className="font-sora font-normal text-[16px] tracking-[-0.02em] leading-[150%] text-black">
                      KHQR Logo (zip)
                    </p>
                  </div>
                  <a href="/img/bakong-logo-red.svg" download>
                    <img
                      src="/img/resource/download.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                  </a>
                </div>
                <div className="h-[50px] w-[93%] bg-[#3104050D] flex items-center justify-between px-[20px] mt-[10px] mb-[10px]">
                  <div className="flex gap-[20px]">
                    <img
                      src="/img/resource/file_outline.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                    <p className="font-sora font-normal text-[16px] tracking-[-0.02em] leading-[150%] text-black">
                      KHQR Logo (zip)
                    </p>
                  </div>
                  <a href="/img/bakong-logo-red.svg" download>
                    <img
                      src="/img/resource/download.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                  </a>
                </div>
                <div className="h-[50px] w-[93%] bg-[#3104050D] flex items-center justify-between px-[20px] mt-[10px] mb-[10px]">
                  <div className="flex gap-[20px]">
                    <img
                      src="/img/resource/file_outline.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                    <p className="font-sora font-normal text-[16px] tracking-[-0.02em] leading-[150%] text-black">
                      KHQR Logo (zip)
                    </p>
                  </div>
                  <a href="/img/bakong-logo-red.svg" download>
                    <img
                      src="/img/resource/download.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </article>
            <nav className="w-[20%]">
              <p className="font-sora font-semibold text-[28px] tracking-[-0.02em] leading-[150%] text-[#300304] mb-[5px]">
                In this articles
              </p>
              <ul className="font-sora font-normal text-[16px] tracking-[-0.02em] leading-[150%] [&_li]:py-3 w-[80%] sticky top-20">
                {["KHQR Logo", "KHQR Guideline"].map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setActiveIndexNavRight(index);
                      const section = document.getElementById(
                        item.replace(/\s+/g, ""),
                      );
                      section?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className={`cursor-pointer px-4 transition-colors duration-200 border-b border-[#3104051A] ${
                      activeIndexNavRight === index
                        ? "bg-[#300304] text-white"
                        : "bg-[#f8f8f6] text-black"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </section>
  );
}
