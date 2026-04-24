"use client";

import Link from "next/link";
import { useState } from "react";
import MenuResponsive from "./menuResponsive";

type HeaderProps = {
  logoSrc: string;
  textColor: string;
};

export default function Header({ logoSrc, textColor }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<
    "discover" | "developer" | "community" | null
  >(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  // const isOpen = !!activeMenu; // header + dropdown open only if a menu is active
  const logo = activeMenu ? "/img/bakong-logo.svg" : logoSrc;
  const colorText = activeMenu ? "text-white" : textColor;

  return (
    <nav
      onMouseLeave={() => {
        setActiveMenu(null);
        setActiveSubmenu(null);
      }} // close dropdown when leaving header + dropdown
    >
      {/* HEADER */}
      <div className="relative z-20 flex w-full lg:px-[80px] md:px-12 px-[25px] pt-[25px] pb-[20px]">
        <div className="w-[70%] lg:w-[20%]">
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
            <li
              onMouseEnter={() => setActiveMenu("discover")}
              className={`
                cursor-pointer
                px-[20px] py-[12px]
                flex items-center justify-center
                transition-all duration-200
                ${
                  activeMenu === "discover"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
            >
              Discover Bakong
            </li>

            {/* DEVELOPER */}
            <li
              onMouseEnter={() => setActiveMenu("developer")}
              className={`
                cursor-pointer
                px-[20px] py-[12px]
                flex items-center justify-center
                transition-all duration-200
                ${
                  activeMenu === "developer"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
            >
              Developer
            </li>

            {/* COMMUNITY */}
            <li
              onMouseEnter={() => setActiveMenu("community")}
              className={`
                cursor-pointer
                px-[20px] py-[12px]
                flex items-center justify-center
                transition-all duration-200
                ${
                  activeMenu === "community"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
            >
              Community
            </li>
          </ul>
        </div>
        <div className="lg:w-[20%]"></div>

        <MenuResponsive />
      </div>

      {/* DROPDOWN */}
      <div className="hidden lg:block">
        {activeMenu === "discover" && (
          <div className="absolute top-[0px] left-0 w-full h-[552px] bg-[#310405] pl-[80px] pr-[80px] pt-[190px] text-[#F8F8F7] z-10">
            <p className="text-[20px] font-semibold mb-[20px]">
              Discover Bakong
            </p>

            <div className="flex gap-[30px]">
              <ul className="flex flex-col gap-[3px] pb-[10px]">
                <li className="font-semibold text-[16px]">Daily Finance</li>
                <Link href={"/discover-bakong/finance/transfer"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("transfers")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "transfers"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    Transfers
                  </li>
                </Link>
                <Link href={"/discover-bakong/finance/card"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("card")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "card"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    Card
                  </li>
                </Link>
                <Link href={"/discover-bakong/finance/khqr"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("khqr")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "khqr"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    KHQR Payment
                  </li>
                </Link>
                <Link href={"/discover-bakong/finance/link-account"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("link")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "link"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    Link Account
                  </li>
                </Link>
              </ul>

              <ul className="flex flex-col gap-[3px] pb-[10px]">
                <li className="font-semibold text-[16px]">Business</li>
                <Link href={"/discover-bakong/business/receive-khqr"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("receive")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "receive"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    Receive money via KHQR
                  </li>
                </Link>
                <Link href={"/discover-bakong/business/interbank-transfer"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("interbank")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "interbank"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    Interbank Transfer
                  </li>
                </Link>
                <Link href={"/discover-bakong/business/bakong-merchant"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("merchant")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "merchant"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    Bakong Merchant
                  </li>
                </Link>
              </ul>

              <ul className="flex flex-col gap-[3px] pb-[10px]">
                <li className="font-semibold text-[16px]">Tourist</li>
                <Link href={"/discover-bakong/tourist/scan-pay"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("scan")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "scan"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    Scan pay in Cambodia
                  </li>
                </Link>
                <Link href={"/discover-bakong/tourist/currency"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("currency")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "currency"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    No currency worries
                  </li>
                </Link>
                <Link href={"/discover-bakong/tourist/explore"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("explore")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "explore"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    Explore Cambodia
                  </li>
                </Link>
              </ul>

              <ul className="flex flex-col gap-[3px] pb-[10px]">
                <li className="font-semibold text-[16px]">Security & Trust</li>
                <Link href={"/discover-bakong/security/blockchain"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("blockchain")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "blockchain"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    Blockchain Payment
                  </li>
                </Link>
                <Link href={"/discover-bakong/security/fraud-scam"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("about")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "about"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    About Fraud & Scam
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}
        {activeMenu === "developer" && (
          <div className="absolute top-[0px] left-0 w-full h-[552px] bg-[#310405] pl-[80px] pr-[80px] pt-[190px] text-[#F8F8F7] z-10">
            <p className="text-[20px] font-semibold mb-[20px]">
              Integrate Bakong
            </p>

            <div className="flex gap-[30px]">
              <ul className="flex flex-col gap-[3px] pb-[10px]">
                <li className="font-semibold text-[16px]">Documents</li>
                <Link href={"/developer/documents/khqr-guideline"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("khqr")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "khqr"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    KHQR Guideline
                  </li>
                </Link>
                <Link href={"/developer/documents/resources"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("download")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "download"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    Downloadable resources
                  </li>
                </Link>
                <li
                  onMouseEnter={() => setActiveSubmenu("ciftp")}
                  onMouseLeave={() => setActiveSubmenu(null)}
                  className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "ciftp"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                >
                  CIFTP
                </li>
              </ul>

              <ul className="flex flex-col gap-[3px] pb-[10px]">
                <li className="font-semibold text-[16px]">Tools</li>
                <Link href={"https://api-bakong.nbc.gov.kh/"} target="_blank">
                  <li
                    onMouseEnter={() => setActiveSubmenu("transaction")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "transaction"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    Transaction Search
                  </li>
                </Link>
                <li
                  onMouseEnter={() => setActiveSubmenu("sandbox")}
                  onMouseLeave={() => setActiveSubmenu(null)}
                  className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "sandbox"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                >
                  Sandbox
                </li>
              </ul>

              <ul className="flex flex-col gap-[3px] pb-[10px]">
                <li className="font-semibold text-[16px]">Help & Support</li>
                {/* <li className="font-normal text-[14px]">Scan pay in Cambodia</li> */}
                <li
                  onMouseEnter={() => setActiveSubmenu("support")}
                  onMouseLeave={() => setActiveSubmenu(null)}
                  className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "support"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                >
                  Customer Support
                </li>
                {/* <li className="font-normal text-[14px]">No currency worries</li> */}
                <li
                  onMouseEnter={() => setActiveSubmenu("contact")}
                  onMouseLeave={() => setActiveSubmenu(null)}
                  className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "currency"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
        )}
        {activeMenu === "community" && (
          <div className="absolute top-[0px] left-0 w-full h-[552px] bg-[#310405] pl-[80px] pr-[80px] pt-[190px] text-[#F8F8F7] z-10">
            <p className="text-[20px] font-semibold mb-[20px]">
              Join Bakong Community
            </p>

            <div className="flex gap-[30px]">
              <ul className="flex flex-col gap-[3px] pb-[10px]">
                <li className="font-semibold text-[16px]">Community</li>
                <Link href={"/community/community/forum-discussion"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("forums")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "forums"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    Forums & Discussion
                  </li>
                </Link>
                <li
                  onMouseEnter={() => setActiveSubmenu("community")}
                  onMouseLeave={() => setActiveSubmenu(null)}
                  className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "community"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                >
                  Developer Community
                </li>
              </ul>

              <ul className="flex flex-col gap-[3px] pb-[10px]">
                <li className="font-semibold text-[16px]">
                  Learning resources
                </li>
                <Link href={"/community/bakong/tutorial"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("tutorial")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "tutorial"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    Bakong Tutorial
                  </li>
                </Link>
                <li
                  onMouseEnter={() => setActiveSubmenu("faq")}
                  onMouseLeave={() => setActiveSubmenu(null)}
                  className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "faq"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                >
                  FAQs
                </li>
              </ul>

              <ul className="flex flex-col gap-[3px] pb-[10px]">
                <li className="font-semibold text-[16px]">From Bakong</li>
                <Link href={"/community/bakong/blog"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("blogs")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "blogs"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    Blogs
                  </li>
                </Link>
                <Link href={"/community/bakong/event"}>
                  <li
                    onMouseEnter={() => setActiveSubmenu("events")}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "events"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                  >
                    Events
                  </li>
                </Link>
              </ul>

              <ul className="flex flex-col gap-[3px] pb-[10px]">
                <li className="font-semibold text-[16px]">Help & Support</li>
                <li
                  onMouseEnter={() => setActiveSubmenu("customersupport")}
                  onMouseLeave={() => setActiveSubmenu(null)}
                  className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "customersupport"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                >
                  Customer support
                </li>
                {/* <li className="font-normal text-[14px]">No currency worries</li> */}
                <li
                  onMouseEnter={() => setActiveSubmenu("contact")}
                  onMouseLeave={() => setActiveSubmenu(null)}
                  className={`
                  cursor-pointer
                  h-[50px]
                  pl-[20px]
                  pr-[125px]
                  flex flex-col justify-center
                  flex flex-col justify-center
                  transition-all duration-200
                ${
                  activeSubmenu === "contact"
                    ? "bg-[#F8F8F71A]"
                    : "bg-transparent hover:bg-[#F8F8F71A]"
                }
              `}
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
