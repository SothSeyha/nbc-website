import Link from "next/link";
import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";

interface BlogCard {
  headingText: string;
  subHeading: string;
  cardImgArray:any [];
  titleImg: string;
  DescriptionImg: string;
  DateImg: string;
}
export default function BlogCard(blogCard: BlogCard) {
  return (
    <div>
      <AnnouncementBar />
      <div className="w-full pb-[150px] bg-[#f8f8f6] bg-cover">
        <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" />
        {/* container */}
        <div className="w-full lg:px-[80px] md:px-12 px-[30px] pt-[30px] font-sora">
          {/* header guideline */}
          <p
            id="ChangeLogs"
            className="font-sora uppercase text-center font-semibold text-[35px] md:text-heading-1 text-[#300304] leading-[120%] tracking-extra-small"
          >
            {blogCard.headingText}
          </p>
          <p className="font-sora text-center font-regular text-body-large text-[#300304] leading-[150%] tracking-extra-small pt-[15px]">
            {blogCard.subHeading}
          </p>
          {/* grid blog */}
          <div className="w-full gap-[30px] pt-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {blogCard.cardImgArray.map((item, index) => (
              <Link key={index} href="/community/bakong/tutorial/1">
                <div className="w-full pb-[30px] flex flex-col">
                  <img
                    src={`/img/community/blog${index + 1}.svg`}
                    className="w-full md:w-[60%] lg:w-full h-auto aspect-[5.6/4] object-cover"
                    alt=""
                  />
                  <div className="flex flex-col gap-[15px]">
                    <p className="text-[16px] text-[#300304] font-bold leading-[150%] tracking-extra-small pt-[15px]">
                      {blogCard.titleImg}
                    </p>
                    <p className="text-[22px] h-[72px] text-[#300304] font-bold leading-[150%] tracking-extra-small overflow-hidden">
                      {blogCard.DescriptionImg}
                    </p>
                    <p className="mt-auto text-[16px] text-[#300304] font-regular leading-[150%] tracking-extra-small">
                      {blogCard.DateImg}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
