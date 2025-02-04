"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import BeforeAfterSlider from "../../utility/beforeAfter";
import img_a from "@/assets/images/invest1.png";
import img_b from "@/assets/images/invest2.png";

const InvestmentCarousel = () => {
  return (
    <section className='p-2 text-center relative'>
      <div className='max-w-[100%] m-auto relative invest_carousel'>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          allowTouchMove={false} // Disable swiping
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            },
          }}
          className='relative z-10 overflow-visible investment '>
          {[1, 2, 3].map((index) => (
            <SwiperSlide className='mt-12' key={index}>
              <div className='mx-auto max-w-4xl'>
                <BeforeAfterSlider
                  beforeImage={img_a}
                  afterImage={img_b}
                  beforeAlt='Room before renovation'
                  afterAlt='Room after renovation'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation */}
        <div className='navigation-wrapper absolute w-full top-1/2 -translate-y-1/2 z-20 pointer-events-none'>
          <div className='container mx-auto px-4 flex justify-between'>
            <button className='swiper-button-prev w-12 h-12 flex items-center justify-center pointer-events-auto focus:outline-none transition-colors'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                  d="M15 19l-7-7 7-7"
                  stroke="white"  
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                  </svg>
            </button>
            <button className='swiper-button-next w-12 h-12  flex items-center justify-center pointer-events-auto focus:outline-none hover:bg-gray-50 transition-colors'>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M9 5l7 7-7 7'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>

        
        <div className='swiper-pagination !relative !bottom-0 mt-8'></div>
      </div>
    </section>
  );
};

export default InvestmentCarousel;
