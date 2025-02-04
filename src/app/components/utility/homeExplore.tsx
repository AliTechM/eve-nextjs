/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef } from "react";
import Phone from "./phone";
import { CardBanner } from "../home/cards/cardBanner";
import Opertaions from "../home/operation/operations";

export default function HomeExplore() {
  const exploreRef: any = useRef(null);

  const scrollToDiv = () => {
    exploreRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="hero_back bg-no-repeat bg-cover w-full h-[75svh] xl:h-[100svh] flex flex-col justify-center items-center  ">
        <Phone />
        <h1 className=" max-w-[36.875rem] mb-9 text-center text-white  text-4xl 3xl:text-5xl font-extrabold font-inter uppercase leading-[3rem] 3xl:leading-[4.813rem]">
          Start Your<br></br>Investment Journey.
        </h1>
        {/* <Link > */}
        <button
          className="w-56 3xl:w-72 h-16 3xl:h-20 bg-black/20 rounded-2xl border-2 border-white text-center text-white 
           text-sm 3xl:text-base font-medium font-inter uppercase 3xl:leading-[4.563rem]"
          onClick={scrollToDiv}
        >
          Explore now
        </button>
        {/* </Link> */}
      </div>

      <CardBanner />
      <Opertaions exploreRef={exploreRef} />
    </>
  );
}
