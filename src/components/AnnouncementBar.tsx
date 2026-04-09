export default function AnnouncementBar() {
  return (
    <nav>
      <div className="announcementBar w-full py-[10px] bg-[#310405] flex flex-col items-center justify-center">
        <label
          htmlFor=""
          className="text-[#F8F8F7] text-body-large font-regular font-sora leading-[150%] tracking-extra-small text-center"
        >
          Important Announcement : Bakong A/S has decided to cease issuance of
          its stablecoins (EEUR, ECHF, ENOK, ESEK & EDKK) Click here to learn
          more .
        </label>
      </div>
    </nav>
  );
}
