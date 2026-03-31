import AnnouncementBar from "@/src/components/AnnouncementBar";
import Header from "@/src/components/Header";

export default function Khqr() {
  return (
    <section>
      <AnnouncementBar />
      <div className="w-full pb-[50px] bg-[#f8f8f6] bg-cover">
        <Header logoSrc="/img/bakong-logo-red.svg" textColor="text-[#310405]" />
        {/* container */}
        <div className="pl-[80px] pr-[80px] pt-[20px] font-sora flex">
          <div className="pt-[70px] bg-red w-[50%] pt-[140px]">
            <p className="uppercase font-semibold text-[20px] mb-[25px]">
              Link Account
            </p>
            <p className="uppercase font-semibold text-[50px] leading-[120%] tracking-[-0.02em] mb-[25px]">
              All Your <br /> Accounts in <br /> One Place
            </p>
            <div className="font-normal text-[16px] leading-[150%] tracking-[-0.02em] max-w-[390px] text-justify">
              Simplify financial management by linking all your bank accounts to Bakong. View balances, transfer money, and manage everything from a single dashboard.
            </div>
            <div className="bg-[#D93744] w-[200px] h-[46px] flex flex-col justify-center mt-[30px]">
                <a href="#">
                    <p className="font-normal text-[16px] text-center text-white">Start Sending Money</p>
                </a>
            </div>
          </div>
          <div className="bg-red w-[50%]">
            <img
              src="/img/link-acc/tg1.png"
              className="w-[630px] h-[700px] "
              alt=""
            />
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="w-full pb-[780px] bg-[url('/img/link-acc/frame.png')] bg-cover">
        <p className="uppercase font-semibold text-[38px] text-white text-center pt-[60px] leading-[120%] tracking-[-0.02em]">One Platform, Many Banks</p>
        {/* w-[460px] mx-auto text-justify */}
        <p className="font-normal text-[16px] text-white pt-[20px] text-center leading-[150%] tracking-[-0.02em]">Link multiple accounts to Bakong and move money between them effortlessly, <br /> without switching apps.</p>
      </div>
      {/* third section */}
      <div className="w-full h-full pt-[60px] pb-[100px] bg-[#f8f8f6]">
        <div className="text-[#300304]">
          <p className="text-center text-[32px] uppercase  font-semibold leading-[150%] tracking-[-0.02em]">
            Simplify Your Finances
          </p>
          <p className="text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[26px]">
            Bring all your accounts together in one seamless view. Track, manage, and <br /> transfer effortlessly—no more switching between apps.
          </p>
        </div>
        {/* first card */}
        <div className="flex items-center justify-center pt-[60px] pl-[30px] relative">
          <img src="/img/link-acc/brand-view1.png" className="w-[980px] h-[592px]" alt="" />
        </div>
        {/* second card */}
        <div className="pl-[100px] pr-[80px] pt-[230px] flex w-full">
          <div className="w-[49%] flex flex-col justify-center pt-[160px]">
            <p className="uppercase text-[32px] text-[#310405] font-semibold leading-[120%] tracking-[-0.02em]">Manage Everything, <br /> Effortlessly</p>
            <p className="text-[16px] text-[#310405] font-normal leading-[120%] tracking-[-0.02em] pt-[12px]">Why juggle multiple apps when you can have everything in one? Stay on top of all <br /> your accounts with ease, all in one place.</p>
             <div className="flex gap-[10px]">
              <div className="w-[160px] h-[50px] bg-[#3003040D] flex flex-col justify-center mt-[20px]">
                <a href="#">
                  <p className="text-[14px] text-center">Manage my money</p>
                </a>
             </div>
             <div className="w-[150px] h-[50px] bg-[#3003040D] flex flex-col justify-center mt-[20px]">
                <a href="#">
                  <p className="text-[14px] text-center text-[#c8bebd]">Transfer to accounts</p>
                </a>
             </div>
             </div>
          </div>
          <div className="w-[51%] h-[200px]">
            <img src="/img/link-acc/brand-view2.png" className="w-[600px] h-[590px]" alt="" />
          </div>
        </div>
        {/* last section */}
        <div className="pl-[100px] pr-[80px] pt-[470px]">
            <p className="uppercase text-[32px] text-[#300304] font-semibold leading-[120%] tracking-[-0.02em] text-center">Your Financial Hub</p>
            <p className="text-center text-[16px] font-normal leading-[150%] tracking-[-0.02em] pt-[10px]">One app, all your accounts. Organize your finances with ease and stay in control— <br /> no more clutter, just simplicity at your fingertips.</p>
            <div className="flex gap-[50px] mt-[50px]">
                <img src="/img/link-acc/image2.png" className="w-[400px] h-[582px]" alt="" />
                <img src="/img/link-acc/image3.png" className="w-[400px] h-[582px]" alt="" />
                <img src="/img/link-acc/image4.png" className="w-[400px] h-[582px]" alt="" />
            </div>
        </div>
      </div>
    </section>
  );
}