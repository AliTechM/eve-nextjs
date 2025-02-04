import JourneyCard from "@/app/components/home/cards/journeyCard";
import Phone from "@/app/components/utility/phone";
import PurchaseTable from "./PurchaseTable";
import Methodology from "@/app/components/investment/methodology";
import ComparsionSlider from "@/app/components/investment/comparsionSlider";
import AmountTable from "./amountTable";
export default function Investment() {
  return (
    <>
      <main className="">
        <div className="bg-[#141F34] pb-12">
          <div className=" grid grid-cols-[37%_63%] w-full  h-[700px] ">
            <div className="bg-[#2A3F85] ">
              <div className="blueRect_back md:left-60 left-32 3xl:left-[268px] h-full justify-center items-center relative z-10">
                <h1 className="w-100 pt-[440px] text-left sm:-left-24  md:-left-44 -left-20 text-white md:text-3xl sm:text-xl text-base font-extrabold font-inter uppercase absolute">
                  <span className="sm:text-2xl text-sm font-[500] capitalize">
                    <span className="transition-opacity opacity-50">
                      Investment Properties /
                    </span>{" "}
                    Dubai
                  </span>
                  <br />
                  <br />
                  Investment Opportunities in Dubai 
                  <h1 className="pt-3">Real Estate: Secure Your Future</h1>
                  
                </h1>
              </div>
            </div>
            <div className=" invest_back bg-no-repeat bg-cover h-full relative z-0 p-4 pt-24">
              <Phone />
            </div>
          </div>
          <div className="general-padding ">
            <Methodology />
            <div className="w-full lg:pt-1 md:pt-40 sm:pt-[120px] pt-[180px] m-auto pb-24 text-white">
              <h2 className="sm:text-4xl text-xl font-extrabold text-center mb-6">
                Investment Opportunity
              </h2>
              <h3 className="font-medium mb-12 font-montserrat sm:text-3xl text-xl text-center">
                Dubai Property (1.5 Million AED Range)
              </h3>
              <PurchaseTable />
            </div>
            <ComparsionSlider />
            <AmountTable />
          </div>
         
        </div>
        <JourneyCard />
      </main>
    </>
  );
}
