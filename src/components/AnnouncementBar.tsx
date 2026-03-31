export default function AnnouncementBar() {
  return (
    <nav>
      <div className="announcementBar w-full h-[50px] bg-[#310405] flex items-center justify-center">
        <label
          htmlFor=""
          className="text-[#F8F8F7] text-[16px] font-sora font-normal leading-[150%] tracking-[-0.02em]"
        >
          Important Announcement : Bakong A/S has decided to cease issuance of
          its stablecoins (EEUR, ECHF, ENOK, ESEK & EDKK) Click here to learn
          more .
        </label>
      </div>
    </nav>
  );
}
