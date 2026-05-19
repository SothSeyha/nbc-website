import AnnouncementBar from "@/src/components/AnnouncementBar";
import Header from "@/src/components/Header";

export default function InterbankTransfer() {
  return (
    <section>
      <AnnouncementBar />
      <div className="w-full pb-[50px] bg-[#f8f8f6] bg-cover">
        <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" />
        {/* container */}
        <div className="pl-[80px] pr-[80px] pt-[20px] font-sora flex">
          <div className="pt-[70px] bg-red w-[50%] pt-[140px]">
            <p className="uppercase font-semibold text-[20px] mb-[25px]">
              Interbank transfer
            </p>
            <p className="uppercase font-semibold text-[50px] leading-[120%] tracking-[-0.02em] mb-[25px]">
              Move Money <br /> Across Banks, <br /> Seamlessly
            </p>
            <div className="font-normal text-[16px] leading-[150%] tracking-[-0.02em] max-w-[390px] text-justify">
              Whether you’re managing daily sales or paying suppliers, interbank transfers through Bakong make it fast, secure, and simple—no matter where your accounts are.
            </div>
            <div className="bg-[#D93744] w-[200px] h-[46px] flex flex-col justify-center mt-[30px]">
                <a href="#">
                    <p className="font-normal text-[16px] text-center text-white">Start Sending Money</p>
                </a>
            </div>
          </div>
          <div className="bg-red w-[50%]">
            <img
              src="/img/card/tg1.png"
              className="w-[630px] h-[700px] "
              alt=""
            />
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="w-full pb-[780px] bg-[url('/img/card/frame.png')] bg-cover">
        <p className="uppercase font-semibold text-[38px] text-white text-center pt-[60px] leading-[120%] tracking-[-0.02em]">All Banks, One Network</p>
        {/* w-[460px] mx-auto text-justify */}
        <p className="font-normal text-[16px] text-white pt-[20px] text-center leading-[150%] tracking-[-0.02em]">Send and receive funds across different banks in Cambodia with ease. Bakong <br /> connects them all, so you can focus on business—not banking.</p>
      </div>
      {/* third section */}
      <div className="w-full h-full pt-[60px] pb-[100px] bg-[#f8f8f6]">
        <div className="text-[#300304]">
          <p className="text-center text-[32px] uppercase  font-semibold leading-[150%] tracking-[-0.02em]">
            Real-Time Transfers
          </p>
          <p className="text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[26px]">
            Money moves in seconds, not days. Your business can respond quickly, restock <br /> faster, and stay ahead.
          </p>
        </div>
        {/* first card */}
        <div className="flex items-center justify-center pt-[60px] relative">
          <img src="/img/interbank-transfer/brand-view1.png" className="w-[990px] h-[592px]" alt="" />
        </div>
        {/* second card */}
        <div className="pl-[100px] pr-[80px] pt-[230px] flex w-full">
          <div className="w-[49%] flex flex-col justify-center pt-[160px]">
            <p className="uppercase text-[32px] text-[#310405] font-semibold leading-[120%] tracking-[-0.02em]">Designed for Business Needs</p>
            <p className="text-[16px] text-[#310405] font-normal leading-[120%] tracking-[-0.02em] pt-[12px]">Track transfers, view history, and stay organized with tools built for merchants <br /> who need clarity and speed.</p>
             <div className="flex gap-[10px]">
              <div className="w-[200px] h-[50px] bg-[#3003040D] flex flex-col justify-center mt-[20px]">
                <a href="#">
                  <p className="text-[16px] text-center">Buy anything online</p>
                </a>
             </div>
             <div className="w-[200px] h-[50px] bg-[#3003040D] flex flex-col justify-center mt-[20px]">
                <a href="#">
                  <p className="text-[16px] text-center text-[#c8bebd]">Order food with card</p>
                </a>
             </div>
             </div>
          </div>
          <div className="w-[51%] h-[200px]">
            <img src="/img/interbank-transfer/brand-view2.png" className="w-[600px] h-[590px]" alt="" />
          </div>
        </div>
        {/* last section */}
        <div className="pl-[100px] pr-[80px] pt-[470px]">
            <p className="uppercase text-[32px] text-[#300304] font-semibold leading-[120%] tracking-[-0.02em] text-center">Need to send money between <br /> banks—fast?</p>
            <p className="text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[10px]">Managing business payments across multiple banks doesn’t have to be <br /> complicated. With Bakong, interbank transfers are quick, secure, and built for <br /> busy merchants.</p>
            <div className="flex gap-[50px] mt-[50px]">
                <img src="/img/interbank-transfer/image2.png" className="w-[400px] h-[582px]" alt="" />
                <img src="/img/interbank-transfer/image3.png" className="w-[400px] h-[582px]" alt="" />
                <img src="/img/interbank-transfer/image4.png" className="w-[400px] h-[582px]" alt="" />
            </div>
        </div>
      </div>
    </section>
  );
}