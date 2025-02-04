import ComparisonTable from "@/app/components/utility/table";
import { MortgageData } from "@/app/data/mortgageTable";

export default function AmountTable() {
  return (
    <div className='w-full mb-44'>
      <div>
        <ul
          className='flex flex-wrap bg-[#1e2b55] font-bold md:text-[26px] rounded-t-lg -mb-px text-center justify-center items-center h-32'
          id='default-styled-tab'
          data-tabs-toggle='#default-styled-tab-content'
          role='tablist'>
          <li className='h-full w-1/2' role='presentation'>
            <button
              className='rounded-tl-lg  text-primary bg-white w-full h-full uppercase'
              id='profile-styled-tab'
              data-tabs-target='#styled-profile'
              type='button'
              role='tab'
              aria-controls='profile'
              aria-selected='false'>
              EXPENSE STRUCTURE FOR THE DEAL
            </button>
          </li>
          <li className='h-full w-1/2' role='presentation'>
            <button
              className=' p-4 rounded-tr-lg  text-white  hover:bg-[#253775]  w-full h-full uppercase'
              id='dashboard-styled-tab'
              data-tabs-target='#styled-dashboard'
              type='button'
              role='tab'
              aria-controls='dashboard'
              aria-selected='false'>
              EXPECTED RETURN AND DEAL CYCLE
            </button>
          </li>
        </ul>
      </div>
      <div className='bg-primary h-auto pt-4 md:grid grid-cols-1 md:grid-cols-3 grid-cols-1 items-center gap-4 mb-6'>
        <div className='md:text-2xl text-xl font-medium pb-4 !text-white/80 md:!text-left text-center md:ps-6'>Expense Items</div>
        <div className='text-center pb-4'>
          <h4 className='text-white/80 md:text-2xl text-xl font-bold font-inter  '>
            Amount (AED)
          </h4>
          <span className='md:text-2xl text-xl !text-white/80'>Without Mortgage</span>
        </div>
        <div className='text-center pb-4'>
          <h4 className='text-white/80 md:text-2xl text-xl font-bold font-inter '>
            Amount (AED)
          </h4>
          <span className='md:text-2xl text-xl !text-white/80'>With Mortgage</span>
        </div>
      </div>
      <ComparisonTable data={MortgageData} isAmount={true} />
    
    </div>
  );
}
