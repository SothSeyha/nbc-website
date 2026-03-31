import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <div className="announcementBar w-full h-[46px] bg-[#310405] flex items-center justify-center">
        <label
          htmlFor=""
          className="text-[#F8F8F7] text-[16px] font-sora font-normal leading-[150%] tracking-[-0.02em]"
        >
          Important Announcement : Bakong A/S has decided to cease issuance of
          its stablecoins (EEUR, ECHF, ENOK, ESEK & EDKK) Click here to learn
          more .
        </label>
      </div>
      {/* <div className="w-full h-[890px] bg-[url('/bg/a.png')] bg-cover"> */}
      <div className="w-full pb-[60px] bg-[url('/bg/a.png')] bg-cover">
        <div className="pl-[80px] pr-[80px] pt-[45px]">
          {/* header */}

          <div className="flex">
            <div className="w-[40%]">
              <img src="/img/bakong-logo.svg" alt="" />
            </div>
            <div className="w-[60%] flex">
              <ul className="flex items-center gap-[32px] text-[#F8F8F7] text-[16px] font-sora font-normal leading-[150%] tracking-[-0.02em]">
                <li>
                  <a href="#">Discover Bakong</a>
                </li>
                <li>
                  <a href="#">Developer</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </div>
          </div>
          {/* header */}

          {/* <div className="pt-[80px] font-sora">
            <div className="text-[#F8F8F7]">
              <p className="text-[55px] font-[600] leading-[150%] tracking-[-0.02em]">
                Seamless Interbank <br />
                Transfers, <br />
                Local to Global
              </p>
              <p className="pt-[30px] leading-[150%] tracking-[-0.02em]">
                Effortlessly connect with financial institutions worldwide{" "}
                <br />
                through Bakong’s secure and innovative platform.
              </p>
            </div>
      
            <div className="mt-[28px] w-[210px] h-[50px] items-center justify-center flex  bg-[#F8F8F7] cursor-pointer">Download App</div>
            
            <div>
              <p className="text-[#F8F8F7] pt-[220px] font-sora leading-[150%] tracking-[-0.02em]">Bakong bridges traditional banking and digital <br />convenience for everyone. Scroll to learn more.</p>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
