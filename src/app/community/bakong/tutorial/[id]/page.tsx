"use client";

import AnnouncementBar from "@/src/components/AnnouncementBar";
import BlogCardDetail from "@/src/components/BlogCardDetail";
import Header from "@/src/components/Header";
import Link from "next/link";
import { describe } from "node:test";
import { useState } from "react";

const blog = {
  img: "/img/community/blog1.svg",
  relatedBlog: [
    {
      img: "/img/community/blog2.svg",
      title: "Security",
      desc: "Lessons and insights from 8 years of Pixelgrade",
      date: "27 March 2025",
    },
    {
      img: "/img/community/blog3.svg",
      title: "Security",
      desc: "Lessons and insights from 8 years of Pixelgrade",
      date: "28 March 2025",
    },
    {
      img: "/img/community/blog4.svg",
      title: "Security",
      desc: "Lessons and insights from 8 years of Pixelgrade",
      date: "29 March 2025",
    },
  ],
  title: "Donation or Deception?",
  description: "Donation or deception? The truth behind charity scams.",
  date: "27 March 2025",
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
export default function BlogDetail() {
  return (
    <section>
      <BlogCardDetail
        img={blog.img}
        title={blog.title}
        description={blog.description}
        date={blog.date}
        bodyText={blog.content} 
        relatedBlog={blog.relatedBlog}      />
    </section>
  );
}
