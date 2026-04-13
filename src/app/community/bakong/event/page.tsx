"use client";
import BlogCard from "@/src/components/BlogCard";
import { useState } from "react";

export default function Event() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navLists = ["Change Logs", "Introduction"];
  return (
    <section>
      <BlogCard
        headingText={"Bakong Events"}
        subHeading={"Events of Bakong and see if we are heading somewhere."}
        cardImgArray={[1, 2, 3]}
        titleImg={"Security"}
        DescriptionImg={"Lessons and insights from 8 years of Pixelgrade"}
        DateImg={"27 March 2025"}
      />
    </section>
  );
}
