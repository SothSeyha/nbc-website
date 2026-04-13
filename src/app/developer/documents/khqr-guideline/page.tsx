"use client";

import AnnouncementBar from "@/src/components/AnnouncementBar";
import Header from "@/src/components/Header";
import { useState } from "react";

export default function KhqrGuideline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navLists = ["Change Logs", "Introduction"];
  return (
    <section>
      <AnnouncementBar />
      <div className="w-full pb-[150px] bg-[#f8f8f6] bg-cover overflow-hidden">
        <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" />
        {/* container */}
        <div className="w-full px-[80px] pt-[30px] font-sora">
          {/* header guideline */}
          <p id="ChangeLogs" className="font-sora uppercase text-center font-semibold text-heading-1 text-[#300304] leading-[120%] tracking-extra-small">
            KHQR guideline
          </p>
          <p className="font-sora uppercase text-center font-regular text-body text-[#300304] leading-[150%] tracking-extra-small pt-[15px]">
            Down below is a documents for KHQR integration both design and
            technical <br /> integration
          </p>
          <section className="w-full flex mt-[69px]">
            <nav className="hidden lg:block lg:w-[30%]">
              <ul className="font-sora font-regular text-body-large tracking-extra-small leading-[150%] [&_li]:py-3 w-[80%] sticky top-20">
                {navLists.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      const section = document.getElementById(
                        item.replace(/\s+/g, ""),
                      );
                      section?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className={`cursor-pointer px-4 transition-colors duration-200 border-b border-[#3104051A] ${
                      activeIndex === index
                        ? "bg-[#300304] text-white"
                        : "bg-[#f8f8f6] text-black"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </nav>
            <article className="w-full lg:w-[70%]">
              <div className="w-full overflow-x-auto">
                <p className="font-sora font-semibold text-[28px] tracking-extra-small leading-[150%] text-[#300304] mb-[5px]">
                  Change Logs
                </p>
                <table className="min-w-[500px] w-full">
                  <thead className="bg-[#300304] text-white text-left [&_th]:pl-[15px] [&_th]:py-3 [&_th]:text-body-large">
                    <tr>
                      <th className="w-[25%]">Version</th>
                      <th className="w-[25%]">Date</th>
                      <th className="w-[50%]">Changes</th>
                    </tr>
                  </thead>
                  <tbody className="[&_td]:pl-[15px] [&_td]:pr-[15px] [&_tr:nth-child(even)]:bg-[#3104051A] [&_tr:nth-child(odd)]:bg-white [&_td]:py-3 [&_th]:text-body-large">
                    <tr>
                      <td>1.0.0</td>
                      <td>21.05.2021</td>
                      <td>Initial document.</td>
                    </tr>
                    <tr>
                      <td>1.0.0</td>
                      <td>21.05.2021</td>
                      <td>
                        Remove API request token and verify token in the
                        documentation and from the public request. Add check
                        transaction by instruction reference api Add check
                        transaction by external api
                      </td>
                    </tr>
                    <tr>
                      <td>1.0.0</td>
                      <td>21.05.2021</td>
                      <td>Initial document.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pt-[50px]" id="Introduction">
                <p className="font-sora font-semibold text-[28px] tracking-extra-small leading-[150%] text-[#300304] mb-[5px] pb-[15px]">
                  Introduction
                </p>
                <p className="font-sora font-semibold text-heading-2 tracking-extra-small leading-[150%] text-[#300304] mb-[5px]">
                  Purpose
                </p>
                <p className="font-sora font-regular text-body-large tracking-extra-small leading-[150%] text-black mb-[5px] pb-[15px] pt-[5px]">
                  This document describes the detailed specification of Bakong
                  open API offered by National Bank of Cambodia. The expected
                  readers are NBC technical team and third-party technical team.
                  This can be used as reference for any interest related to the
                  API mentioned in this document.
                </p>
                <p className="font-sora font-semibold text-[20px] tracking-extra-small leading-[150%] text-[#300304] mb-[5px]">
                  Scope
                </p>
                <p className="font-sora font-regular text-body-large tracking-extra-small leading-[150%] text-black mb-[5px] pb-[15px] pt-[5px]">
                  This document contains the complete description of the API
                  specification including: endpoint, status code, request and
                  response sample.
                </p>
              </div>
              <div className="w-full overflow-x-auto">
                <p className="font-sora font-semibold text-[20px] tracking-[-0.02em] leading-[150%] text-[#300304] mb-[15px]">
                  Overall APIs
                </p>
                <table className="w-full">
                  <thead className="bg-[#300304] text-white text-left [&_th]:py-3 [&_th]:pl-[15px] [&_th]:text-body-large">
                    <tr>
                      <th className="w-[25%]">Name</th>
                      <th className="w-[25%]">Method</th>
                      <th className="w-[50%]">URL</th>
                    </tr>
                  </thead>
                  <tbody className="[&_td]:pl-[15px] [&_td]:pr-[15px] [&_td]:py-3 [&_tr:nth-child(even)]:bg-[#3104051A] [&_tr:nth-child(odd)]:bg-white [&_th]:text-body-large">
                    <tr>
                      <td>Renew token</td>
                      <td>POST</td>
                      <td>baseUrl/v1/renew_token</td>
                    </tr>
                    <tr>
                      <td>Renew token</td>
                      <td>POST</td>
                      <td>baseUrl/v1/renew_token</td>
                    </tr>
                    <tr>
                      <td>Renew token</td>
                      <td>POST</td>
                      <td>baseUrl/v1/renew_token</td>
                    </tr>
                    <tr>
                      <td>Renew token</td>
                      <td>POST</td>
                      <td>baseUrl/v1/renew_token</td>
                    </tr>
                    <tr>
                      <td>Renew token</td>
                      <td>POST</td>
                      <td>{"{{baseUrl}}/v1/renew_token"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
}
