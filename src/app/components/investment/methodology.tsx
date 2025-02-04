import Image from "next/image";
import ic_flat from "@/assets/icons/flats.svg";
import ic_calender from "@/assets/icons/calendar.svg";
import img_Methodology from "@/assets/images/methodology.webp"
// import img_methodology from "@/"
const Methodology = () => {
  return (
    <>
      <section className='lg:grid grid-cols-[33%_67%] mx-0 gap-12 max-h-[33.5rem] mt-32 md:mb-34 mb-60'>
        <div className=' flex flex-col  justify-around items-start mb-6'>
          <h1 className='pages-topH  text-center mb-4'>Methodology</h1>
          <p className='text-white md:text-lg text-base font-normal font-inter capitalize leading-9 max-w-[29.188rem]'>
            To estimate the property’s value, comparable transactions in
            neighboring buildings with similar characteristics that have already
            been commissioned were analyzed.
          </p>
          <div
            className='w-full max-w-[30.813rem] mt-8 mb-4 h-20 bg-white/10 rounded-md flex justify-around gap-2 text-white md:text-[15px] text-xs font-normal
              font-cairo leading-normal'>
            <div className='basis-1/2 flex ps-4 items-center gap-4 '>
              <Image src={ic_flat} alt='flat' />
              <p>Two-bedroom apartment in Emaar Beach </p>
            </div>
            <div className='basis-1/2 flex ps-4 pe-5 items-center gap-4 '>
              <Image src={ic_calender} alt='calender' />
              <p>bought in the first half of the year 2023.</p>
            </div>
          </div>
          <i
            className='text-white md:text-xl text-lg
            font-semibold font-inter capitalize leading-9'>
            Potential Return on Invested Capital (AED):
          </i>

          <p className='text-white md:text-3xl text-xl font-bold font-alexandria capitalize'>
            35% or 918,125
          </p>
        </div>
        <div className=' mx-0 relative w-full'>
          <Image className="w-[97%] h-full" src={img_Methodology} alt='Methodology' />
          <div className='2xl:w-[480px] sm:w-[400px] w-[280px] bg-primary rounded-2xl sm:py-12 py-4 2xl:px-14 sm:px-10 px-3  absolute top-1/4 sm:right-[54px] right-[10px] gap-4 '>
            <h4 className='methodology-cardH'>EXPECTED VALUE</h4>
            <p className='methodology-cardP'>Initial Price (AED):</p>
            <h4 className='methodology-cardH'>4,000,000</h4>
            <p className='methodology-cardP'>
              Potential Increase in Property Value:
            </p>
            <h4 className='methodology-cardH'>+23%</h4>
            <p className='methodology-cardP'>Expected Value (AED):</p>
            <h4 className='methodology-cardH'>4,918,125</h4>
            <p className='methodology-cardP'>Invested in Property (AED):</p>
            <h4 className='methodology-cardH'>
              2,638,013 (2,357,969 + expenses 280,044)
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};
export default Methodology;
