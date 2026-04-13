"use client";

import AnnouncementBar from "@/src/components/AnnouncementBar";
import Header from "@/src/components/Header";
import Link from "next/link";

interface BlogCardProps {
  img: string;
  title: string;
  description: string;
  date: string;
  bodyText: string;
  relatedBlog: 
    {
      img: string;
      title: string;
      desc: string;
      date: string;
    }[];
}
export default function BlogDetail(blogCard: BlogCardProps) {
  return (
    <section>
      <AnnouncementBar />
      <div className="w-full pb-[150px] bg-[#f8f8f6] bg-cover">
        <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" />
        {/* container */}
        <div className="pt-[30px] px-[80px] font-sora max-w-4xl mx-auto">
          <img src="/img/tutorial/video1.png" alt="" />
          <p className="font-sora font-bold text-[16px] text-[#300304] leading-[150%] tracking-[-0.02em] pt-[20px]">
            {blogCard.title}
          </p>
          <p className="font-sora uppercase font-semibold text-[46px] text-[#300304] leading-[150%] tracking-[-0.02em] pt-[10px]">
            {blogCard.description}
          </p>
          <p className="font-sora font-normal text-[16px] text-[#300304] leading-[150%] tracking-[-0.02em] pt-[10px]">
            {blogCard.date}
          </p>

          <div
            className="pt-[30px] prose
            prose-p:font-sora prose-p:text-[16px] prose-p:text-[#300304] 
            prose-li:font-sora prose-li:text-[16px] prose-li:text-[#300304] prose-ul:marker:text-[#300304]
            prose-h2:font-bold prose-h2:text-[22px] prose-h2:text-[#300304]"
            dangerouslySetInnerHTML={{ __html: blogCard.bodyText }}
          />
        </div>

        <h2 className="px-[80px] pt-[30px] font-sora max-w-4xl mx-auto pt-[90px] text-[22px] font-bold px-4">
          Related Blogs
        </h2>
        <div className="px-[80px]">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] pt-[30px]">
            {blogCard.relatedBlog.map((item, index) => (
              <Link key={index} href="/community/bakong/blog/1">
                <div className="pb-[30px] flex flex-col">
                  <img
                    // src={`/img/community/blog${index + 5}.svg`}
                    src={item.img}
                    className="w-max-[440px] h-[280px] object-cover"
                    alt=""
                  />
                  <div className="flex flex-col gap-[15px] pt-[15px]">
                    <p className="text-[16px] text-[#300304] font-bold leading-[150%] tracking-[-0.02em]">
                      {item.title}
                    </p>
                    <p className="text-[22px] h-[72px] text-[#300304] font-bold leading-[150%] tracking-[-0.02em] overflow-hidden">
                      {item.desc}
                    </p>
                    <p className="text-[16px] text-[#300304] font-normal leading-[150%] tracking-[-0.02em]">
                      {item.date}
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
