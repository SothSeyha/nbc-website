interface SectionDisplayProps {
  heading: string;
  description: string;
  bgImg: string;
}
export default function SectionDisplay2({
  heading,
  description,
  bgImg,
}: SectionDisplayProps) {
  return (
    <div>
      {/* section display 2 */}
      <div
        className="w-full min-h-screen pb-[200px] md:pb-[400px] lg:pb-[780px] px-6 md:px-12 lg:px-[80px] bg-cover bg-no-repeat bg-[center_70%] flex flex-col overflow-hidden pt-[75px] relative"
        style={{ backgroundImage: `url('${bgImg}')` }}
      >
        {/* Gradient overlay — mobile only */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background: `linear-gradient(to bottom, #3c060b 40%, transparent 70%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <p className="uppercase font-semibold text-[35px] lg:text-heading-1 text-white text-center leading-[120%] tracking-extra-small">
            {heading}
          </p>
          <p
            className="font-regular text-body lg:text-body-large text-white pt-[20px] text-center leading-[150%] tracking-extra-small"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
}
