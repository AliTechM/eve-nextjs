/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect, useRef } from "react";
import LanguageSwitcher from "../langSwitcher";
import img_logo from "@/assets/images/logo.webp";
import Image from "next/image";
import CustomDropdown from "../utility/customSelect";
import {
  CitizenshipOptions,
  MortgageOptions,
  ConciergeOptions,
  InvestmentOptions,
} from "./headerData";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedPath, setSelectedPath] = useState("");
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const buttonRef: any = useRef(null);
  const menuRef: any = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleClickOutside(event: any) {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedPath(pathname);
  }, [pathname]);

  return (
    <div>
      <div
        className={`flex justify-between items-center h-20 w-full text-white text-sm font-medium font-montserrat leading-9 general-padding z-50
        fixed   top-0 left-0 right-0 transition-colors duration-300 ${
          isScrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className={`lg:basis-2/12 pb-[11px] ${
            isScrolled || selectedPath == "/en"
              ? "border-b-0"
              : "lg:border-b border-b-0"
          }`}
        >
          <Image src={img_logo} alt="Eve logo" className="-ml-2" />
        </Link>
        <div
          className={`${
            isScrolled || selectedPath == "/en"
              ? "border-b-0"
              : "lg:border-b border-b-0"
          } md:flex hidden lg:basis-10/12 justify-end gap-0 lg:gap-2 3xl:gap-12 `}
        >
          <div
            className={` pb-[8px]  ${
              selectedPath.indexOf("investment") > -1
                ? "md:border-b-2 -mb-[1px]"
                : "border-b-0"
            }`}
            // style={{marginBottom:'-1px'}}
          >
            {/* <Link href="/investment"> */}
            <CustomDropdown
              options={InvestmentOptions}
              placeholder="Properties Investment "
            />
            {/* </Link> */}
          </div>
          <div
            className={` ${
              selectedPath.indexOf("mortgage") > -1
                ? "md:border-b-2 -mb-[1.5px]"
                : "border-b-0"
            }`}
          >
            {/* <Link href="/mortgage"> */}
            <CustomDropdown options={MortgageOptions} placeholder="Mortgage" />
            {/* </Link> */}
          </div>
          <div
            className={` ${
              selectedPath.indexOf("citizenship") > -1
                ? "md:border-b-2 -mb-[1.5px]"
                : "border-b-0"
            }`}
          >
            {/* <Link href="/citizenship"> */}
            <CustomDropdown
              options={CitizenshipOptions}
              placeholder="Citizenship Programmes "
            />
            {/* </Link> */}
          </div>
          <div
            className={` ${
              selectedPath.indexOf("concierge") > -1
                ? "md:border-b-2"
                : "border-b-0"
            }`}
          >
            <CustomDropdown
              options={ConciergeOptions}
              placeholder="Concierge service"
            />
          </div>
          <div className="pb-[8px]">
            <LanguageSwitcher />
          </div>
        </div>

        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white hover:text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-hamburger"
          aria-expanded="false"
          ref={buttonRef}
          onClick={() => {
            setOpen((prevValue) => !prevValue);
          }}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        ref={menuRef}
        className={`mt-16 ${
          open ? "" : "hidden"
        } w-[98%] fixed " id="navbar-hamburger`}
        style={{ zIndex: "999" }}
      >
        <ul className="flex flex-col font-medium p-4 text-white  rounded-lg bg-primary ml-[2%]">
          <li className="p-2">
            <Link
              className={`hover:border-b-2 p-1  ${
                selectedPath.indexOf("investment") > -1
                  ? "border-b-2"
                  : "border-b-0"
              }`}
              href="/investment"
            >
              Properties Investment
            </Link>
          </li>
          <li className="p-2">
            <Link
              className={`hover:border-b-2 p-1  ${
                selectedPath.indexOf("mortgage") > -1
                  ? "border-b-2"
                  : "border-b-0"
              }`}
              href="/mortgage"
            >
              Mortgage
            </Link>
          </li>
          <li className="p-2">
            <Link
              className={`hover:border-b-2 p-1  ${
                selectedPath.indexOf("citizenship") > -1
                  ? "border-b-2"
                  : "border-b-0"
              }`}
              href="/citizenship"
            >
              Citizenship Programmes
            </Link>
          </li>
          <li className="p-2">
            <Link
              className={`hover:border-b-2 p-1  ${
                selectedPath.indexOf("concierge") > -1
                  ? "border-b-2"
                  : "border-b-0"
              }`}
              href="/concierge"
            >
              Concierge service
            </Link>
          </li>
          <li className="p-3">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </div>
  );
}
