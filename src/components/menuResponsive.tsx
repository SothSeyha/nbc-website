"use client";

import Link from "next/link";
import { useState } from "react";

type MenuProps = {
  menuDataList: any[];
};

export default function MenuResponsive({ menuDataList }: MenuProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(
    null,
  );

  return (
    <>
      {/* Hamburger — mobile/tablet only */}
      <button
        className="lg:hidden ml-auto"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        {isOpenMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile drawer */}
      {isOpenMenu && (
        <div className="lg:hidden absolute top-[0px] pt-[25px] left-0 w-full bg-[#310405] text-[#F8F8F7] z-10 overflow-y-auto max-h-[80vh]">
          <div className="w-full flex items-center px-[25px] pb-[20px]">
            <div className="w-[40%]">
              <Link href={"/"} onClick={() => setIsOpenMenu(false)}>
                <img
                  src={"/img/bakong-logo.svg"}
                  alt="Bakong"
                  className="w-[160px] md:w-[160px] lg:w-[160px] h-auto object-contain"
                />
              </Link>
            </div>
            <button
              className="w-[30%] ml-auto flex items-center justify-end"
              onClick={() => setIsOpenMenu(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* loop menu and sub-menu */}
          {menuDataList.map((item, index) => (
            <div
            key={index}
            className="border-b border-[#F8F8F71A]">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-body-large font-semibold"
                onClick={() =>
                  setMobileExpandedMenu(
                    mobileExpandedMenu === item.menu_label
                      ? null
                      : item.menu_label,
                  )
                }
              >
                {item.menu_label}
                <span>
                  {mobileExpandedMenu === item.menu_label ? "−" : "+"}
                </span>
              </button>
              {mobileExpandedMenu === item.menu_label &&
                item.items.map((item: any, index: number) => (
                  <div
                  key={index}
                  className="px-6 pb-4 flex flex-col">
                    <p className="text-[14px] font-semibold py-2">
                      {item.parent_title}
                    </p>
                    {item.items.map((item: any, index: number) => (
                      <Link
                        key={index}
                        href={item.sub_menu_link}
                        onClick={() => setIsOpenMenu(false)}
                      >
                        <p className="pl-4 py-2">{item.title}</p>
                      </Link>
                    ))}
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
