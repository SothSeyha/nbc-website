"use client";

import AnnouncementBar from "@/src/components/AnnouncementBar";
import Header from "@/src/components/Header";
import { FormEvent, useState } from "react";

export default function ForumDiscussion() {
  const arrPosts = [
    {
      id: 1,
      author: "Devit Huotkeo",
      title: "Ooooh, they added scheduled conversion?",
      body: "Even a few weeks ago I could only make limit/stop orders to convert currencies. Apparently they now added the ability to set a specific date instead? That'll make small online subscriptions convenient!With all the CS issues, I think a good news is refreshing from time to time.",
      upvotes: 3,
      comments: 4,
    },
  ];
  const [posts, setPost] = useState(arrPosts);

  async function addCmt(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const discussion = formData.get("discussion") as string;
    console.log(discussion);
    if (discussion.trim()) {
      setPost((prev) => [
        ...prev,
        {
          id: 1,
          author: "Seyha",
          title: "No ui to get title",
          body: discussion,
          upvotes: 0,
          comments: 0,
        },
      ]);
    }

    const textArea = e.currentTarget.querySelector("textarea");
    if (textArea) {
      textArea.value = "";
      textArea.style.height = "47px";
    }
  }

  return (
    <section>
      {/* <AnnouncementBar /> */}
      <div className="w-full h-screen pb-[150px] bg-[#f8f8f6] bg-cover overflow-hidden">
        {/* <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" /> */}
        {/* container */}
        <div className="lg:w-[70%] px-[80px] m-auto pt-[30px] font-sora">
          {/* header */}
          <p className="font-sora uppercase text-center font-semibold text-[33px] text-[#300304] leading-[120%] tracking-[-0.02em]">
            Forum & discussion
          </p>
          <p className="font-sora text-center font-normal text-[16px] text-[#300304] leading-[150%] tracking-[-0.02em] pt-[15px]">
            A forum for Bakong users, asking and get supports from each other.
            It is a <br /> community where people can share stuff.
          </p>
          <div className="pt-[50px]">
            <form action="" onSubmit={addCmt}>
              <div className="w-full bg-[#3104050D] flex gap-[20px] items-center pl-[20px]">
                <img
                  src="/img/forum/chat.svg"
                  className="max-w-[24px] max-h-[24px]"
                  alt=""
                />
                <textarea
                  placeholder="Add a discussion"
                  name="discussion"
                  id=""
                  rows={1}
                  className="w-full focus:outline-none font-sora text-left font-normal text-[16px] text-[#3104054D] leading-[150%] tracking-[-0.02em] resize-none overflow-hidden"
                  style={{ padding: "13px 15px 13px 0", height: "47px" }}
                  onInput={(e) => {
                    const el = e.currentTarget;
                    el.style.height = "47px";
                    el.style.height = el.scrollHeight + "px";
                    el.style.color = "#300304";
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      e.currentTarget.form?.requestSubmit();
                    }
                  }}
                />
              </div>
            </form>
            {posts.map((item, index) => (
              <div key={index}>
                <div className="pt-[50px] w-full">
                  <p className="text-[16px] text-[#300304] font-bold leading-[150%] tracking-[-0.02em]">
                    {item.author}
                  </p>
                  <p className="text-[24px] text-[#300304] font-bold leading-[150%] tracking-[-0.02em] pt-[10px]">
                    {item.title}
                  </p>
                  <p className="text-[16px] text-[#300304] font-normal leading-[150%] tracking-[-0.02em] pt-[10px] break-words">
                    {item.body}
                  </p>
                </div>
                <div className="flex gap-[20px]">
                  <div className="flex gap-[6px] px-[9px] h-[32px] bg-[#3104050D] rounded-[32px] items-center justify-center mt-[10px]">
                    <img
                      src="/img/forum/arrow-up.svg"
                      className="max-w-[20px] h-[20px]"
                      alt=""
                    />
                    <label className="text-[16px] text-[#300304] font-normal leading-[150%] tracking-[-0.02em]">
                      {item.upvotes}
                    </label>
                    <img
                      src="/img/forum/arrow-down.svg"
                      className="max-w-[20px] h-[20px]"
                      alt=""
                    />
                  </div>
                  <div className="flex gap-[6px] px-[9px] h-[32px] bg-[#3104050D] rounded-[32px] items-center justify-center mt-[10px]">
                    <img
                      src="/img/forum/chat.svg"
                      className="max-w-[20px] h-[20px]"
                      alt=""
                    />
                    <label className="text-[16px] text-[#300304] font-normal leading-[150%] tracking-[-0.02em]">
                      {item.comments}
                    </label>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
