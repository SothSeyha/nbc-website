import AnnouncementBar from "@/src/components/AnnouncementBar";
import Header from "@/src/components/Header";

export default function Card() {
  return (
    <section>
      <AnnouncementBar />
      <div className="w-full pb-[50px] bg-[#f8f8f6] bg-cover">
        <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" />
        {/* container */}
        <div className="pl-[80px] pr-[80px] pt-[20px] font-sora flex">
          <div className="pt-[70px] bg-red w-[50%] pt-[140px]">
            <p className="uppercase font-semibold text-[20px] mb-[25px]">
              Debit cards
            </p>
            <p className="uppercase font-semibold text-[50px] leading-[120%] tracking-[-0.02em] mb-[25px]">
              Your Digital <br /> Wallet’s Best <br /> Friend
            </p>
            <div className="font-normal text-[16px] leading-[150%] tracking-[-0.02em] max-w-[390px] text-justify">
              Experience the convenience of a virtual card with Bakong.
              Instantly generate and use a secure digital card for all your
              online and in-app purchases—no need for a physical card.
            </div>
            <div className="bg-[#D93744] w-[160px] h-[46px] flex flex-col justify-center mt-[30px]">
              <a href="#">
                <p className="font-normal text-[14px] text-center text-white">
                  Start Sending Money
                </p>
              </a>
            </div>
          </div>
          <div className="bg-red w-[50%]">
            <img
              src="/img/card/tg1.svg"
              className="w-[630px] h-[700px] "
              alt=""
            />
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="w-full pb-[780px] bg-[url('/img/card/frame.png')] bg-cover">
        <p className="uppercase font-semibold text-[38px] text-white text-center pt-[60px] leading-[120%] tracking-[-0.02em]">
          Shop Safely Online
        </p>
        {/* w-[460px] mx-auto text-justify */}
        <p className="font-normal text-[16px] text-white pt-[20px] text-center leading-[150%] tracking-[-0.02em]">
          Protect your information with virtual card numbers that keep your
          personal <br /> details private while making secure payments.
        </p>
      </div>
      {/* third section */}
      <div className="w-full h-full pt-[60px] pb-[100px] bg-[#f8f8f6]">
        <div className="text-[#300304]">
          <p className="text-center text-[32px] uppercase  font-semibold leading-[150%] tracking-[-0.02em]">
            Control at Your Fingertips
          </p>
          <p className="text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[26px]">
            Easily freeze, unfreeze, or delete your virtual card whenever you
            need to. Stay in <br /> control of your spending with real-time
            transaction tracking.
          </p>
        </div>
        {/* first card */}
        {/* <div className="flex items-center justify-center pt-[60px] relative">
          <img src="/img/card/brand-view1.png" className="w-[990px] h-[592px]" alt="" />
        </div> */}
        <div className="w-full h-full pb-[30px] bg-[#f8f8f6]">
          <div className="flex items-center justify-center pt-[60px] relative">
            <div className="w-[290px] h-[46px] flex absolute top-[220px] right-[320px]">
              <div className="w-[46px] h-[46px] bg-[#310405]">
                <img
                  src="/img/arrow-icon.svg"
                  className="w-[46px] h-[46px]"
                  alt=""
                />
              </div>
              <div className="w-[230px] h-[46px] bg-[#FF4F3F] flex flex-col justify-center">
                <p className="font-sora font-normal text-[22px] text-white  uppercase">
                  Shopping Online
                </p>
              </div>
            </div>

            <img
              src="/img/card/brand-view1.svg"
              className="w-[411px] h-[592px]"
              alt=""
            />
            <div
              className="
              w-[300px] h-[160px] bg-[#BAF6E2] p-[16px] absolute bottom-[250px] left-[350px]
              font-sora
              [&_*]:leading-[150%]
              [&_*]:tracking-[-0.02em]
              pl-[24px] pt-[21px]"
            >
              <div className="flex pl-0">
                <img
                  src="/img/phone-number.png"
                  className="w-[48px] h-[48px] mt-[-4px]"
                  alt=""
                />
                <img src="/img/qr.png" className="w-[42px] h-[42px]" alt="" />
              </div>
              <p className="font-normal text-[24px]">
                Paid by KHQR Code <br /> or Bakong Network
              </p>
            </div>
            <div
              className="
              w-[260px] h-[150px] bg-[#DDF6B9] p-[16px] absolute bottom-[60px] right-[420px]
              font-sora
              [&_*]:leading-[150%]
              [&_*]:tracking-[-0.02em]
              pl-[24px] pt-[18px]"
            >
              <p className="font-normal text-[24px]">Bought Shirt</p>

              <p className="font-bold text-[32px]">៛ 267,000</p>

              <p className="font-normal text-[16px]">From DM Store, Taobao</p>
            </div>
          </div>
        </div>
        {/* second card */}
        <div className="pl-[100px] pr-[80px] pt-[230px] flex w-full">
          <div className="w-[49%] flex flex-col justify-center pt-[160px]">
            <p className="uppercase text-[32px] text-[#310405] font-semibold leading-[120%] tracking-[-0.02em]">
              Instant Access Anytime
            </p>
            <p className="text-[16px] text-[#310405] font-normal leading-[120%] tracking-[-0.02em] pt-[12px]">
              No waiting for deliveries! Your virtual card is ready to use as
              soon as you create it <br /> in the Bakong app.
            </p>
            <div className="flex gap-[10px]">
              <div className="w-[200px] h-[50px] bg-[#3003040D] flex flex-col justify-center mt-[20px]">
                <a href="#">
                  <p className="text-[16px] text-center">Buy anything online</p>
                </a>
              </div>
              <div className="w-[200px] h-[50px] bg-[#3003040D] flex flex-col justify-center mt-[20px]">
                <a href="#">
                  <p className="text-[16px] text-center text-[#c8bebd]">
                    Order food with card
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="w-[51%] h-[200px]">
            <img
              src="/img/card/brand-view2.png"
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
              src="/img/card/image2.png"
              className="w-[400px] h-[582px]"
              alt=""
            />
            <img
              src="/img/card/image3.png"
              className="w-[400px] h-[582px]"
              alt=""
            />
            <img
              src="/img/card/image4.png"
              className="w-[400px] h-[582px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
