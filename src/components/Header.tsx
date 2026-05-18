"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MenuResponsive from "./menuResponsive";
import { fetchItems } from "../libs/api";
import { AnyARecord } from "dns";

type HeaderProps = {
  logoSrc: string;
  textColor: string;
};

export default function Header({ logoSrc, textColor }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [menuLists, setMenuLists] = useState<any[]>([]);
  // const isOpen = !!activeMenu; // header + dropdown open only if a menu is active
  const logo = activeMenu ? "/img/bakong-logo.svg" : logoSrc;
  const colorText = activeMenu ? "text-white" : textColor;

  async function fetchMenu() {
    const fetchData = await fetchItems(
      "/flows/trigger/09cd09ab-c5e4-42a6-899d-c2c179092aab",
    );
    console.log(fetchData, "menu data");
    setMenuLists(fetchData);
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <nav
      onMouseLeave={() => {
        setActiveMenu(null);
        setActiveSubmenu(null);
      }} // close dropdown when leaving header + dropdown
    >
      {/* HEADER */}
      <div className="relative z-20 flex w-full lg:px-[80px] md:px-12 px-[25px] pt-[25px] pb-[20px]">
        <div className="w-[40%] lg:w-[20%]">
          <Link href={"/"}>
            <img
              src={logo}
              alt="Bakong"
              className="w-[160px] md:w-[160px] lg:w-[160px] h-auto object-contain"
            />
          </Link>
        </div>
        <div className="hidden lg:flex w-[60%] flex flex-col items-center justify-center">
          {/* <ul className="flex items-center gap-[18px] text-[#F8F8F7] text-[16px] font-sora"> */}
          <ul
            className={`flex items-center gap-[18px] ${colorText} text-body-large font-regular font-sora tracking-extra-small}`}
          >
            {/* DISCOVER */}
            {menuLists.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setActiveMenu(item.menu_label)}
                className={`
                cursor-pointer
                px-[20px] py-[12px]
                flex items-center justify-center
                transition-all duration-200
                ${
                  activeMenu === item.menu_label
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
              >
                {item.menu_label}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-[20%]"></div>

        <MenuResponsive menuDataList={menuLists} />
      </div>

      {/* DROPDOWN */}
      <div className="hidden lg:block">
        {menuLists.map(
          (item, index) =>
            activeMenu === item.menu_label && (
              <div
                key={index}
                className="absolute top-0 left-0 w-full pb-[50px] bg-[#310405] pl-[80px] pr-[80px] pt-[190px] text-[#F8F8F7] z-10"
              >
                <p className="text-[20px] font-semibold mb-[20px]">
                  {item.menu_sub}
                </p>

                <div className="flex gap-[5px] flex-wrap">
                  {item.items.map((item: any, index: number) => (
                    <ul
                      key={index}
                      className="flex flex-col gap-[0px] pb-[10px]"
                    >
                      <li className="font-semibold text-[16px]">
                        {item.parent_title}
                      </li>
                      {item.items.map((item: any, index: number) => (
                        <Link
                          key={index}
                          href={item.sub_menu_link}
                          target={
                            item.sub_menu_link ===
                            "https://api-bakong.nbc.gov.kh/"
                              ? "_bllank"
                              : "_self  "
                          }
                        >
                          <li
                            onMouseEnter={() => setActiveSubmenu(item.title)}
                            onMouseLeave={() => setActiveSubmenu(null)}
                            className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px] 
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === item.title
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                          >
                            {item.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            ),
        )}
      </div>
    </nav>
  );
}
