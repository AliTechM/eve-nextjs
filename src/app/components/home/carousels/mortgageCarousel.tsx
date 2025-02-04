"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import BenfitCard from "../cards/benefitCard";

const MortgageCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className=" p-2 text-center  relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        centeredSlides={false}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        onSwiper={(swiper) => {
          if (swiper.params.navigation) {
            // swiper.params.navigation.prevEl = prevRef.current;
            // swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        breakpoints={{
          1400: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        pagination={{
          clickable: true, // Makes pagination dots clickable
        }}
        autoplay={{
          delay: 3000, // 3 seconds delay between slides
          disableOnInteraction: true, // Continue autoplay after user interaction
        }}
        className="relative max-w-[100%] mx-auto z-10 h-[360px] overflow-hidden mortgage"
      >
        <SwiperSlide className="mt-4" key={1}>
          <BenfitCard
            num=".01"
            desc="Smooth process for owning a home in the UAE with residential mortgages."
            title="Effortless Process"
          />
        </SwiperSlide>
        <SwiperSlide className="mt-4 " key={2}>
          <BenfitCard
            num=".02"
            desc="Streamlined, hassle-free process for salaried or self-employed individuals."
            title="Minimal Documentation"
          />
        </SwiperSlide>
        <SwiperSlide className="mt-4" key={3}>
          <BenfitCard
            num=".03"
            desc="Up to 80% loan-to-value flexibility on residential mortgages for Expats and up to 85% for UAE Nationals."
            title="High Loan-to-Value"
          />
        </SwiperSlide>
        <SwiperSlide className="mt-4" key={4}>
          <BenfitCard
            num=".04"
            desc="Personalized approach catering to your unique needs."
            title="Tailored Solutions"
          />
        </SwiperSlide>

        <SwiperSlide className="mt-4" key={5}>
          <BenfitCard
            num=".05"
            desc="At EVE Solution, transparency is paramount. We provide clear information on rates, terms, and associated risks."
            title="Transparent Approach"
          />
        </SwiperSlide>
        <SwiperSlide className="mt-4" key={6}>
          <BenfitCard
            num=".06"
            desc="Trusted expertise with a successful history in delivering residential mortgages."
            title="Proven Track Record"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MortgageCarousel;
