"use client";

import Link from "next/link";
import { useState } from "react";

export default function MenuResponsive() {
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
        <div className="lg:hidden absolute top-[70px] left-0 w-full bg-[#310405] text-[#F8F8F7] z-20 overflow-y-auto max-h-[80vh]">
          {/* Discover Bakong */}
          <div className="border-b border-[#F8F8F71A]">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-body-large font-semibold"
              onClick={() =>
                setMobileExpandedMenu(
                  mobileExpandedMenu === "discover" ? null : "discover",
                )
              }
            >
              Discover Bakong
              <span>{mobileExpandedMenu === "discover" ? "−" : "+"}</span>
            </button>
            {mobileExpandedMenu === "discover" && (
              <div className="px-6 pb-4 flex flex-col">
                <p className="text-[14px] font-semibold py-2">Daily Finance</p>
                <Link
                  href="/discover-bakong/finance/transfer"
                  onClick={() => setIsOpenMenu(false)}
                >
                  <p className="pl-4 py-2">Transfers</p>
                </Link>
                <Link
                  href="/discover-bakong/finance/card"
                  onClick={() => setIsOpenMenu(false)}
                >
                  <p className="pl-4 py-2">Card</p>
                </Link>
                <Link
                  href="/discover-bakong/finance/khqr"
                  onClick={() => setIsOpenMenu(false)}
                >
                  <p className="pl-4 py-2">KHQR Payment</p>
                </Link>
                <Link
                  href="/discover-bakong/finance/link-account"
                  onClick={() => setIsOpenMenu(false)}
                >
                  <p className="pl-4 py-2">Link Account</p>
                </Link>
              </div>
            )}
          </div>

          {/* Developer */}
          <div className="border-b border-[#F8F8F71A]">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-body-large font-semibold"
              onClick={() =>
                setMobileExpandedMenu(
                  mobileExpandedMenu === "developer" ? null : "developer",
                )
              }
            >
              Developer
              <span>{mobileExpandedMenu === "developer" ? "−" : "+"}</span>
            </button>
            {mobileExpandedMenu === "developer" && (
              <div className="px-6 pb-4 flex flex-col">
                <p className="text-[14px] font-semibold py-2">Documents</p>
                <Link
                  href="/developer/documents/khqr-guideline"
                  onClick={() => setIsOpenMenu(false)}
                >
                  <p className="pl-4 py-2">KHQR Guideline</p>
                </Link>
                <Link
                  href="/developer/documents/resources"
                  onClick={() => setIsOpenMenu(false)}
                >
                  <p className="pl-4 py-2">Downloadable resources</p>
                </Link>
              </div>
            )}
          </div>

          {/* Community */}
          <div className="border-b border-[#F8F8F71A]">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-body-large font-semibold"
              onClick={() =>
                setMobileExpandedMenu(
                  mobileExpandedMenu === "community" ? null : "community",
                )
              }
            >
              Community
              <span>{mobileExpandedMenu === "community" ? "−" : "+"}</span>
            </button>
            {mobileExpandedMenu === "community" && (
              <div className="px-6 pb-4 flex flex-col">
                <p className="text-[14px] font-semibold py-2">Community</p>
                <Link
                  href="/community/community/forum-discussion"
                  onClick={() => setIsOpenMenu(false)}
                >
                  <p className="pl-4 py-2">Forums & Discussion</p>
                </Link>
                <Link
                  href="/community/bakong/tutorial"
                  onClick={() => setIsOpenMenu(false)}
                >
                  <p className="pl-4 py-2">Bakong Tutorial</p>
                </Link>
                <Link
                  href="/community/bakong/blog"
                  onClick={() => setIsOpenMenu(false)}
                >
                  <p className="pl-4 py-2">Blogs</p>
                </Link>
                <Link
                  href="/community/bakong/event"
                  onClick={() => setIsOpenMenu(false)}
                >
                  <p className="pl-4 py-2">Events</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
