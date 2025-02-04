const Calculator = () => {
  return (
    <>
      <section className='bg-[#131f33] general-padding'>
        <h2 className='inner-head'>mortgage calculator</h2>
        <div className='grid grid-cols-3'>
          <div className='col-span-2'>
            {/* Property price input */}
            <div className='flex'>
              <div>
                <label className='labels block'>Property price</label>
                <div className='relative'>
                  <input
                    placeholder='950,000'
                    type='text'
                    className='h-20 w-1/2 rounded-2xl border border-white inputs bg-transparent'
                  />
                  <span className='placeholders absolute left-0'>Aed</span>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};
export default Calculator;
