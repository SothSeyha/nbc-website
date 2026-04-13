"use client";
import BlogCard from "@/src/components/BlogCard";
import { useState } from "react";

export default function Blog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navLists = ["Change Logs", "Introduction"];
  return (
    <section>
      <BlogCard
        headingText={"Bakong Blogs"}
        subHeading={"Where you explore Bakong in a fun way of reading"}
        cardImgArray={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        titleImg={"Security"}
        DescriptionImg={"Lessons and insights from 8 years of Pixelgrade"}
        DateImg={"27 March 2025"}
      />
    </section>
  );
}
