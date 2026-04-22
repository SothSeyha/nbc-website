interface CardDisplay {
  heading1: string;
  description1: string;
  img1: string;
  heading2: string;
  description2: string;
  btnText1: string;
  btnHref1: string;
  btnText2: string;
  btnHref2: string;
  img2: string;
  imgCard: any[];
}
export default function CardDisplay(CardDisplay: CardDisplay) {
  return (
    <div className="w-full bg-[#f8f8f6]">
      {/* first card */}
      <div className="w-full bg-[#EEECEB] min-h-screen px-6 md:px-12 lg:px-[80px] lg:pt-[60px] flex flex-col items-center overflow-hidden py-10 md:py-16 lg:py-[0]">
        <div className="text-[#300304]">
          <p className="text-center text-[35px] md:text-heading-1 uppercase font-semibold leading-[120%] tracking-extra-small">
            {CardDisplay.heading1}
          </p>
          <p
            className="text-center text-body md:text-body-large font-regular leading-[150%] tracking-extra-small pt-[26px]"
            dangerouslySetInnerHTML={{ __html: CardDisplay.description1 }}
          ></p>
        </div>
        <img
          src={CardDisplay.img1}
          className="w-full h-auto md:w-[60%] aspect-[6.9/4] object-cover rounded-lg mt-[50px] md:mt-[90px]"
          // className="w-full h-[40vh] md:w-[80%] md:h-[45vh] lg:w-[80%] lg:h-[55vh] object-contain object-top mt-[60px] md:mt-[90px]"
         
          alt="Brand view"
        />
      </div>
      {/* second card */}
      {/* <div className="w-full min-h-screen px-6 md:px-12 lg:px-[80px] flex flex-col justify-center overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] flex flex-col justify-center">
            <p className="uppercase text-[35px] md:text-heading-1 text-[#310405] font-semibold leading-[120%] tracking-extra-small"
            dangerouslySetInnerHTML={{__html:CardDisplay.heading2}}>
              
            </p>
            <p className="text-body md:text-body-large text-[#310405] font-regular leading-[150%] tracking-extra-small pt-[12px]"
            dangerouslySetInnerHTML={{ __html: CardDisplay.description1 }}
            >
            </p>
            <div className="flex gap-[10px] pt-[20px]">
              <div className="px-[10px] py-[15px] bg-[#3003040D]">
                <label className="font-regular text-button leading-[150%] tracking-extra-small">
                  {CardDisplay.btnText1}
                </label>
              </div>
              <div className="px-[10px] py-[15px] bg-[#3003040D]">
                <label className="font-regular text-button leading-[150%] tracking-extra-small">
                  {CardDisplay.btnText2}
                </label>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex flex-col items-center">
            <img src={CardDisplay.img2} className="w-[85%] h-[40vh] md:w-[90%] md:h-[30vh] lg:w-[90%] lg:h-[29vh] xl:w-[80%] xl:h-[`40vh]  mt-[50px] md:mt-0" alt="" />
          </div>
        </div>
      </div> */}
      <div className="w-full mt-[5px] bg-[#EEECEB] px-6 md:px-12 lg:px-[80px] flex flex-col justify-center py-10 md:py-16 lg:py-0 min-h-screen overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0">
          <div className="w-full md:w-[50%] flex flex-col justify-center">
            <p
              className="uppercase text-[28px] md:text-heading-1 text-[#310405] font-semibold leading-[120%] tracking-extra-small"
              dangerouslySetInnerHTML={{ __html: CardDisplay.heading2 }}
            />
            <p
              className="text-body md:text-body-large text-[#310405] font-regular leading-[150%] tracking-extra-small pt-[12px]"
              dangerouslySetInnerHTML={{ __html: CardDisplay.description1 }}
            />
            <div className="flex gap-[10px] pt-[20px]">
              <div className="px-[10px] py-[15px] bg-[#3003040D]">
                <label className="font-regular text-body md:text-button leading-[150%] tracking-extra-small">
                  {CardDisplay.btnText1}
                </label>
              </div>
              <div className="px-[10px] py-[15px] bg-[#3003040D]">
                <label className="font-regular text-body md:text-button leading-[150%] tracking-extra-small">
                  {CardDisplay.btnText2}
                </label>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex flex-col items-center">
            <img
              src={CardDisplay.img2}
              className="w-full h-auto md:w-[70%] aspect-[4/4] object-cover rounded-lg mt-[30px] md:mt-0"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* last section */}
      <div className="w-full pt-[60px] min-h-screen mb-[40px] md:mb-0 px-6 md:px-12 lg:px-[80px] flex flex-col overflow-hidden justify-center items-center">
        <p className="font-semibold text-[35px] lg:text-heading-1 uppercase leading-[120%] tracking-extra-small text-center">
          Sending gifts? Make it swift
        </p>
        <p className="font-regular text-body md:text-body-large leading-[150%] tracking-extra-small pt-[20px] text-center">
          Make their day with something you know they won't throw away. And
          customise <br /> it no matter what you're celebrating.
        </p>
        <div className="w-full pt-[45px] grid md:grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[60px]  ">
          {CardDisplay.imgCard.map((item, index) => (
            <div key={index} className="w-full">
              <img
                src={`/img/transfer/image${index + 1}.png`}
                className="w-full md:w-[60%] lg:w-[98%] h-auto aspect-[3/4] object-cover rounded-lg"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
