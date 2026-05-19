"use client";

import AnnouncementBar from "@/src/components/AnnouncementBar";
import Header from "@/src/components/Header";
import Link from "next/link";
import { useState } from "react";

export default function BlogDetail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navLists = ["Change Logs", "Introduction"];
  const blog = {
    title: "Donation or Deception?",
    content: `<p>The growth of social media and crowdfunding sites has given us a number of options when it comes to donating to charitable causes all over the world — it's easier than ever to support those who need it most.</p>

<p>But this new landscape continues to be infiltrated by scammers who prey on people's goodwill, and their exploitative tactics are constantly evolving.</p>

<h2>What's a charity scam?</h2>
<p>Charity scams are deceptive and predatory, targeting people's kindness and generosity by exploiting real or fabricated crises.</p>

<h2>How do they work?</h2>
<ul>
  <li>Fake fundraising campaigns: fraudsters create fake accounts or pages, often using images and stories stolen from genuine causes.</li>
  <li>Impersonating real charities: scammers impersonate well-known charitable organisations by creating lookalike profiles.</li>
  <li>Direct messages: fraudsters send direct messages with heartbreaking stories or fabricated emergencies.</li>
</ul>

<h2>How do I protect myself?</h2>
<ul>
  <li>Verify the source. Before donating, research the charity or campaign.</li>
  <li>Avoid immediate pressure. Legitimate charities rarely pressure people to donate immediately.</li>
  <li>Donate securely. Use trusted platforms for donations.</li>
</ul>

<p>Online crowdfunding platforms are a double-edged sword — scammers exploit kindhearted people in the hope they won't notice the warning signs.</p>`,
  };
  return (
    <section>
      {/* <AnnouncementBar /> */}
      <div className="w-full pb-[150px] bg-[#f8f8f6] bg-cover">
        {/* <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" /> */}
        {/* container */}
        <div className="px-[80px] pt-[30px] font-sora max-w-4xl mx-auto">
          <img src="/img/blog/detail/image1.png" alt="" />
          <p className="font-sora font-bold text-[16px] text-[#300304] leading-[150%] tracking-[-0.02em] pt-[20px]">
            Security
          </p>
          <p className="font-sora uppercase font-semibold text-[46px] text-[#300304] leading-[150%] tracking-[-0.02em] pt-[10px]">
            Donation or deception? The truth behind charity scams.
          </p>
          <p className="font-sora font-normal text-[16px] text-[#300304] leading-[150%] tracking-[-0.02em] pt-[10px]">
            27 March 2025
          </p>

          <div
            className="pt-[30px] prose
            prose-p:font-sora prose-p:text-[16px] prose-p:text-[#300304] 
            prose-li:font-sora prose-li:text-[16px] prose-li:text-[#300304] prose-ul:marker:text-[#300304]
            prose-h2:font-bold prose-h2:text-[22px] prose-h2:text-[#300304]"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        <h2 className="pt-[30px] px-[80px] font-sora max-w-4xl mx-auto pt-[15px] text-[22px] font-bold">
          Related Blogs
        </h2>
        <div className="px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] pt-[30px]">
            {[1, 2, 3].map((item, index) => (
              <Link key={index} href="/community/bakong/blog/1">
                <div className="max-w-[440px] pb-[30px] flex flex-col">
                  <img
                    src={`/img/community/blog${index + 1}.svg`}
                    className="max-w-[420px] h-[280px] object-cover"
                    alt=""
                  />
                  <div className="flex flex-col gap-[15px]">
                    <p className="text-[16px] text-[#300304] font-bold leading-[150%] tracking-[-0.02em] pt-[15px]">
                      Security
                    </p>
                    <p className="text-[22px] h-[72px] text-[#300304] font-bold leading-[150%] tracking-[-0.02em] overflow-hidden">
                      Lessons and insights from 8 years of Pixelgrade
                    </p>
                    <p className="mt-auto text-[16px] text-[#300304] font-normal leading-[150%] tracking-[-0.02em]">
                      27 March 2025
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
