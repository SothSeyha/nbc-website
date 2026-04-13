import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";

interface SectionDisplayProps {
  title: string;
  display: string;
  description: string;
  btnText: string;
  btnHref: string;
  imgSrc: string;
  imgAlt: string;
}

export default function SectionDisplay1({
  title,
  display,
  description,
  btnText,
  btnHref,
  imgSrc,
  imgAlt,
}: SectionDisplayProps) {
  return (
    <div className="w-full h-screen bg-[#f8f8f6] bg-cover flex flex-col overflow-hidden">
      <AnnouncementBar />
      <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" />

      {/* section display 1 */}
      <div className="flex-1 w-full px-[80px] font-sora flex gap-[30px]">
        <div className="w-[50%] flex flex-col justify-center">
          <p className="uppercase font-semibold text-[28px] leading-[120%] tracking-extra-small mb-[25px]">
            {title}
          </p>
          <p
            className="uppercase font-semibold text-display leading-[120%] tracking-extra-small mb-[25px]"
            dangerouslySetInnerHTML={{ __html: display }}
          ></p>
          <div className="font-regular text-body-large leading-[150%] tracking-extra-small text-justify">
            {description}
          </div>
          <div className="bg-[#D93744] w-[210px] h-[46px] flex flex-col justify-center mt-[30px]">
            <a href={btnHref}>
              <p className="font-regular text-button text-center text-white">
                {" "}
                {btnText}
              </p>
            </a>
          </div>
        </div>
        <div className="bg-red w-[50%] flex flex-col justify-center">
          <img
            src={imgSrc}
            className="w-[80%] h-[96vh] object-contain"
            alt={imgAlt}
          />
        </div>
      </div>
    </div>
  );
}
