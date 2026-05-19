import AnnouncementBar from "@/src/components/AnnouncementBar";
import Header from "@/src/components/Header";

export default function Blockchain() {
  return (
    <section>
      <AnnouncementBar />
      <div className="w-full pb-[50px] bg-[#f8f8f6] bg-cover">
        <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" />
        {/* container */}
        <div className="pl-[80px] pr-[80px] pt-[20px] font-sora flex">
          <div className="pt-[70px] bg-red w-[50%] pt-[140px]">
            <p className="uppercase font-semibold text-[20px] mb-[25px]">
              Blockchain Payment
            </p>
            <p className="uppercase font-semibold text-[50px] leading-[120%] tracking-[-0.02em] mb-[25px]">
              Powered by <br /> National Bank <br /> of Cambodia
            </p>
            <div className="font-normal text-[16px] leading-[150%] tracking-[-0.02em] max-w-[390px] text-justify">
              KHQR is a standardized QR code payment system introduced by the National Bank of Cambodia to ensure seamless, secure payments nationwide.
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
        <p className="uppercase font-semibold text-[38px] text-white text-center pt-[60px] leading-[120%] tracking-[-0.02em]">Regulated for Your Safety</p>
        {/* w-[460px] mx-auto text-justify */}
        <p className="font-normal text-[16px] text-white pt-[20px] text-center leading-[150%] tracking-[-0.02em]">All participating banks, e-wallets, and blockchain providers operate under <br /> Cambodian financial regulations to protect your funds and data.</p>
      </div>
      {/* third section */}
      <div className="w-full h-full pt-[60px] pb-[100px] bg-[#f8f8f6]">
        <div className="text-[#300304]">
          <p className="text-center text-[32px] uppercase  font-semibold leading-[150%] tracking-[-0.02em]">
            Supporting Financial Inclusion
          </p>
          <p className="text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[26px]">
            Digital payments aren’t just convenient—they help bring more Cambodians into <br /> the formal economy, aligning with national development goals.
          </p>
        </div>
        {/* first card */}
        <div className="flex items-center justify-center pt-[60px] relative">
          <img src="/img/scan-pay/brand-view1.png" className="w-[990px] h-[592px]" alt="" />
        </div>
        {/* second card */}
        <div className="pl-[100px] pr-[80px] pt-[230px] flex w-full">
          <div className="w-[49%] flex flex-col justify-center pt-[160px]">
            <p className="uppercase text-[32px] text-[#310405] font-semibold leading-[120%] tracking-[-0.02em]">Endorsed by Local <br /> Authorities</p>
            <p className="text-[16px] text-[#310405] font-normal leading-[120%] tracking-[-0.02em] pt-[12px]">From public transport to government service payments, QR and digital options <br /> are now widely accepted with official support.</p>
             <div className="flex gap-[10px]">
              <div className="w-[160px] h-[50px] bg-[#3003040D] flex flex-col justify-center mt-[20px]">
                <a href="#">
                  <p className="text-[16px] text-center">Shop owner</p>
                </a>
             </div>
             <div className="w-[120px] h-[50px] bg-[#3003040D] flex flex-col justify-center mt-[20px]">
                <a href="#">
                  <p className="text-[16px] text-center text-[#c8bebd]">Restaurant</p>
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
            <p className="uppercase text-[32px] text-[#300304] font-semibold leading-[120%] tracking-[-0.02em] text-center">Built for the Future</p>
            <p className="text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[10px]">Cambodia is one of the first countries to launch a central bank digital currency <br /> (Bakong), reflecting its commitment to innovation and transparency.</p>
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
