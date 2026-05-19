"use client";

import AnnouncementBar from "@/src/components/AnnouncementBar";
import CardDisplay from "@/src/components/CardDisplay";
import Header from "@/src/components/Header";
import SectionDisplay1 from "@/src/components/SectionDisplay1";
import SectionDisplay2 from "@/src/components/SectionDisplay2";
import { fetchItems } from "@/src/libs/api";
import { useEffect, useState } from "react";

export default function ReceiveKhqr() {
  const [content, setConent] = useState<any>(null);

  async function fetchContent() {
    const data = await fetchItems("main-content?path=/discover-bakong/5");
    console.log(data, "data");
    setConent(data);
  }

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <section>
      {/* first section */}
        <SectionDisplay1
        title={content?.items[0].label}
        display={content?.items[0].title}
        description={content?.items[0].description}
        btnText={"Start Sending Money"}
        btnHref={"#"}
        imgSrc={process.env.NEXT_PUBLIC_API_URL +content?.items[0].image}
        imgAlt={""}
      />
      {/* second section */}
      <SectionDisplay2
        heading={content?.items[1].title}
        description={content?.items[1].description}
        bgImg={process.env.NEXT_PUBLIC_API_URL +content?.items[1].image}
      />

      {/* third section */}
      <CardDisplay
        heading1={content?.items[2].title}
        description1={content?.items[2].description}
        img1={process.env.NEXT_PUBLIC_API_URL +content?.items[2].image}
        heading2={content?.items[3].title}
        description2={content?.items[3].description}
        btnText1={"ASEAN Countries"}
        btnHref1={"#"}
        btnText2={"Provinces"}
        btnHref2={"#"}
        img2={process.env.NEXT_PUBLIC_API_URL +content?.items[3].image}
        heading3={content?.items[4].title}
        description3={content?.items[4].description}
        imgCard={Array.isArray(content?.items[4]?.image) ? content?.items[4]?.image : []}
      />
    </section>
  );
}
