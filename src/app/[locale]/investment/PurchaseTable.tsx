import ic_exclmation from "@/assets/icons/exclmation_mark.svg";
import ComparisonTable from "@/app/components/utility/table";
import { sampleData } from "@/app/data/investmetTable";
import Image from "next/image";

export default function PurchaseTable() {
  return (
    <div className='w-full'>
      <div>
        <ul
          className='flex flex-wrap bg-[#364780] font-bold md:text-[26px] rounded-t-lg -mb-px text-center justify-center items-center h-32'
          id='default-styled-tab'
          data-tabs-toggle='#default-styled-tab-content'
          role='tablist'>
          <li className='h-full w-1/2' role='presentation'>
            <button
              className='rounded-t-lg rounded-r-lg text-white bg-[#253775] w-full h-full uppercase'
              id='profile-styled-tab'
              data-tabs-target='#styled-profile'
              type='button'
              role='tab'
              aria-controls='profile'
              aria-selected='false'>
              Purchase-Only (9% ROI)
            </button>
          </li>
          <li className='h-full w-1/2' role='presentation'>
            <button
              className=' p-4 rounded-t-lg rounded-l-lg text-white hover:bg-[#253775]  w-full h-full uppercase'
              id='dashboard-styled-tab'
              data-tabs-target='#styled-dashboard'
              type='button'
              role='tab'
              aria-controls='dashboard'
              aria-selected='false'>
              Purchase with Renovation (14% ROI)
            </button>
          </li>
        </ul>
      </div>
      <div className='bg-[#293346] h-auto pt-6 md:grid grid-cols-1 md:grid-cols-3 items-center gap-4 mb-6'>
        <div className='md:col-span-1'></div>
        <div className='md:text-2xl text-xl pb-6 text-center font-bold !text-white/80'>With Financing</div>
        <div className='md:text-2xl text-xl pb-6 text-center font-bold !text-white/80'>Without Financing</div>
      </div>
      <ComparisonTable data={sampleData} />
      <div className='flex justify-end mt-6 gap-3 text-white text-base font-normal font-inter capitalize leading-[4.563rem]'>
        <Image src={ic_exclmation} alt='exclmation mark' /> no responsibility
        from our side
      </div>
    </div>
  );
}
