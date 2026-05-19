import AnnouncementBar from "@/src/components/AnnouncementBar";
import CardDisplay from "@/src/components/CardDisplay";
import Header from "@/src/components/Header";
import SectionDisplay1 from "@/src/components/SectionDisplay1";
import SectionDisplay2 from "@/src/components/SectionDisplay2";

export default function ReceiveKhqr() {
  return (
    <section>
      {/* first section */}
      <SectionDisplay1
        title={"Receive money via KHQR"}
        display={"Get paid faster. <br /> Smarter. <br /> Simpler."}
        description={
          " Skip the cash and awkward account numbers. With KHQR, receiving money is as easy as scan, send, done."
        }
        btnText={"Start Sending Mone"}
        btnHref={"#"}
        imgSrc={"/img/transfer/point.png"}
        imgAlt={""}
      />
      {/* second section */}
      <SectionDisplay2
        heading={"One Platform, Many Banks"}
        description={
          "Link multiple accounts to Bakong and move money between them effortlessly, <br /> without switching apps."
        }
        bgImg={"/img/transfer/frame.png"}
      />
      {/* third section */}
      <CardDisplay
        heading1={"Simplify Your Finances"}
        description1={
          "Bring all your accounts together in one seamless view. Track, manage, and <br /> transfer effortlessly—no more switching between apps."
        }
        img1={"/img/link-acc/brand-view1.png"}
        heading2={"Manage Everything, <br /> Effortlessly"}
        description2={
          "Why juggle multiple apps when you can have everything in one? Stay on top of all <br /> your accounts with ease, all in one place."
        }
        btnText1={"Manage my money"}
        btnHref1={"#"}
        btnText2={"Transfer to accounts"}
        btnHref2={"#"}
        img2={"/img/link-acc/brand-view2.png"}
        imgCard={[1, 2, 3]}
      />
    </section>
  );
}