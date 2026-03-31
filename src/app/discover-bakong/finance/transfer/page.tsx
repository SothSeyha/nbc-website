import AnnouncementBar from "@/src/components/AnnouncementBar";
import Header from "@/src/components/Header";

export default function Transfer() {
  return (
    <section>
      <AnnouncementBar />
      <div className="w-full pb-[50px] bg-[#f8f8f6] bg-cover">
        <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" />
        {/* container */}
        <div className="pl-[80px] pr-[80px] pt-[20px] font-sora flex">
          <div className="pt-[70px] bg-red w-[50%] pt-[140px]">
            <p className="uppercase font-semibold text-[20px] mb-[25px]">
              Transfer
            </p>
            <p className="uppercase font-semibold text-[50px] leading-[120%] tracking-[-0.02em] mb-[25px]">
              Your Digital <br /> Wallet’s Best <br /> Friend
            </p>
            <div className="font-normal text-[16px] leading-[150%] tracking-[-0.02em] max-w-[390px] text-justify">
              Experience the convenience of a virtual card with Bakong.
              Instantly generate and use a secure digital card for all your
              online and in-app purchases—no need for a physical card.
            </div>
            <div className="bg-[#D93744] w-[210px] h-[46px] flex flex-col justify-center mt-[30px]">
              <a href="#">
                <p className="font-normal text-[16px] text-center text-white">
                  Start Sending Money
                </p>
              </a>
            </div>
          </div>
          <div className="bg-red w-[50%]">
            <img
              src="/img/transfer/point.png"
              className="w-[630px] h-[700px] "
              alt=""
            />
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="w-full pb-[780px] bg-[url('/img/transfer/frame.png')] bg-cover">
        <p className="uppercase font-semibold text-[38px] text-white text-center pt-[60px] leading-[120%] tracking-[-0.02em]">
          Send Money, Your Way
        </p>
        {/* w-[460px] mx-auto text-justify */}
        <p className="font-normal text-[16px] text-white pt-[20px] text-center leading-[150%] tracking-[-0.02em]">
          No matter the time or place, Bakong makes transferring money quick and
          stress- <br />
          free. Whether it’s a gift, a bill, or a loan repayment, your money
          moves securely <br /> and instantly.
        </p>
      </div>
      {/* third section */}
      <div className="w-full h-full pt-[60px] pb-[100px] bg-[#f8f8f6]">
        <div className="text-[#300304]">
          <p className="text-center text-[32px] uppercase  font-semibold leading-[150%] tracking-[-0.02em]">
            Freedom to Send Anywhere
          </p>
          <p className="text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[26px]">
            With Bakong, transfers are seamless. Share the convenience of fast,
            secure <br /> transactions with family, friends, and businesses with
            just a few taps.
          </p>
        </div>
        {/* first card */}
        {/* <div className="flex items-center justify-center pt-[60px] relative">
          <img src="/img/transfer/brand-view1.png" className="w-[990px] h-[592px]" alt="" />
        </div> */}
        <div className="w-full h-full pb-[30px] bg-[#f8f8f6]">
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
              <p className="font-normal text-[24px]">
                Transfer to parents at <br /> Province
              </p>

              <p className="font-bold text-[32px]">៛ 200,000</p>

              <p className="font-normal text-[16px]">at Preah Vihear</p>
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
                <img src="/img/qr.png" className="w-[42px] h-[42px]" alt="" />
                <img
                  src="/img/phone-number.png"
                  className="w-[48px] h-[48px] mt-[-4px]"
                  alt=""
                />
              </div>
              <p className="font-normal text-[24px]">
                By Phone Number or <br /> KHQR Code
              </p>
            </div>
          </div>
        </div>
        {/* second card */}
        <div className="pl-[100px] pr-[80px] pt-[230px] flex w-full">
          <div className="w-[49%] flex flex-col justify-center pt-[160px]">
            <p className="uppercase text-[32px] text-[#310405] font-semibold leading-[120%] tracking-[-0.02em]">
              Feel close to home
            </p>
            <p className="text-[16px] text-[#310405] font-normal leading-[120%] tracking-[-0.02em] pt-[12px]">
              Have a home in another country? Whether it’s a vacay spot or
              investment <br /> property, easily keep up with your loan payments
              (or any bills) from provinces.
            </p>
            <div className="flex gap-[10px]">
              <div className="w-[160px] h-[50px] bg-[#3003040D] flex flex-col justify-center mt-[20px]">
                <a href="#">
                  <p className="text-[14px] text-center">ASEAN Countries</p>
                </a>
              </div>
              <div className="w-[120px] h-[50px] bg-[#3003040D] flex flex-col justify-center mt-[20px]">
                <a href="#">
                  <p className="text-[14px] text-center text-[#c8bebd]">
                    Provinces
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="w-[51%] h-[200px]">
            <img
              src="/img/transfer/brand-view2.png"
              className="w-[600px] h-[590px]"
              alt=""
            />
          </div>
        </div>
        {/* last section */}
        <div className="pl-[100px] pr-[80px] pt-[470px]">
          <p className="uppercase text-[32px] text-[#300304] font-semibold leading-[120%] tracking-[-0.02em] text-center">
            Sending gifts? Make it swift
          </p>
          <p className="text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[10px]">
            Make their day with something you know they won't throw away. And
            customise <br /> it no matter what you're celebrating.
          </p>
          <div className="flex gap-[50px] mt-[50px]">
            <img
              src="/img/transfer/image2.png"
              className="w-[400px] h-[582px]"
              alt=""
            />
            <img
              src="/img/transfer/image3.png"
              className="w-[400px] h-[582px]"
              alt=""
            />
            <img
              src="/img/transfer/image4.png"
              className="w-[400px] h-[582px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
