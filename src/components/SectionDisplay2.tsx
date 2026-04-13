interface SectionDisplayProps {
  heading: string;
  description: string;
  bgImg: string
}
export default function SectionDisplay2({heading, description, bgImg}: SectionDisplayProps) {
  return (
   <div>
    {/* section display 2 */}
      <div className="w-full h-screen pb-[780px] bg-cover flex flex-col overflow-hidden pt-[75px]"
      style={{ backgroundImage: `url('${bgImg}')` }}>
        <p className="uppercase font-semibold text-heading-1 text-white text-center leading-[120%] tracking-extra-small">
          {heading}
        </p>
        {/* w-[460px] mx-auto text-justify */}
        <p className="font-regular text-body-large text-white pt-[20px] text-center leading-[150%] tracking-extra-small"
        dangerouslySetInnerHTML={{__html:description}}>
         
        </p>
      </div>
   </div>
    
  );
}
