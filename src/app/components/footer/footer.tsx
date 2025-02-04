import Image from "next/image";
import SocialLinks from "../utility/SocialLinks";
import ic_logo from "@/assets/images/white_logo.png";
import ic_linkedin from "@/assets/icons/linkedin.svg";
import ic_insta from "@/assets/icons/instagram.svg";
import ic_youtube from "@/assets/icons/youtube.svg";
import ic_twitter from "@/assets/icons/twitter.svg";
import CustomLinks from "../utility/CustomLinks";

export default function Footer() {
  return (
    <>
      <footer className="w-full grid  grid-cols-4 lg:grid-cols-7 sm:justify-items-start justify-items-center gap-7 3xl:gap-6 general-padding pt-12 pb-8">
        <div className="col-span-4 lg:col-span-2 justify-items-start">
          <div className="flex flex-col  items-start xl:w-2/6 max-md:mb-9">
            <div className="flex flex-col max-lg:items-center">
              <Image
                className="4xl:max-w-36 max-h-24 md:max-w-28 w-24 4xl:mb-11 mb-8"
                src={ic_logo}
                alt="logo"
              />
              <div className="flex justify-start items-center">
                <SocialLinks
                  icon={ic_linkedin}
                  link="https://www.linkedin.com/company/vicekeeper"
                />
                <SocialLinks
                  icon={ic_insta}
                  link="https://www.instagram.com/vicekeeper.en/"
                />
                <SocialLinks
                  icon={ic_twitter}
                  link="https://x.com/nannies_dubai"
                />
                <SocialLinks
                  icon={ic_youtube}
                  link="https://www.youtube.com/channel/UCUhqwOh7C0Zgy8VETv5745Q"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="footer-head">Investment Properties</h3>
          <CustomLinks Linktext="UAE" LinkNav="/investment" />
          <CustomLinks Linktext="USA" LinkNav="/investment" />
          <CustomLinks Linktext="Bali" LinkNav="/investment" />
          <CustomLinks Linktext="Spain" LinkNav="/investment" />
          <CustomLinks Linktext="Portugal" LinkNav="/investment" />
        </div>
        <div>
          {/* <Link href="/mortgage"> */}
          <h3 className="footer-head">Mortgage Services</h3>
          <CustomLinks Linktext="UAE" LinkNav="/mortgage" />
          <CustomLinks Linktext="USA" LinkNav="/mortgage?currency=usa" />
          <CustomLinks Linktext="Spain" LinkNav="/mortgage?currency=spain" />
          <CustomLinks
            Linktext="Portugal"
            LinkNav="/mortgage?currency=potugal"
          />
        </div>
        <div className="lg:col-span-2">
          <h3 className="footer-head ">Citizenship Through Investment</h3>
          <CustomLinks Linktext="Citizenship" LinkNav="/citizenship" disable />
          <CustomLinks Linktext="Investment Pathways" LinkNav="" />
          <CustomLinks Linktext="Fast-track Processing" LinkNav="" />
          <CustomLinks Linktext="Residence" LinkNav="" disable />
          <CustomLinks Linktext="Long-term Residency Options" LinkNav="" />
          <CustomLinks Linktext="Family Residency Solutions" LinkNav="" />
        </div>
        <div>
          <h3 className="footer-head">Concierge service</h3>
          <CustomLinks Linktext="Legal Assistance" LinkNav="" />
          <CustomLinks Linktext="Bank account assistance" LinkNav="" />
          <CustomLinks Linktext="Business Set-up" LinkNav="" />
          <CustomLinks Linktext="Visa Support" LinkNav="" />
        </div>
      </footer>
    </>
  );
}
