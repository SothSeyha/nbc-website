"use client";

import { useEffect, useState } from "react";
import { fetchItems } from "../libs/api";

export default function Footer() {
  const [footer, setFooter] = useState<any>(null);

  async function fetchFooterData() {
    const data = await fetchItems("footer-section");
    setFooter(data);
  }

  useEffect(() => {
    fetchFooterData();
  }, []);

  return (
    <nav>
      <div className="bg-[#310405] min-h-screen w-full px-[25px] md:px-6 lg:px-[80px] pt-[40px] lg:pt-[80px] pb-[40px] lg:pb-[80px] flex flex-col lg:flex-row">
        <div className="w-full lg:w-[45%] pb-[100px] lg:pb-0">
          <div>
            <p className="font-bold text-[20px] text-[#F8F8F7] leading-[150%] tracking-[-0.02em]">
              {footer?.label ?? "What are you waiting for?"}
            </p>
            <p className="font-semibold text-[35px] md:text-[45px] text-[#F8F8F7] uppercase leading-[150%] tracking-[-0.02em] pt-[30px]">
              {footer?.title ?? "Change the way you money"}
            </p>
            <p className="font-normal text-[16px] text-[#F8F8F7] leading-[150%] tracking-[-0.02em] pt-[90px] pb-[80px]">
              {footer?.description ??
                "Learn more about Bakong, chat with the team, others in the community, and have your say in shaping the future of Digital Money."}
            </p>
          </div>
          {/* contact */}
          <table className="w-full text-white [&_td]:p-[12px] [&_td]:py-[24px]">
            <tbody>
              {(footer?.contacts ??
                [
                  {
                    icon: "/img/footer/call.png",
                    type: "Phone number",
                    icon_link: "/img/footer/plus.png",
                    value: "+85523722563",
                    isDefault: true,
                  },
                  {
                    icon: "/img/footer/email.png",
                    type: "Email",
                    icon_link: "/img/footer/add.png",
                    value: "support@bakong.gov.kh",
                    isDefault: true,
                  },
                ]).map((item: any, index: number) => (
                  <tr key={index} className="border-b border-[#F8F8F74D]">
                    <td className="hidden sm:table-cell">
                      <img
                        className="w-[16px] h-[16px] mt-[5px]"
                        src={
                          item.isDefault
                            ? item.icon
                            : process.env.NEXT_PUBLIC_API_URL +
                              "/assets/" +
                              item.icon
                        }
                        alt=""
                      />
                    </td>
                    <td>{item.type}</td>
                    <td className="hidden sm:table-cell">
                      <img
                        src={
                          item.isDefault
                          ? item.icon_link
                          : process.env.NEXT_PUBLIC_API_URL +
                          "/assets/" +
                          item.icon_link
                        }
                        alt=""
                      />
                    </td>
                    <td className="text-right">{item?.value}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="w-full lg:w-[55%] flex flex-col lg:items-end">
          <div className="md:w-[210px] h-[50px] bg-[#F8F8F7] flex flex-col justify-center">
            <a href="#">
              <p className="font-normal text-[16px] text-center">
                Download Bakong App
              </p>
            </a>
          </div>
          <div className="flex flex-col pt-[50px] mt-auto">
            <p className="font-normal text-[16px] text-[#F8F8F7] pb-[24px]">
              {footer?.address ??
                "Building #32, Preah Ang hanavong St. (240), Phnom Penh"}
            </p>
            <table className="text-white [&_td]:pb-[12px] [&_td]:py-[24px]">
              <tbody>
                <tr className="border-b border-[#F8F8F74D] ">
                  <td>{footer?.FAQ ?? "FAQ"}</td>
                  <td>⬈</td>
                </tr>
                <tr className="border-b border-[#F8F8F74D]">
                  <td>{footer?.Legal_notices ?? "Legal Notices"}</td>
                  <td>⬈</td>
                </tr>
              </tbody>
            </table>
            <p className="font-normal text-[16px] text-[#F8F8F7] pt-[25px]">
              {footer?.copyright ?? "by National Bank of Cambodia"}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
