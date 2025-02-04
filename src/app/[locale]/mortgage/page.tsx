import Image from "next/image";
import ic_phone from "@/assets/icons/phone.svg";
import roundCity1 from "@/assets/images/round-city1.png";
import roundCity2 from "@/assets/images/round-city2.png";
import JourneyCard from "../../components/home/cards/journeyCard";
import ReportCard from "../../components/home/cards/reportCard";
import MortgageCalculator from "../../components/home/calculator/mortgageCalculator";
// import BenfitCard from "../../components/home/cards/benefitCard";
import MortgageCarousel from "@/app/components/home/carousels/mortgageCarousel";

export default function Home() {
  return (
    <>
      <main>
        <div className="bg-[#141F34]">
          <div className=" grid grid-cols-[38%_62%] w-full  h-[700px] ">
            <div className="bg-[#2A3F85] ">
              <div className="blueRect_back sm:left-40  md:left-60 left-32 3xl:left-[268px] h-full justify-center items-center relative z-10">
                <h1 className="w- pt-[410px] text-left sm:-left-24  md:-left-44 -left-20 text-white md:text-3xl sm:text-xl text-base font-extrabold font-inter uppercase  absolute">
                  <span className="sm:text-2xl text-sm font-[500] capitalize">
                    <span className="transition-opacity opacity-50">
                      Mortgage /
                    </span>{" "}
                    UAE
                  </span>
                  <br />
                  <br />
                  No matter your financing requirements,
                  <br />
                  we’ve got what you need and much more
                </h1>
              </div>
            </div>
            <div className='mortgage_back  h-full  relative z-0 p-4 pt-24'>
              <a
                href="tel:+97145497350"
                className="text-white md:pr-12 sm:text-xl text-base font-medium font-montserrat leading-9 flex gap-3 float-right z-20"
              >
                <Image src={ic_phone} alt="Phone number" /> +971 45 497 350
              </a>
            </div>
          </div>

          <div className="md:grid grid-col grid-cols-2 p-2 pt-24">
            <div className="general-padding  mt-8">
              <h4 className="md:text-3xl sm:text-xl text-base font-semibold mb-4 text-[#2A3F85] uppercase">
                Non-Resident Mortgage Advice/
              </h4>
              <h5 className='md:text-4xl sm:text-2xl text-xl font-semibold text-white mb-4'>
                LOOKING FOR A PROPERTY IN THE UAE?
              </h5>
              <p className='md:text-[22px] text-base font-semibold text-white mb-4'>
                Let us simplify the mortgage process for you.
              </p>
              <p className='md:text-xl text-sm text-white'>
                Our team is here to guide you through every step, offering
                expert advice tailored to non-residents. We understand the
                complexities of securing a mortgage abroad, and we’ll help you
                explore all available options, making the process as seamless
                and stress-free as possible. With access to the best rates and a
                deep understanding of the UAE mortgage landscape, we’re ready to
                support you with insights and answers for now and in the future.
                Looking for a trusted real estate agent? We can connect you to
                our network of reputable agents, ensuring you get the support
                you need from start to finish.
              </p>
              <button className='w-72 h-16  bg-black/10 rounded-2xl border-2 border-white text-white mt-8'>
                Get Pre-Approved for Mortgage
              </button>
            </div>
            <Image src={roundCity2} className='w-[86%] m-auto' alt='city' />
          </div>

          <div className="md:grid grid-col grid-cols-2  p-2 pt-24">
            <Image src={roundCity1} className="w-[84%] m-auto" alt="city" />

            <div className="general-padding mt-8">
              <h4 className="md:text-3xl sm:text-xl text-base font-semibold mb-4 text-[#2A3F85] uppercase">
                Resident Mortgage Advice/
              </h4>
              <h5 className='md:text-4xl sm:text-2xl text-xl font-semibold text-white mb-4'>
                UNLOCK YOUR DREAM HOME
              </h5>
              <p className='md:text-[22px] text-base font-semibold text-white mb-4'>
                Discover Our Mortgage Solutions for UAE Residents{" "}
              </p>
              <p className='md:text-xl text-sm text-white'>
                With the UAE as a top choice for home ownership, our mortgage
                solutions are designed to make financing accessible and
                convenient for residents. Whether you’re purchasing a new
                property from a developer or buying in the secondary market, our
                team offers customized advice to help you find the ideal
                mortgage solution. We bring an unbiased perspective and have
                access to an extensive range of lending partners, allowing us to
                secure the best options for your unique situation. Trust us to
                make your journey to homeownership easy, efficient, and entirely
                suited to your needs.
              </p>
              <button className='w-72 h-16  bg-black/10 rounded-2xl border-2 border-white text-white mt-8'>
                Get Pre-Approved for Mortgage
              </button>
            </div>
          </div>

          <div className="general-padding py-32">
            <h4 className="md:text-[40px] text-xl text-white font-semibold text-center mb-6">
              Benefits Tailored for You
            </h4>
            <MortgageCarousel />
          </div>

          <MortgageCalculator />
          <div className='pt-12 pb-40 '>
            <ReportCard />
          </div>
        </div>
        <JourneyCard />
      </main>
    </>
  );
}
