import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <section>
      <div className="w-full max-h-screen pb-[300px] bg-[url('/bg/a.png')] bg-cover flex flex-col overflow-hidden">
        <AnnouncementBar />
        <div className="">
          <Header logoSrc="/img/bakong-logo.svg" textColor="text-[#F8F8F7]" />
          {/* Container */}
          <div className="w-full px-[80px] pt-[90px] font-sora">
            <div className="text-[#F8F8F7]">
              <p className="font-sora uppercase text-display font-semibold leading-[120%] tracking-extra-small">
                Seamless Interbank <br />
                Transfers, <br />
                Local to Global
              </p>
              <p className="font-sora pt-[45px] font-regular text-body-large leading-[150%] tracking-extra-small">
                Effortlessly connect with financial institutions worldwide
                <br />
                through Bakong’s secure and innovative platform.
              </p>
            </div>

            <div className="mt-[28px] w-[210px] py-[14px] items-center justify-center flex  bg-[#F8F8F7] cursor-pointer">
              Download Bakong App
            </div>

            <div>
              <p className="text-[#F8F8F7] mt-[100px] font-sora font-regular text-body-large leading-[150%] tracking-extra-small">
                Bakong bridges traditional banking and digital <br />
                convenience for everyone. Scroll to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* experience screen */}
      <div className="w-full max-h-screen pt-[30px] pb-[300px] bg-[#310405] flex flex-col overflow-hidden">
        <div className="w-full text-[#F8F8F7]">
          <p className="font-sora text-center text-heading-1 uppercase font-semibold leading-[150%] tracking-extra-small">
            Experience Seamless Transactions <br /> with Bakong
          </p>
          <p className="font-sora text-center text-body-large font-regular leading-[150%] tracking-extra-small pt-[26px]">
            Designed to empower individuals and businesses, Bakong bridges
            traditional <br /> banking and digital convenience for everyone.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center pt-[43px] ">
          <img
            src="/img/interbank-transfer/brand-view1.png"
            className="w-[60%] h-[59vh]"
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
        className="w-full max-h-screen pb-[300px] pl-[80px] flex flex-col overflow-hidden
        bg-[url('/img/bg-payment.png')] bg-cover 
        text-black pt-[530px] font-sora 
        [&_*]:leading-[150%]
        [&_*]:tracking-[-0.02em]"
      >
        <p className="font-semibold text-[44px] uppercase">
          Payment For your <br /> every daily life
        </p>
        <p className="font-normal text-[16px] pt-[30px]">
          Designed to empower individuals and businesses, Bakong bridges
          traditional <br />
          banking and digital convenience for everyone.
        </p>
        <div className="flex gap-[22px]">
          <div className="w-[150px] h-[50px] bg-[#310405] text-[#F8F8F7] flex items-center justify-center">
            Create my card
          </div>
          <div className="w-[210px] h-[50px] bg-[#EFEEE91A] text-black border-[1px] border-[#310405] flex items-center justify-center">
            Create Bakong Account
          </div>
        </div>
      </div>
      {/* anyone card */}
      <div className="w-full px-[80px] max-h-screen overflow-hidden pb-[250px] flex ">
        <div className="flex flex-col justify-center w-[50%] h-[100vh]">
          <img src="/img/tg-view1.png" className="w-[90%] h-[60vh]" alt="" />
        </div>
        <div className="w-[50%] h-[100vh] flex flex-col justify-center overflow-hidden">
          <p className="font-sora uppercase text-heading-1 font-semibold leading-[150%] tracking-extra-small">
            Anyone can have <br /> debit card
          </p>
          <p className="font-sora font-regular text-body-large pt-[20px] tracking-extra-small">
            Designed to empower individuals and businesses, Bakong <br />
            bridges traditional banking and digital convenience for <br />
            everyone.
          </p>
          <div className="w-[101px] py-[15px] text-button font-regular leading-[150%] tracking-extra-small bg-[#D93744] text-[#F8F8F7] flex items-center justify-center mt-[36px]">
            Try it out
          </div>
        </div>
      </div>
      {/* recent blog */}
      <div className="w-full max-h-screen pb-[450px] bg-[#F1F1F1] px-[80px] pt-[80px] overflow-hidden">
        <div className="w-full max-h-screen flex gap-[8px] overflow-hidden">
            <img
              src="/img/ellipse.png"
              alt=""
              className="w-[14px] h-[14px] mt-[3px]"
            />
            <p className="font-sora font-normal text-[14px]">RECENT BLOGS</p>
          </div>
        <div className="w-full max-h-screen flex gap-[20px] pt-[50px] overflow-hidden">
          {[1,2,3].map((item, index) => (
          <div
            key={index}
            className="w-[33.33%] h-[50vh]"
          >
            <img src={`/img/blog/image${index+1}.png`} className="w-full" alt="" />
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
