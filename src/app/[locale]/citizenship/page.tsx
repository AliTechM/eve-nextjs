import Image from "next/image";
import ic_phone from "@/assets/icons/phone.svg";
import CitizenTabs from "./CitizenTabs";
import CitizenCarousel from "@/app/components/home/carousels/citizenCarousel";

import JourneyCard from "@/app/components/home/cards/journeyCard";
 
export default function Home() {
  return (
    <>
      <main>
        <div className="bg-[#141F34]">
        <div className=" grid grid-cols-[38%_62%] w-full  h-[700px] ">
        <div className="bg-[#2A3F85] ">
              <div className="blueRect_back sm:left-40  md:left-60 left-32 3xl:left-[268px] h-full justify-center items-center relative z-10">
                <h1 className="w-100 pt-[440px] text-left sm:-left-24  md:-left-44 -left-20 text-white md:text-3xl sm:text-xl text-base font-extrabold font-inter uppercase absolute">
                  <span className="sm:text-2xl text-sm font-[500] capitalize">
                    <span className="transition-opacity opacity-50">
                      Citizenship Through Investment /
                    </span>{" "}
                    Spain
                  </span>
                  <br />
                  <br />A safe and free future in Spain!
                </h1>
              </div>
            </div>
            <div className="citizen_back  h-full  relative z-0 p-4 pt-24">
              <a
                href="tel:+97145497350"
                className="text-white md:pr-12 sm:text-xl text-base font-medium font-montserrat leading-9 flex gap-3 float-right z-20"
              >
                <Image src={ic_phone} alt="Phone number" /> +971 45 497 350
              </a>
            </div>
          </div>

          <CitizenTabs />

          <div className=" general-padding pb-44">
            <h4 className="md:text-4xl text-xl text-white font-bold text-center mb-8">
              Our clients success stories
            </h4>
            <CitizenCarousel />
            <div className="text-center md:pb-24 pb-6">
              <button className="w-72 h-16 m-auto bg-black/10 rounded-2xl border-2 border-white text-white mb-2 mt-14">
                Contact Us for Personalized Advice
              </button>
            </div>
          </div>
        </div>
        <JourneyCard />
      </main>
    </>
  );
}
