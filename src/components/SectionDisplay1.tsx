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
    <div className="w-full min-h-screen bg-[#f8f8f6] bg-cover flex flex-col overflow-hidden">
      {/* <AnnouncementBar />
      <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" /> */}

      {/* section display 1 */}
      <div className="flex-1 w-full lg:px-[80px] md:px-12 px-6 font-sora flex flex-col md:flex-row gap-[35px] md:gap-[45px] py-10 md:py-0">
        <div className="w-full md:w-[50%] flex flex-col justify-center">
          <p className="uppercase font-semibold lg:text-[28px] md:text-heading-2 leading-[120%] tracking-extra-small mb-4 md:mb-[25px]">
            {title}
          </p>
          <p
            className="uppercase font-semibold text-[35px] md:text-heading-1 lg:text-display leading-[120%] tracking-extra-small mb-[25px]"
            dangerouslySetInnerHTML={{ __html: display }}
          ></p>
          <div className="font-regular text-body md:text-body-large leading-[150%] tracking-extra-small text-justify">
            {description}
          </div>
          <div className="bg-[#D93744] w-[190px] h-[40px] md:w-[210px] md:h-[46px] flex flex-col justify-center mt-[30px]">
            <a href={btnHref}>
              <p className="font-regular text-body md:text-button text-center text-white">
                {" "}
                {btnText}
              </p>
            </a>
          </div>
        </div>
        <div className="w-full bg-red md:w-[50%] flex flex-col justify-center">
          <img
            src={imgSrc}
            // className="ml-auto md:w-[70%] md:h-[50vh] lg:w-[80%] lg:h-[96vh] object-contain"
            className="ml-auto w-full h-auto aspect-[3.5/4] md:w-[80%] object-cover"
            // className="ml-auto w-[100%] h-[50vh] lg:w-[93%] lg:h-[96vh] object-contain"
            alt={imgAlt}
          />
        </div>
      </div>
    </div>
  );
}
