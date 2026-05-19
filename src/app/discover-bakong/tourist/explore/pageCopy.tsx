import AnnouncementBar from "@/src/components/AnnouncementBar";
import Header from "@/src/components/Header";

export default function Explore() {
  return (
    <section>
      <AnnouncementBar />
      <div className="w-full pb-[50px] bg-[#f8f8f6] bg-cover">
        <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" />
        {/* container */}
        <div className="pl-[80px] pr-[80px] pt-[20px] font-sora flex">
          <div className="pt-[70px] bg-red w-[50%] pt-[140px]">
            <p className="uppercase font-semibold text-[20px] mb-[25px]">
              Explore Cambodia
            </p>
            <p className="uppercase font-semibold text-[50px] leading-[120%] tracking-[-0.02em] mb-[25px]">
              from temples <br /> to street food
            </p>
            <div className="font-normal text-[16px] leading-[150%] tracking-[-0.02em] max-w-[390px] text-justify">
              From ancient temples to buzzing night markets, discover the beauty of Cambodia—made even easier with seamless digital payments.
            </div>
            <div className="bg-[#D93744] w-[200px] h-[46px] flex flex-col justify-center mt-[30px]">
                <a href="#">
                    <p className="font-normal text-[16px] text-center text-white">Start Sending Money</p>
                </a>
            </div>
          </div>
          <div className="bg-red w-[50%]">
            <img
              src="/img/khqr/tg1.png"
              className="w-[630px] h-[700px] "
              alt=""
            />
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="w-full pb-[780px] bg-[url('/img/khqr/frame.png')] bg-cover">
        <p className="uppercase font-semibold text-[38px] text-white text-center pt-[60px] leading-[120%] tracking-[-0.02em]">Go Beyond the Guidebook</p>
        {/* w-[460px] mx-auto text-justify */}
        <p className="font-normal text-[16px] text-white pt-[20px] text-center leading-[150%] tracking-[-0.02em]">Wander into hidden cafés, artisan stalls, and scenic spots with confidence. <br /> Digital payments are accepted in more places than ever.</p>
      </div>
      {/* third section */}
      <div className="w-full h-full pt-[60px] pb-[100px] bg-[#f8f8f6]">
        <div className="text-[#300304]">
          <p className="text-center text-[32px] uppercase  font-semibold leading-[150%] tracking-[-0.02em]">
            Travel Light, Move Freely
          </p>
          <p className="text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[26px]">
            No need to carry wads of cash or hunt for ATMs. Just your phone, and you’re <br /> ready to explore.
          </p>
        </div>
        {/* first card */}
        <div className="flex items-center justify-center pt-[60px] relative">
          <img src="/img/bakong-merchant/brand-view1.png" className="w-[990px] h-[592px]" alt="" />
        </div>
        {/* second card */}
        <div className="pl-[100px] pr-[80px] pt-[230px] flex w-full">
          <div className="w-[49%] flex flex-col justify-center pt-[160px]">
            <p className="uppercase text-[32px] text-[#310405] font-semibold leading-[120%] tracking-[-0.02em]">Local Adventures, One <br /> Scan Away</p>
            <p className="text-[16px] text-[#310405] font-normal leading-[120%] tracking-[-0.02em] pt-[12px]">Hop on a tuk-tuk, grab street food, or buy souvenirs with a simple QR scan. <br /> Experience Cambodia like a local.</p>
             <div className="flex gap-[10px]">
              <div className="w-[200px] h-[50px] bg-[#3003040D] flex flex-col justify-center mt-[20px]">
                <a href="#">
                  <p className="text-[16px] text-center">ASEAN Countries</p>
                </a>
             </div>
             <div className="w-[100px] h-[50px] bg-[#3003040D] flex flex-col justify-center mt-[20px]">
                <a href="#">
                  <p className="text-[16px] text-center text-[#c8bebd]">Asian</p>
                </a>
             </div>
             </div>
          </div>
          <div className="w-[51%] h-[200px]">
            <img src="/img/bakong-merchant/brand-view2.png" className="w-[600px] h-[590px]" alt="" />
          </div>
        </div>
        {/* last section */}
        <div className="pl-[100px] pr-[80px] pt-[470px]">
            <p className="uppercase text-[32px] text-[#300304] font-semibold leading-[120%] tracking-[-0.02em] text-center">Discover More, Worry Less</p>
            <p className="text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[10px]">Spend more time seeing the sights and less time figuring out how to pay. Your digital wallet has you covered.</p>
            <div className="flex gap-[50px] mt-[50px]">
                <img src="/img/bakong-merchant/image2.png" className="w-[400px] h-[582px]" alt="" />
                <img src="/img/bakong-merchant/image3.png" className="w-[400px] h-[582px]" alt="" />
                <img src="/img/bakong-merchant/image4.png" className="w-[400px] h-[582px]" alt="" />
            </div>
        </div>
      </div>
    </section>
  );
}