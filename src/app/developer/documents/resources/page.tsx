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
      <div className="w-full pb-[150px] bg-[#f8f8f6] bg-cover overflow-hidden">
        <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" />
        {/* container */}
        <div className="lg:px-[80px] md:px-12 px-[30px] pt-[30px] font-sora">
          {/* header guideline */}
          <p id="KHQRLogo" className="font-sora uppercase text-center font-semibold text-[35px] md:text-heading-1 text-[#300304] leading-[120%] tracking-extra-small">
            Downloadable assets
          </p>
          <p className="font-sora text-center font-regular text-body text-[#300304] leading-[150%] tracking-extra-small max-w-[500px] mx-auto pt-[20px]">
            Down below is a documents for KHQR integration both design and
            technical integration
          </p>
          <section className="w-full flex mt-[50px] gap-[60px]">
            <nav className="lg:block lg:w-[20%] hidden">
              <ul className="w-[100%] font-sora font-regular text-body-large tracking-extra-small leading-[150%] [&_li]:py-3">
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
            <article className="lg:w-[60%] w-full">
              <div>
                <p className="font-sora font-semibold text-[28px] tracking-extra-small leading-[150%] text-[#300304] mb-[5px]">
                  KHQR Logo
                </p>
                <div className="py-[15px] lg:w-[100%] bg-[#3104050D] flex items-center justify-between px-[20px] mt-[10px] mb-[10px]">
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
                <div className="py-[15px] lg:w-[100%] bg-[#3104050D] flex items-center justify-between px-[20px] mt-[10px] mb-[10px]">
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
                <div className="py-[15px] lg:w-[100%] bg-[#3104050D] flex items-center justify-between px-[20px] mt-[10px] mb-[10px]">
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
                <div className="py-[15px] lg:w-[100%] bg-[#3104050D] flex items-center justify-between px-[20px] mt-[10px] mb-[10px]">
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
                <div className="py-[15px] lg:w-[100%] bg-[#3104050D] flex items-center justify-between px-[20px] mt-[10px] mb-[10px]">
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
                <div className="py-[15px] lg:w-[100%] bg-[#3104050D] flex items-center justify-between px-[20px] mt-[10px] mb-[10px]">
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
            <nav className="lg:w-[20%] lg:block hidden">
              <p className="font-sora font-semibold text-[20px] md:text-[22px] tracking-extra-small leading-[150%] text-[#300304] mb-[5px]">
                In this articles
              </p>
              <ul className="w-[100%] font-sora font-regular text-body-large tracking-extra-small leading-[150%] [&_li]:py-3 w-[80%] sticky top-20">
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
