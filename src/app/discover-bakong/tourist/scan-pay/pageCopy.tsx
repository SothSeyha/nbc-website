import AnnouncementBar from "@/src/components/AnnouncementBar";
import Header from "@/src/components/Header";

export default function ScanPay() {
  return (
    <section>
      <AnnouncementBar />
      <div className="w-full pb-[50px] bg-[#f8f8f6] bg-cover">
        <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" />
        {/* container */}
        <div className="pl-[80px] pr-[80px] pt-[20px] font-sora flex">
          <div className="pt-[70px] bg-red w-[50%] pt-[140px]">
            <p className="uppercase font-semibold text-[20px] mb-[25px]">
              Scan Pay in Cambodia
            </p>
            <p className="uppercase font-semibold text-[50px] leading-[120%] tracking-[-0.02em] mb-[25px]">
              Cambodian <br /> payment made <br /> easy
            </p>
            <div className="font-normal text-[16px] leading-[150%] tracking-[-0.02em] max-w-[390px] text-justify">
              Effortless payments with just a tap. Whether you’re a traveler or a local, enjoy smooth, secure transactions across the country.
            </div>
            <div className="bg-[#D93744] w-[200px] h-[46px] flex flex-col justify-center mt-[30px]">
                <a href="#">
                    <p className="font-normal text-[16px] text-center text-white">Start Sending Money</p>
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
        <p className="uppercase font-semibold text-[38px] text-white text-center pt-[60px] leading-[120%] tracking-[-0.02em]">Skip the Cash Hassle</p>
        {/* w-[460px] mx-auto text-justify */}
        <p className="font-normal text-[16px] text-white pt-[20px] text-center leading-[150%] tracking-[-0.02em]">No need to carry bulky bills. Just scan a QR code and pay instantly from your <br /> mobile.</p>
      </div>
      {/* third section */}
      <div className="w-full h-full pt-[60px] pb-[100px] bg-[#f8f8f6]">
        <div className="text-[#300304]">
          <p className="text-center text-[32px] uppercase  font-semibold leading-[150%] tracking-[-0.02em]">
            Works Everywhere
          </p>
          <p className="text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[26px]">
            From city malls to countryside markets, KHQR and mobile payments are widely accepted across Cambodia.
          </p>
        </div>
        {/* first card */}
        <div className="flex items-center justify-center pt-[60px] relative">
          <img src="/img/scan-pay/brand-view1.png" className="w-[990px] h-[592px]" alt="" />
        </div>
        {/* second card */}
        <div className="pl-[100px] pr-[80px] pt-[230px] flex w-full">
          <div className="w-[49%] flex flex-col justify-center pt-[160px]">
            <p className="uppercase text-[32px] text-[#310405] font-semibold leading-[120%] tracking-[-0.02em]">Works Everywhere</p>
            <p className="text-[14px] text-[#310405] font-normal leading-[120%] tracking-[-0.02em] pt-[12px]">From city malls to countryside markets, KHQR and mobile payments are widely <br /> accepted across Cambodia.</p>
             <div className="flex gap-[10px]">
              <div className="w-[160px] h-[50px] bg-[#3003040D] flex flex-col justify-center mt-[20px]">
                <a href="#">
                  <p className="text-[14px] text-center">Shop owner</p>
                </a>
             </div>
             <div className="w-[120px] h-[50px] bg-[#3003040D] flex flex-col justify-center mt-[20px]">
                <a href="#">
                  <p className="text-[14px] text-center text-[#c8bebd]">Restaurant</p>
                </a>
             </div>
             </div>
          </div>
          <div className="w-[51%] h-[200px]">
            <img src="/img/receive-khqr/brand-view2.png" className="w-[600px] h-[590px]" alt="" />
          </div>
        </div>
        {/* last section */}
        <div className="pl-[100px] pr-[80px] pt-[470px]">
            <p className="uppercase text-[32px] text-[#300304] font-semibold leading-[120%] tracking-[-0.02em] text-center">Sending gifts? Make it swift</p>
            <p className="text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[10px]">Make their day with something you know they won't throw away. And customise <br /> it no matter what you're celebrating.</p>
            <div className="flex gap-[50px] mt-[50px]">
                <img src="/img/transfer/image2.png" className="w-[400px] h-[582px]" alt="" />
                <img src="/img/transfer/image3.png" className="w-[400px] h-[582px]" alt="" />
                <img src="/img/transfer/image4.png" className="w-[400px] h-[582px]" alt="" />
            </div>
        </div>
      </div>
    </section>
  );
}
