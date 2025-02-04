/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { CurrencyOptions } from "./currencyOptions";
import { usePathname, useSearchParams } from "next/navigation";

// interface MortgageCalulate {
//   years: string | number;
//   loan: string;
//   price: string;
//   payment: string;
//   rate: string;
// }

const MortgageCalculator = () => {
  const positiveIntegerRegex = /^\d+$/;
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [roi] = useState<any>(9);
  const [monthly_roi, setMonthly_roi] = useState(0);
  const [annual_roi, setAnnual_roi] = useState(0);
  const [currency, setCurrency] = useState("Aed");
  const pathname = usePathname();
  const [selectedPath, setSelectedPath] = useState("");
  const searchParams = useSearchParams();
  const url_currency = searchParams.get("currency");

  const initialValues: any = {
    years: 1,
    loan: 0,
    priceany: 0,
    payment: 0,
    rate: 4.5,
    paymentRate: 20,
  };

  const formik = useFormik({
    initialValues: initialValues as any,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: false,
    validate: (values) => {
      const errors: any = {};
      if (!values.price || values.price === "") {
        errors.price = "Price is required!";
      } else if (
        values.price !== "" &&
        !positiveIntegerRegex.test(values.price)
      ) {
        errors.price = "Price should not be negative or decimal number!";
      }
      if (!values.paymentRate || values.paymentRate === "") {
        errors.paymentRate = "Rate is required!";
      } else if (
        values.paymentRate !== "" &&
        !positiveIntegerRegex.test(values.paymentRate)
      ) {
        errors.paymentRate = "Rate should not be negative or decimal number!";
      } else if (
        values.paymentRate !== "" &&
        positiveIntegerRegex.test(values.paymentRate) &&
        (Number(values.paymentRate) < 10 || Number(values.paymentRate) > 20)
      ) {
        errors.paymentRate = "Rate should be between 10 and 20!";
      }
      if (!values.rate || values.rate === "") {
        errors.rate = "Rate is required!";
      } else if (
        values.rate !== "" &&
        !positiveIntegerRegex.test(values.rate)
      ) {
        errors.rate = "Rate should not be negative or decimal number!";
      } else if (
        values.rate !== "" &&
        positiveIntegerRegex.test(values.rate) &&
        (Number(values.rate) < 1 || Number(values.rate) > 15)
      ) {
        errors.rate = "Rate should be between 1 and 15!";
      }

      return errors;
    },
    onSubmit: async () => {},
  });

  const handleChange = (e: any) => {
    formik.setFieldValue(e.target.name, e.target.value);
    formik.setFieldTouched(e.target.name, true);
  };

  const handleBlur = (e: any) => {
    formik.setFieldTouched(e.target.name, true);
  };

  useEffect(() => {
    if (formik.touched.price == true) {
      if (
        // formik.values.price == "" ||
        // formik.values.rate == "" ||
        (formik.errors?.price && formik.errors?.price !== "") ||
        (formik.errors?.rate && formik.errors?.rate !== "") ||
        (formik.errors?.paymentRate && formik.errors?.paymentRate !== "")
      ) {
        setMonthlyPayment(0);
        setAnnual_roi(0);
        setMonthly_roi(0);
        formik.setFieldValue("payment", 0);
        formik.setFieldValue("loan", 0);
      } else {
        const monthlyRate = Number(formik.values.rate) / 12 / 100;
        const loanTerm = Number(formik.values.years) * 12;
        const ratePower = Math.pow(1 + monthlyRate, loanTerm);
        const downP = (formik.values.price * formik.values.paymentRate) / 100;
        const T = formik.values.price - downP;
        const I = (9 * formik.values.price) / 12;
        const annual_roi = I * 12;

        const b = Number(ratePower) - 1;
        const res =
          (Number(formik.values.loan) *
            Number(monthlyRate) *
            Number(ratePower)) /
          b;
        setMonthlyPayment(Math.round(res));
        setAnnual_roi(Math.round(annual_roi));
        setMonthly_roi(Math.round(I));
        formik.setFieldValue("payment", downP);
        formik.setFieldValue("loan", T);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values, formik.errors]);

  useEffect(() => {
    setSelectedPath(pathname);
    if (url_currency && url_currency !== "") {
      const currency_value = CurrencyOptions.find(
        (opt) => opt.pathLabel == url_currency
      );
      if (currency_value) setCurrency(currency_value.value);
    } else {
      setCurrency("Aed");
    }
  }, [pathname, url_currency]);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#131f33] general-padding  "
      >
        <h2 className="inner-head lg:text-[40px] mb-8">mortgage calculator</h2>
        {/* remove duplicated grid-cols-2 */}
        <div className="md:grid grid-cols-3 lg:gap-24 gap-10">
          <div className="grid  lg:grid-cols-2 grid-cols-1 col-span-2 lg:gap-6">
            {/* Property price input */}
            <div className="px-2">
              <label className="md:text-2xl text-lg font-[300] text-white mb-3 block text-left">
                Property price
              </label>
              <div className="relative">
                <input
                  placeholder="0"
                  type="number"
                  min={0}
                  className="h-[70px] w-full pl-16 rounded-2xl focus:outline-none border border-white calc_inputs bg-transparent"
                  name="price"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={formik.values?.price ? formik.values.price : ""}
                />
                <span className="placeholders absolute left-0 -my-[2px] mx-4 uppercase">
                  {currency}
                </span>
              </div>
              <p className="text-red-500 text-sm">
                {(formik.errors.price as any) &&
                  formik.touched.price &&
                  formik.errors.price}
              </p>
            </div>
            <div className=" px-2">
              <label className="md:text-2xl text-lg font-[300] text-white mb-3 block text-left">
                Loan Amount
              </label>
              <div className="relative">
                <input
                  placeholder="0"
                  type="number"
                  className="h-[70px] w-full pl-16 rounded-2xl focus:outline-none border border-white calc_inputs bg-transparent"
                  name="loan"
                  disabled
                  onChange={handleChange}
                  value={formik.values.loan == 0 ? "" : formik.values.loan}
                />
                <span className="placeholders absolute left-0 -my-[2px] mx-4 uppercase">
                  {currency}
                </span>
                <select
                  name="years"
                  value={formik.values.years}
                  onChange={handleChange}
                  className="absolute calc_inputs right-0 focus:outline-none w-1/3 h-full px-2 mr-4 py-3 bg-transparent border-l border-[#ADADAD] rounded-xl focus:outline-none "
                >
                  {[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20, 21, 22, 23, 24, 25,
                  ].map((num) => (
                    <option className="text-black" key={num} value={num}>
                      {num} yrs
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-red-500 text-sm">
                {(formik?.errors?.loan as any) &&
                  formik?.touched?.loan &&
                  formik?.errors?.loan}
              </p>
            </div>
            <div className=" px-2">
              <label className="md:text-2xl text-lg font-[300] text-white mb-3 block text-left">
                Down payment
              </label>
              <div className="relative">
                <input
                  name="payment"
                  disabled
                  onChange={handleChange}
                  value={
                    formik.values.payment == 0 ? "" : formik.values.payment
                  }
                  placeholder="0"
                  type="number"
                  className="h-[70px] w-full pl-16 rounded-2xl focus:outline-none border border-white calc_inputs bg-transparent"
                />
                <span className="placeholders absolute left-0 -my-[2px] mx-4 uppercase">
                  {currency}
                </span>
                <span className="absolute xl:w-[170px] w-[110px]  top-0  right-[0px] ">
                  <input
                    // placeholder="950,000"
                    value={formik.values.paymentRate}
                    name="paymentRate"
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="h-[70px] calc_inputs pl-8 w-full focus:outline-none rounded-2xl border border-white  bg-transparent"
                  />
                  <span className="placeholders absolute right-[10px] -my-[2px] mx-4">
                    %
                  </span>
                </span>
              </div>
              <p className="text-red-500 text-sm">
                {(formik.errors.paymentRate as any) &&
                  formik.touched.paymentRate &&
                  formik.errors.paymentRate}
              </p>
            </div>
            <div className=" px-2">
              <label className="md:text-2xl text-lg font-[300] text-white mb-3 block text-left">
                Interest rate
              </label>
              <div className="relative">
                <input
                  placeholder="950,000"
                  type="number"
                  className="h-[70px] w-full pl-4 pr-6 focus:outline-none rounded-2xl border border-white calc_inputs bg-transparent"
                  name="rate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formik.values.rate}
                />
                <span className="placeholders absolute right-0 -my-[2px] mx-4">
                  %
                </span>
              </div>
              <p className="text-red-500 text-sm">
                {(formik.errors.rate as any) &&
                  formik.touched.rate &&
                  formik.errors.rate}
              </p>
            </div>
          </div>
          <div className="col-span-1  md:mt-2 mt-10">
            <div className="bg-[#2A3F8599] h-full md:p-[46px] p-6 relative rounded-xl">
              <select
                name="currency"
                defaultValue={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className={`${
                  selectedPath.indexOf("mortgage") > -1 ? "hidden" : ""
                } absolute  text-[#04080F] -top-8 focus:outline-none right-6 w-[160px] h-[60px] px-2 mr-4 py-3 bg-white border-l border-[#ADADAD] rounded-xl focus:outline-none`}
              >
                {CurrencyOptions.map((curr) => (
                  <option
                    className="text-black"
                    key={curr.value}
                    value={curr.value}
                    disabled={curr.label.indexOf("soon") !== -1}
                  >
                    {curr.label}
                  </option>
                ))}
              </select>
              <h5 className="mb-4">
                <span className="text-[#84C3EE] md:text-2xl text-xl ">
                  ROI:{" "}
                </span>
                <span className="text-white md:text-xl text-lg font-bold">
                  {" "}
                  {roi}%
                </span>
              </h5>
              <h5 className="text-sm mb-2">
                <span className="text-[#84C3EE] md:text-lg text-base">
                  Monthly payment:{" "}
                </span>
                <span className="text-white font-semibold md:text-xl text-lg uppercase">
                  {" "}
                  {currency} {monthlyPayment}
                </span>
              </h5>
              <h5 className="text-sm mb-2">
                <span className="text-[#84C3EE] md:text-lg text-base">
                  Monthly ROI Income:{" "}
                </span>
                <span className="text-white font-semibold md:text-xl text-lg uppercase">
                  {" "}
                  {currency} {monthly_roi}
                </span>
              </h5>
              <h5 className="">
                <span className="text-[#84C3EE] md:text-lg text-base">
                  Estimated Annual ROI Income:{" "}
                </span>
                <span className="text-white font-bold md:text-xl text-lg uppercase">
                  {" "}
                  {currency} {annual_roi}
                </span>
              </h5>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default MortgageCalculator;
