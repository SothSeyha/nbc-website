"use client";

import AnnouncementBar from "@/src/components/AnnouncementBar";
import Header from "@/src/components/Header";
import { FormEvent, useState } from "react";

export default function ForumDiscussion() {
  const arrPosts: any = [
    {
      id: 1,
      postId: 1,
      author: "Devit Huotkeo",
      title: "Ooooh, they added scheduled conversion?",
      body: "Even a few weeks ago I could only make limit/stop orders to convert currencies. Apparently they now added the ability to set a specific date instead? That'll make small online subscriptions convenient!With all the CS issues, I think a good news is refreshing from time to time.",
      upvotes: 0,
      comments: 0,
    },
  ];
  const arrReplyPosts: any = [];
  const [posts, setPost] = useState(arrPosts);
  const [replyPosts, setReplyPost] = useState(arrReplyPosts);
  const [openReplyBox, setOpenReplyBox] = useState<number | null>(null);

  async function addCmt(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const discussion = formData.get("discussion") as string;
    console.log(discussion);
    if (!discussion) return;
    if (discussion.trim()) {
      setPost((prev: any) => [
        ...prev,
        {
          id: prev.length + 1,
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

  async function replyPost(e: FormEvent<HTMLFormElement>, postId:any, countCmt:any) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const replyPost = formData.get("replyPost") as string;
    console.log(replyPost);
    if (!replyPost) return;
    if (replyPost.trim()) {
      setReplyPost((prev: any) => [
        ...prev,
        {
          id: prev.length + 1,
          postId: postId,
          author: "Seyha",
          body: replyPost,
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
      <AnnouncementBar />
      <div className="w-full h-screen pb-[150px] bg-[#f8f8f6] bg-cover overflow-hidden overflow-y-auto">
        <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" />
        {/* container */}
        <div className="lg:w-[70%] lg:px-[80px] md:px-12 px-[30px] m-auto pt-[30px] font-sora">
          {/* header */}
          <p className="font-sora uppercase text-center font-semibold text-[35px] md:text-heading-1 text-[#300304] leading-[120%] tracking-extra-small">
            Forum & discussion
          </p>
          <p className="font-sora text-center font-regular text-body-large text-[#300304] leading-[150%] tracking-extra-small pt-[15px] max-w-[520px] mx-auto">
            A forum for Bakong users, asking and get supports from each other.It is a community where people can share stuff.
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
                  className="w-full focus:outline-none font-sora text-left font-regular text-body-large text-[#3104054D] leading-[150%] tracking-extra-small resize-none overflow-hidden"
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
            {posts.map((item: any, index: any) => (
              <div key={index}>
                <div className="pt-[50px] w-full">
                  <p className="text-body-large text-[#300304] font-bold leading-[150%] tracking-extra-small">
                    {item.author}
                  </p>
                  <p className="text-body-large text-[#300304] font-bold leading-[150%] tracking-extra-small pt-[10px]">
                    {item.title}
                  </p>
                  <p className="text-body-large text-[#300304] font-regular leading-[150%] tracking-extra-small pt-[10px] text-justify overflow-hidden">
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
                    <label className="text-body-large text-[#300304] font-regular leading-[150%] tracking-extra-small">
                      {item.upvotes}
                    </label>
                    <img
                      src="/img/forum/arrow-down.svg"
                      className="max-w-[20px] h-[20px]"
                      alt=""
                    />
                  </div>
                  <div
                    className="flex gap-[6px] px-[9px] h-[32px] bg-[#3104050D] rounded-[32px] items-center justify-center mt-[10px]"
                    onClick={() => {
                      console.log(item.id, "postId");
                      setOpenReplyBox(
                        openReplyBox === item.id ? null : item.id,
                      );
                    }}
                  >
                    <img
                      src="/img/forum/chat.svg"
                      className="max-w-[20px] h-[20px]"
                      alt=""
                    />
                    <label className="text-body-large text-[#300304] font-regular leading-[150%] tracking-extra-small">
                      {item.comments}
                    </label>
                  </div>
                </div>
                {/* reply post box */}
                {openReplyBox === item.id && (
                  <div className="pt-[20px]">
                    <p className="text-body-large text-[#300304] font-regular leading-[150%] tracking-extra-small">
                      Comments
                    </p>
                    <form
                      action=""
                      onSubmit={(e) => replyPost(e, item.id, replyPosts.length)}
                      className="pt-[15px] pl-[30px]"
                    >
                      <div className="w-full bg-[#3104050D] flex gap-[20px] items-center pl-[20px]">
                        <img
                          src="/img/forum/chat.svg"
                          className="max-w-[24px] max-h-[24px]"
                          alt=""
                        />
                        <textarea
                          placeholder="Add a discussion"
                          name="replyPost"
                          id=""
                          rows={1}
                          className="w-full focus:outline-none font-sora text-left font-regular text-[16px] text-[#3104054D] leading-[150%] tracking-extra-small resize-none overflow-hidden"
                          style={{
                            padding: "13px 15px 13px 0",
                            height: "47px",
                          }}
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
                      {(() => {
                        const filteredReplies = replyPosts.filter((reply:any) => reply.postId === index+1);
                        return filteredReplies.map((reply:any, i:any) => (
                          <div key={i}>
                          <div className="pt-[20px] w-full pl-[30px]">
                            <p className="text-body-large text-[#300304] font-bold leading-[150%] tracking-extra-small">
                              {reply.author}
                            </p>
                            <p className="text-body-large text-[#300304] font-regular leading-[150%] tracking-extra-small pt-[8px] text-justify overflow-hidden">
                              {reply.body}
                            </p>
                          </div>
                        </div>
                        ));
                      })()}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
