import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <section>
      <div className="w-full min-h-screen pb-[100px] bg-[url('/bg/a.png')] bg-cover flex flex-col overflow-hidden">
        <AnnouncementBar />
        <div className="">
          <Header logoSrc="/img/bakong-logo.svg" textColor="text-[#F8F8F7]" />
          {/* Container */}
          <div className="w-full lg:px-[80px] md:px-12 px-[25px] pt-[50px] lg:pt-[90px] font-sora">
            <div className="text-[#F8F8F7]">
              <p className="font-sora uppercase text-heading-1 lg:text-display font-semibold leading-[120%] tracking-extra-small lg:w-[890px]">
                Seamless Interbank
                Transfers,
                Local to Global
              </p>
              <p className="font-sora pt-[45px] font-regular text-body-large leading-[150%] tracking-extra-small text-justify lg:text-center lg:max-w-[500px]">
                Experience the convenience of a virtual card with Bakong. Instantly generate and use a secure digital card for all your online and in-app purchases—no need for a physical card.
              </p>
            </div>

            <div className="mt-[28px] w-[210px] py-[14px] items-center justify-center flex  bg-[#F8F8F7] cursor-pointer">
              Download Bakong App
            </div>

            <div>
              <p className="text-[#F8F8F7] mt-[100px] font-sora font-regular text-body-large leading-[150%] tracking-extra-small text-justify lg:max-w-[550px] lg:text-left">
                Bakong bridges traditional banking and digital
                convenience for everyone. Scroll to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* experience screen */}
      <div className="w-full min-h-screen pt-[30px] pb-[100px] bg-[#310405] flex flex-col overflow-hidden">
        <div className="w-full text-[#F8F8F7] lg:px-[80px] md:px-12 px-[25px] lg:max-w-[1200px] mx-auto">
          <p className="font-sora text-center text-[33px] lg:text-heading-1 uppercase font-semibold leading-[120%] tracking-extra-small lg:mx-auto">
            Experience Transactions with Bakong
          </p>
          
          <p className="font-sora text-justify lg:text-center text-body-large font-regular leading-[150%] tracking-extra-small pt-[26px] max-w-[700px] mx-auto">
            Designed to empower individuals and businesses, Bakong bridges
            traditional banking and digital convenience for everyone.
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center pt-[43px] ">
          <img
            src="/img/interbank-transfer/brand-view1.png"
            className="w-full h-auto md:w-[60%] lg:w-[50%] aspect-[5/4] object-cover rounded-lg mt-[50px] md:mt-[90px]"
            alt=""
          />
        </div>
      </div>
      {/* bakong generation */}
      {/* <div className="w-full h-full pb-[20px] bg-[#871214]">
        <p>hi</p>
      </div> */}
      {/* debit card */}
      {/* <div>
        <div className="w-full h-full pb-[590px] bg-[#310405] text-[#F8F8F7] pt-[30px] font-sora leading-[150%] tracking-[-0.02em] flex flex-col items-center justify-center">
          <p className="font-semibold text-[32px] uppercase">
            Anyone can have debit card
          </p>
          <p className="font-normal text-[14px] text-center pt-[30px]">
            Designed to empower individuals, Bakong bridges traditional banking
            and <br />
            digital convenience for everyone.
          </p>
          <div className="flex gap-[22px] pt-[50px]">
            <div className="w-[140px] h-[50px] bg-[#F8F8F7] text-black flex items-center justify-center">
              Create my card
            </div>
            <div className="w-[199px] h-[50px] bg-[#EFEEE91A] text-[#F8F8F7] flex items-center justify-center">
              Create Bakong Account
            </div>
          </div>
        </div>
      </div> */}
      {/* payment screen */}
      <div
        className="w-full min-h-screen pb-[100px] lg:px-[80px] md:px-12 px-[25px] flex flex-col justify-end overflow-hidden
        bg-[url('/img/bg-payment.png')] bg-cover bg-no-repeat bg-[center_70%]
        text-black font-sora 
        [&_*]:leading-[150%]
        [&_*]:tracking-[-0.02em]"
      >
        <p className="font-semibold text-[33px] lg:text-heading-1 uppercase max-w-[500px]">
          Payment For your  every daily life
        </p>
        <p className="font-normal text-body-large pt-[30px] max-w-[550px] text-justify lg:text-left lg:max-w-[550px]">
          Designed to empower individuals and businesses, Bakong bridges
          traditional
          banking and digital convenience for everyone.
        </p>
        <div className="flex gap-[10px] lg:gap-[22px] pt-[30px]">
          <div className="px-[10px] h-[46px] bg-[#310405] text-body lg:text-body-large text-[#F8F8F7] flex items-center justify-center whitespace-nowrap">
            Create my card
          </div>
          <div className="px-[10px] h-[46px] bg-[#EFEEE91A] text-black border-[1px] border-[#310405] flex items-center justify-center whitespace-nowrap">
            Create Bakong Account
          </div>
        </div>
      </div>
      {/* anyone card */}
      <div className="w-full lg:px-[80px] pb-[90px] md:px-12 px-[25px] min-h-screen overflow-hidden flex flex-col md:flex-row gap-[35px] md:gap-[45px]">
        <div className="w-full lg:w-[50%] py-[80px] flex flex-col justify-center items-center ">
          <img src="/img/tg-view1.png" className="ml-auto w-full h-auto aspect-[4.2/4] lg:w-[90%]" alt="" />
        </div>
        <div className="w-full lg:w-[50%] flex flex-col justify-center overflow-hidden">
          <p className="font-sora uppercase text-[33px] lg:text-heading-1 font-semibold leading-[150%] tracking-extra-small">
            Anyone can have  debit card
          </p>
          <p className="font-sora text-justify font-regular text-body-large pt-[20px] tracking-extra-small">
            Designed to empower individuals and businesses, Bakong
            bridges traditional banking and digital convenience for
            everyone.
          </p>
          <div className="w-[101px] py-[15px] text-button font-regular leading-[150%] tracking-extra-small bg-[#D93744] text-[#F8F8F7] flex items-center justify-center mt-[36px]">
            Try it out
          </div>
        </div>
      </div>
      {/* recent blog */}
      <div className="w-full lg:px-[80px] pb-[90px] md:px-12 px-[25px] min-h-screen pb-[450px] bg-[#F1F1F1] pt-[80px] overflow-hidden">
        <div className="w-full flex gap-[8px]">
            <img
              src="/img/ellipse.png"
              alt=""
              className="w-[14px] h-[14px] mt-[3px]"
            />
            <p className="font-sora font-normal text-[14px]">RECENT BLOGS</p>
          </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] pt-[50px]">
          {[1,2,3].map((item, index) => (
          <div
            key={index}
            className="w-full pb-[30px]"
          >
            <img src={`/img/blog/image${index+1}.png`} className="w-full md:w-[60%] lg:w-full h-auto aspect-[5.6/4] object-cover rounded-lg" alt="" />
            <div>
              <p className="font-semibold text-heading-2 pt-[30px] leading-[150%] tracking-extra-small">
              Join us in revolutionising the way we send money
            </p>
            <div className="mt-auto pt-[23px] flex gap-[12px]">
              <p className="font-regular text-body-medium leading-[150%] tracking-extra-small">Published at</p>
              <p className="font-semibold text-body-bold leading-[150%] tracking-extra-small">
                12 August 2024 | 12:34
              </p>
            </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
