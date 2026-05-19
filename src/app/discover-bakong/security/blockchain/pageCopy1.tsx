import AnnouncementBar from "@/src/components/AnnouncementBar";
import CardDisplay from "@/src/components/CardDisplay";
import Header from "@/src/components/Header";
import SectionDisplay1 from "@/src/components/SectionDisplay1";
import SectionDisplay2 from "@/src/components/SectionDisplay2";

export default function Transfer() {
  return (
    <section>
      {/* first section */}
      <SectionDisplay1
        title={"Blockchain Payment"}
        display={"Powered by <br /> National Bank <br /> of Cambodia"}
        description={
          "KHQR is a standardized QR code payment system introduced by the National Bank of Cambodia to ensure seamless, secure payments nationwide."
        }
        btnText={"Start Sending Money"}
        btnHref={"#"}
        imgSrc={"/img/transfer/point.png"}
        imgAlt={""}
      />
      {/* second section */}
      <SectionDisplay2
        heading={"Send Money, Your Way"}
        description={
          " No matter the time or place, Bakong makes transferring money quick and stress- <br /> free. Whether it’s a gift, a bill, or a loan repayment, your money moves securely <br /> and instantly."
        }
        bgImg={"/img/transfer/frame.png"}
      />

      {/* third section */}
      <CardDisplay
        heading1={"Freedom to Send Anywhere"}
        description1={
          "With Bakong, transfers are seamless. Share the convenience of fast, secure <br /> transactions with family, friends, and businesses with just a few taps."
        }
        img1={"/img/interbank-transfer/brand-view1.png"}
        heading2={"Feel close to home"}
        description2={
          "Have a home in another country? Whether it’s a vacay spot or investment <br /> property, easily keep up with your loan payments (or any bills) from provinces."
        }
        btnText1={"ASEAN Countries"}
        btnHref1={"#"}
        btnText2={"Provinces"}
        btnHref2={"#"}
        img2={"/img/transfer/brand-view2.png"}
        imgCard={[1, 2, 3]}
      />
    </section>
  );
}