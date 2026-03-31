import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <section>
      <AnnouncementBar />
      <div className="w-full pb-[60px] bg-[url('/bg/a.png')] bg-cover">
        <div className="">
          <Header logoSrc="/img/bakong-logo.svg" textColor="text-[#F8F8F7]" />
          {/* Container */}
          <div className="pl-[80px] pr-[80px] pt-[90px] font-sora">
            <div className="text-[#F8F8F7]">
              <p className="font-sora uppercase text-[55px] font-[600] leading-[120%] tracking-[-0.02em]">
                Seamless Interbank <br />
                Transfers, <br />
                Local to Global
              </p>
              <p className="font-sora pt-[45px] leading-[150%] tracking-[-0.02em]">
                Effortlessly connect with financial institutions worldwide
                <br />
                through Bakong’s secure and innovative platform.
              </p>
            </div>

            <div className="mt-[28px] w-[210px] h-[50px] items-center justify-center flex  bg-[#F8F8F7] cursor-pointer">
              Download Bakong App
            </div>

            <div>
              <p className="text-[#F8F8F7] pt-[220px] font-sora leading-[150%] tracking-[-0.02em]">
                Bakong bridges traditional banking and digital <br />
                convenience for everyone. Scroll to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* experience screen */}
      <div className="w-full h-full pt-[30px] pb-[100px] bg-[#310405]">
        <div className="text-[#F8F8F7]">
          <p className="font-sora text-center text-[40px] uppercase  font-semibold leading-[150%] tracking-[-0.02em]">
            Experience Seamless Transactions <br /> with Bakong
          </p>
          <p className="font-sora text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[26px]">
            Designed to empower individuals and businesses, Bakong bridges
            traditional <br /> banking and digital convenience for everyone.
          </p>
        </div>
        <div className="flex items-center justify-center pt-[60px] relative">
          <img src="/img/card.png" className="w-[411px] h-[592px]" alt="" />
          <div
            className="
              w-[300px] h-[198px] bg-[#BAF6E2] p-[16px] absolute bottom-[150px] left-[310px]
              font-sora
              [&_*]:leading-[150%]
              [&_*]:tracking-[-0.02em]
              pl-[24px] pt-[28px]"
          >
            <p className="font-sora font-normal text-[24px]">
              Transfer to parents at <br /> Province
            </p>

            <p className="font-sora font-bold text-[38px]">៛ 200,000</p>

            <p className="font-sora font-normal text-[16px]">at Preah Vihear</p>
          </div>
          <div
            className="
              w-[300px] h-[172px] bg-[#DDF6B9] p-[16px] absolute bottom-[60px] right-[320px]
              font-sora
              [&_*]:leading-[150%]
              [&_*]:tracking-[-0.02em]
              pl-[24px] pt-[28px]"
          >
            <div className="flex pl-0">
              <img src="/img/qr.png" className="w-[48px] h-[48px]" alt="" />
              <img
                src="/img/phone-number.png"
                className="w-[48px] h-[48px]"
                alt=""
              />
            </div>
            <p className="font-sora font-normal text-[24px]">
              By Phone Number or <br /> KHQR Code
            </p>
          </div>
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
        className="w-full h-full pb-[60px] pl-[80px]
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
        <div className="flex gap-[22px] pt-[50px]">
          <div className="w-[150px] h-[50px] bg-[#310405] text-[#F8F8F7] flex items-center justify-center">
            Create my card
          </div>
          <div className="w-[210px] h-[50px] bg-[#EFEEE91A] text-black border-[1px] border-[#310405] flex items-center justify-center">
            Create Bakong Account
          </div>
        </div>
      </div>
      {/* anyone card */}
      <div className="w-full h-full pb-[20px] pt-[30px] bg-white flex gap-[50px] ">
        <div className="flex flex-col pt-[60px] pl-[210px] relative">
          <img src="/img/card.png" className="w-[411px] h-[592px]" alt="" />
          <div
            className="
              w-[300px] h-[198px] bg-[#BAF6E2] p-[16px] absolute top-[108px] left-[85px]
              font-sora
              [&_*]:leading-[150%]
              [&_*]:tracking-[-0.02em]
              pl-[24px] pt-[28px]"
          >
            <p className="font-sora font-normal text-[24px]">
              Transfer to parents at <br /> Province
            </p>
            <p className="font-sora font-bold text-[32px]">៛ 200,000</p>
            <p className="font-sora font-normal text-[16px]">at Preah Vihear</p>
          </div>
          <div
            className="
              w-[300px] h-[172px] bg-[#DDF6B9] p-[16px] absolute bottom-[52px] left-[480px]
              font-sora
              [&_*]:leading-[150%]
              [&_*]:tracking-[-0.02em]
              pl-[24px] pt-[28px]"
          >
            <div className="flex pl-0">
              <img src="/img/qr.png" className="w-[48px] h-[48px]" alt="" />
              <img
                src="/img/phone-number.png"
                className="w-[48px] h-[48px]"
                alt=""
              />
            </div>
            <p className="font-sora font-normal text-[24px] pt-[10px]">
              By Phone Number or <br /> KHQR Code
            </p>
          </div>
        </div>
        <div className="pt-[28px] pl-[230px] pt-[206px]">
          <p className="font-sora uppercase text-[44px] font-semibold leading-[150%] tracking-[-0.02em]">
            Anyone can have <br /> debit card
          </p>
          <p className="font-sora font-normal text-[16px] pt-[20px]">
            Designed to empower individuals and businesses, Bakong <br />{" "}
            bridges traditional banking and digital convenience for <br />{" "}
            everyone.
          </p>
          <div className="w-[101px] h-[50px] text-[16px] bg-[#D93744] text-[#F8F8F7] flex items-center justify-center mt-[36px]">
            Try it out
          </div>
        </div>
      </div>
      {/* recent blog */}
      <div className="w-full h-full pb-[230px] bg-[#F1F1F1] pl-[80px] pt-[50px]">
        <div className="flex gap-[8px]">
          <img
            src="/img/ellipse.png"
            alt=""
            className="w-[14px] h-[14px] mt-[3px]"
          />
          <p className="font-sora font-normal text-[14px]">RECENT BLOGS</p>
        </div>
        <div className=" flex gap-[23px]">
          {/* blog div1 */}
          <div className="mt-[60px] w-[400px] h-[399px] flex flex-col">
            <img
              src="/img/blog/image1.png"
              className="w-[450px] h-[230px]"
              alt=""
            />
            <p className="font-sora font-semibold text-[20px] pt-[30px]">
              You can enjoy immediate finality and settlement, as well as
              near-zero transaction fees.
            </p>
            <div className="mt-auto pt-[23px] flex gap-[14px]">
              <p className="font-sora font-normal text-[14px]">Published at</p>
              <p className="font-sora font-semibold text-[14px]">
                12 August 2024 | 12:34
              </p>
            </div>
          </div>
          {/* blog div2 */}
          <div className="mt-[60px] w-[400px] h-[399px] flex flex-col">
            <img
              src="/img/blog/image2.png"
              className="w-[450px] h-[230px]"
              alt=""
            />
            <p className="font-semibold text-[18px] pt-[30px]">
              Join us in revolutionising the way we send money
            </p>
            <div className="mt-auto pt-[23px] flex gap-[12px]">
              <p className="font-normal text-[12px]">Published at</p>
              <p className="font-semibold text-[12px]">
                12 August 2024 | 12:34
              </p>
            </div>
          </div>
          {/* blog div3 */}
          <div className="mt-[60px] w-[400px] h-[399px] flex flex-col">
            <img
              src="/img/blog/image3.png"
              className="w-[450px] h-[230px]"
              alt=""
            />
            <p className="font-semibold text-[18px] pt-[30px]">
              Hola Komo esta
            </p>
            <div className="mt-auto pt-[23px] flex gap-[12px]">
              <p className="font-normal text-[12px]">Published at</p>
              <p className="font-semibold text-[12px]">
                12 August 2024 | 12:34
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
