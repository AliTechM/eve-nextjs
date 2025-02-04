"use client";
import { useState } from "react";
import listTick from "@/assets/icons/listTick.svg";
import Image from "next/image";
import alert from "@/assets/icons/alert.svg";

export default function CitizenTabs() {
  const [selectedSubTab, setSelectedSubTab] = useState("information");

  return (
    <div className="w-full md:p-16 p-4">
      <div className=" ">
        <ul
          className="flex flex-wrap bg-[#364780] font-bold md:text-[28px] rounded-t-lg -mb-px text-center uppercase justify-center"
          id="default-styled-tab"
          data-tabs-toggle="#default-styled-tab-content"
          // data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
          // data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
          role="tablist"
        >
          <li className=" w-1/2" role="presentation">
            <button
              className=" p-4 rounded-t-lg rounded-r-lg text-white bg-[#253775] w-full"
              id="profile-styled-tab"
              data-tabs-target="#styled-profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Residence
            </button>
          </li>
          <li className=" w-1/2" role="presentation">
            <button
              className=" p-4 rounded-t-lg rounded-l-lg text-white hover:bg-[#253775]  w-full"
              id="dashboard-styled-tab"
              data-tabs-target="#styled-dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Citizenship
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content">
        <div
          className=""
          id="styled-profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="mb-4 ">
            <ul
              className="flex flex-wrap -mb-px md:text-2xl text-sm rounded-b-lg font-medium text-center bg-[#FFFFFF17]"
              id="default-styled-tab"
              data-tabs-toggle="#default-styled-tab-content"
              data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
              data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
              role="tablist"
            >
              <li className="me-4" role="presentation">
                <button
                  className={`inline-block p-4  hover:border-b-2 text-white ${
                    selectedSubTab === "information"
                      ? "border-b-2"
                      : "border-b-0"
                  }`}
                  id="profile-styled-tab"
                  data-tabs-target="#styled-profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  onClick={() => setSelectedSubTab("information")}
                >
                  Information
                </button>
              </li>
              <li className="me-4" role="presentation">
                <button
                  className={`inline-block p-4  hover:border-b-2 text-white ${
                    selectedSubTab === "requirements"
                      ? "border-b-2"
                      : "border-b-0"
                  }`}
                  id="profile-styled-tab"
                  data-tabs-target="#styled-profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  onClick={() => setSelectedSubTab("requirements")}
                >
                  Requirements
                </button>
              </li>
              <li className="me-4" role="presentation">
                <button
                  className={`inline-block p-4  hover:border-b-2 text-white ${
                    selectedSubTab === "benefits" ? "border-b-2" : "border-b-0"
                  }`}
                  id="profile-styled-tab"
                  data-tabs-target="#styled-profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  onClick={() => setSelectedSubTab("benefits")}
                >
                  Benefits
                </button>
              </li>
            </ul>
          </div>
          <div id="default-styled-tab-content ">
            <div
              className={`md:p-4 p-2 text-white ${
                selectedSubTab === "information" ? "" : "hidden"
              }`}
              id="styled-profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <p className="mb-4 md:text-xl text-base">
                A Spanish residence permit provides a 3-year term with options
                for renewal and eventual citizenship, making it ideal for those
                seeking freedom to travel within Europe. Key benefits of this
                residence permit include:
              </p>
              <div className="flex gap-2 md:text-xl text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 my-1 self-start"
                />{" "}
                <div>
                  <p className=" font-semibold">
                    Visa-free travel throughout Europe:
                  </p>

                  <p className="">Seamless access across European countries.</p>
                </div>
              </div>

              <div className="flex gap-2 md:text-xl text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 my-1 self-start"
                />{" "}
                <div>
                  <p className=" font-semibold">
                    Opportunities to establish a business, open bank accounts,
                    secure loans, and mortgages:
                  </p>

                  <p className="">
                    Unlock financial and entrepreneurial opportunities.
                  </p>
                </div>
              </div>
              <div className="flex md:text-xl gap-2 text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 my-1 self-start"
                />{" "}
                <div>
                  <p className=" font-semibold">
                    Access to free education and healthcare for you and your
                    family:
                  </p>

                  <p className="">
                    Ensure quality services for a better future.
                  </p>
                </div>
              </div>
              <div className="flex md:text-xl gap-2 text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 my-1 self-start"
                />{" "}
                <div>
                  <p className=" font-semibold">Convenient travel and more:</p>

                  <p className="font-[400]">
                    Enjoy enhanced mobility and security.
                  </p>
                </div>
              </div>

              <div className="md:grid grid-cols-[38%_62%] 2xl:gap-14 mt-12">
                <div className="md:p-5 p-1">
                  <p className="md:text-2xl text-base">
                    In today’s world, holding foreign documents has become a
                    valuable asset, offering security against unforeseen events
                    like lockdowns or mobility restrictions. Additionally, it
                    opens doors for business expansion into the European market
                    with peace of mind.
                  </p>
                </div>
                <div className="md:p-4 p-1 2xl:pr-20">
                  <div className="2xl:p-14 md:p-8 p-2 bg-[#2A3F8599] rounded-lg">
                    <div className="flex md:gap-10 gap-2">
                      <div className="md:p-2 p-1">
                        <p className="md:text-xl text-base mb-2">
                          Full support with 2-3 entries:{" "}
                        </p>
                        <p className=" md:text-3xl text-xl font-bold">
                          €15,000
                        </p>

                        <p className="md:text-xl text-base mb-2 mt-6">
                          Full support without the first entry:{" "}
                        </p>
                        <p className=" md:text-3xl text-xl font-bold">
                          €19,000
                        </p>
                      </div>
                      <div className="md:p-2 p-1">
                        <p className="md:text-xl text-base mb-2">
                          Installment options:{" "}
                        </p>
                        <p className=" md:text-3xl text-xl ">
                          <span className="font-bold">50% </span>
                          <span className="md:text-xl text-base">upfront</span>
                        </p>
                        <p className=" md:text-3xl text-xl ">
                          <span className="font-bold">50% </span>
                          <span className="md:text-xl text-base">
                            {" "}
                            upon approval
                          </span>
                        </p>

                        <p className=" md:text-3xl text-xl mt-6">
                          <span className="font-bold">3-year </span>
                          <span className="md:text-xl text-base">
                            {" "}
                            issuance guarantee
                          </span>
                        </p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`md:p-4 p-2 text-white ${
                selectedSubTab === "requirements" ? "" : "hidden"
              }`}
              id="styled-profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <p className="mb-4 md:text-xl text-base">
                Steps to obtain a Spanish residence permit:
              </p>
              <div className="flex gap-2 md:text-xl text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 my-1 self-start"
                />{" "}
                <p className=" font-semibold">
                  Submit scans of your passport with a Schengen visa. For
                  families, include passports of all members, marriage
                  certificates, and children’s birth certificates.
                </p>
              </div>
              <div className="flex gap-2 md:text-xl text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 self-start my-1"
                />{" "}
                <p className=" font-semibold">
                  Provide a criminal record certificate.
                </p>
              </div>
              <div className="flex gap-2 md:text-xl text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 self-start my-1"
                />{" "}
                <p className=" font-semibold">
                  <span className="font-extrabold">First visit to Spain: </span>
                  arrive in any Spanish city, pass passport control, and send
                  passport scans (you can leave the same day).
                </p>
              </div>
              <div className="flex gap-2 md:text-xl text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 self-start my-1"
                />{" "}
                <p className=" font-semibold">
                  <span className="font-extrabold">
                    Second visit in a month:{" "}
                  </span>
                  provide fingerprints at a police station.
                </p>
              </div>
              <div className="flex gap-2 md:text-xl text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 self-start my-1"
                />{" "}
                <p className=" font-semibold">
                  Receive the residence card two weeks after fingerprinting.
                </p>
              </div>

              <div className="flex gap-2 md:text-xl text-base mt-12">
                <Image
                  src={alert}
                  alt="list"
                  className="max-3xl:w-5 self-start my-1"
                />{" "}
                <p className=" font-semibold">
                  The complete process takes about 1.5 months.
                </p>
              </div>
            </div>
            <div
              className={`md:p-4 p-2 text-white ${
                selectedSubTab === "benefits" ? "" : "hidden"
              }`}
              id="styled-profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <p className="mb-4 md:text-xl text-base">
                Benefits of a Spanish Residence Permit:
              </p>
              <div className="flex gap-2 md:text-xl text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 my-1 self-start"
                />{" "}
                <p className=" font-semibold">
                  Visa-free travel across EU countries – no need to apply for
                  Schengen visas.
                </p>
              </div>
              <div className="flex gap-2 md:text-xl text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 my-1 self-start"
                />{" "}
                <p className=" font-semibold">
                  Business opportunities – register a company, open a bank
                  account, and access European credit and mortgage options.
                </p>
              </div>
              <div className="flex gap-2 md:text-xl text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 my-1 self-start"
                />{" "}
                <p className=" font-semibold">
                  Flexibility to move to Spain at any time, even if borders
                  close for tourists.
                </p>
              </div>
              <div className="flex gap-2 md:text-xl text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 my-1 self-start"
                />{" "}
                <p className=" font-semibold">
                  EU citizenship in 10 years – apply for permanent residency
                  after five years and citizenship after ten.
                </p>
              </div>
              <div className="flex gap-2 md:text-xl text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 my-1 self-start"
                />{" "}
                <p className=" font-semibold">
                  Access to banking, healthcare, and education for you and your
                  family.
                </p>
              </div>
              <div className="flex gap-2 md:text-xl text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 my-1 self-start"
                />{" "}
                <p className=" font-semibold">
                  Legal employment options in Spain.
                </p>
              </div>
              <div className="flex gap-2 md:text-xl text-base mb-4">
                <Image
                  src={listTick}
                  alt="list"
                  className="max-3xl:w-5 my-1 self-start"
                />{" "}
                <p className=" font-semibold">
                  Obtain a 10-year U.S. visa in Madrid within five days, no
                  interview required.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="styled-dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        ></div>
      </div>
    </div>
  );
}
