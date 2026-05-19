import AnnouncementBar from "@/src/components/AnnouncementBar";
import Header from "@/src/components/Header";

export default function ReceiveKhqr() {
  return (
    <section>
      <AnnouncementBar />
      <div className="w-full pb-[50px] bg-[#f8f8f6] bg-cover">
        <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" />
        {/* container */}
        <div className="pl-[80px] pr-[80px] pt-[20px] font-sora flex">
          <div className="pt-[70px] bg-red w-[50%] pt-[140px]">
            <p className="uppercase font-semibold text-[20px] mb-[25px]">
              Receive money via KHQR
            </p>
            <p className="uppercase font-semibold text-[50px] leading-[120%] tracking-[-0.02em] mb-[25px]">
              Get paid faster. <br /> Smarter. <br /> Simpler.
            </p>
            <div className="font-normal text-[16px] leading-[150%] tracking-[-0.02em] max-w-[390px] text-justify">
              Skip the cash and awkward account numbers. With KHQR, receiving money is as easy as scan, send, done.
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
        <p className="uppercase font-semibold text-[38px] text-white text-center pt-[60px] leading-[120%] tracking-[-0.02em]">One QR, Endless Possibilities</p>
        {/* w-[460px] mx-auto text-justify */}
        <p className="font-normal text-[16px] text-white pt-[20px] text-center leading-[150%] tracking-[-0.02em]">KHQR works with all major banks in Cambodia. Just share your QR code, and <br /> anyone can send you money—no need for account numbers or extra steps.</p>
      </div>
      {/* third section */}
      <div className="w-full h-full pt-[60px] pb-[100px] bg-[#f8f8f6]">
        <div className="text-[#300304]">
          <p className="text-center text-[32px] uppercase  font-semibold leading-[150%] tracking-[-0.02em]">
            Fast. Seamless. Reliable.
          </p>
          <p className="text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[26px]">
            The moment they scan, the money’s on its way. You’ll get notified in real-time, so <br /> you’re never left guessing.
          </p>
        </div>
        {/* first card */}
        <div className="flex items-center justify-center pt-[60px] relative">
          <img src="/img/receive-khqr/brand-view1.png" className="w-[990px] h-[592px]" alt="" />
        </div>
        {/* second card */}
        <div className="pl-[100px] pr-[80px] pt-[230px] flex w-full">
          <div className="w-[49%] flex flex-col justify-center pt-[160px]">
            <p className="uppercase text-[32px] text-[#310405] font-semibold leading-[120%] tracking-[-0.02em]">Built for Everyone</p>
            <p className="text-[16px] text-[#310405] font-normal leading-[120%] tracking-[-0.02em] pt-[12px]">Whether you’re a small shop owner, a freelancer, or just splitting lunch with <br /> friends, KHQR makes receiving money fast, safe, and easy to understand.</p>
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
            <p className="uppercase text-[32px] text-[#300304] font-semibold leading-[120%] tracking-[-0.02em] text-center">Want to Know When You’re Paid?</p>
            <p className="text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[10px]">You’ll know the moment it happens. Every time someone sends you money via <br /> KHQR, you get real-time notifications and a clear record of the transaction. No <br /> delays, no doubts—just full peace of mind.</p>
            <div className="flex gap-[50px] mt-[50px]">
                <img src="/img/receive-khqr/image2.png" className="w-[400px] h-[582px]" alt="" />
                <img src="/img/receive-khqr/image3.png" className="w-[400px] h-[582px]" alt="" />
                <img src="/img/receive-khqr/image4.png" className="w-[400px] h-[582px]" alt="" />
            </div>
        </div>
      </div>
    </section>
  );
}
