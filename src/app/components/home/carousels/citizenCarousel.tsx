"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ClientCard from "../cards/clientCard";
import client1 from "@/assets/images/client1.png";
import client2 from "@/assets/images/client2.png";
import client3 from "@/assets/images/client3.png";

const CitizenCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="p-2  text-center relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        centeredSlides={false}
        // watchSlidesProgress
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
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
        className="relative max-w-[100%] m-auto h-[600px] z-10 overflow-hidden citizen"
      >
        <SwiperSlide className="mt-12" key={1}>
          <ClientCard
            desc={`"Investing in Spain was a significant step for me, and I couldn’t have done it without this team's expertise. They guided me through the process with ease, helping me find a property that not only suits my lifestyle but also qualifies me for a Spanish residence permit. Now, I can travel freely across Europe, enjoy Spain’s incredible quality of life, and feel secure about my investment. I’m grateful for their support every step of the way."`}
            name="Alexei Ivanov"
            img={client2}
          />
        </SwiperSlide>
        <SwiperSlide className="mt-12 " key={2}>
          <ClientCard
            desc={`"I never imagined the process would be so smooth. The team’s guidance was invaluable, especially as a non-resident investor. Thanks to their support, I now have a second residency and access to excellent healthcare and education for my children. I highly recommend them to anyone considering this opportunity."`}
            name="Svetlana Petrova"
            img={client1}
          />{" "}
        </SwiperSlide>
        <SwiperSlide className="mt-12 " key={3}>
          <ClientCard
            desc={`"This team made my dream of international property ownership come true. They guided me through the investment options, handled all documentation, and secured my residence permit efficiently. Their expertise made all the difference, and now I have a secure foothold in the European market."`}
            name="Dmitry Kuznetsov"
            img={client3}
          />{" "}
        </SwiperSlide>

        <SwiperSlide className="mt-12 " key={4}>
          <ClientCard
            desc={`"I never imagined the process would be so smooth. The team’s guidance was invaluable, especially as a non-resident investor. Thanks to their support, I now have a second residency and access to excellent healthcare and education for my children. I highly recommend them to anyone considering this opportunity."`}
            name="Svetlana Petrova"
            img={client1}
          />{" "}
        </SwiperSlide>
        <SwiperSlide className="mt-12 " key={5}>
          <ClientCard
            desc={`"This team made my dream of international property ownership come true. They guided me through the investment options, handled all documentation, and secured my residence permit efficiently. Their expertise made all the difference, and now I have a secure foothold in the European market."`}
            name="Dmitry Kuznetsov"
            img={client3}
          />{" "}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CitizenCarousel;
