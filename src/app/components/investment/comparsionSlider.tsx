
import InvestmentCarousel from "../home/carousels/investmentCarousel";
const ComparsionSlider = () => {
  return (
    <>
      <section className='md:grid grid-cols-2 gap-10 md:max-h-[600px] mb-32'>
        <div>
         <InvestmentCarousel/>
        </div>
        <div className="flex flex-col justify-around pt-8">
          <h2 className='pages-topH'>Real Life Example</h2>
          <p className='text-white md:text-lg text-base font-normal font-inter capitalize leading-10 max-w-[44.625rem]'>
            A two-bedroom apartment was purchased in the family-friendly and
            green area of Greens, known for its excellent transport
            accessibility. The apartment was bought below market price for
            1,400,000 AED. After covering government fees and commissions and
            completing a renovation costing 159,490 AED, the property was
            flipped and sold six months later for 1,750,000 AED. This
            transaction generated a net profit of 190,510 AED for the client.
          </p>
          <button className='w-2/3 h-20 bg-white rounded-2xl  border border-primary '>
            <span className='text-primary md:text-xl text-base font-medium font-inter capitalize leading-[5.375rem]'>
              send me detailed expenses structure
            </span>
          </button>
        </div>
      </section>
    </>
  );
};
export default ComparsionSlider;
