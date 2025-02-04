/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import bank from "@/assets/icons/bank.svg";
import business from "@/assets/icons/business.svg";
import passport from "@/assets/icons/passport.svg";
import legal from "@/assets/icons/legal.svg";
import { useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
import actions from "@/app/components/utility/apiActions";

export default function ConciergeModal() {
  const { handleConceirgeEmail } = actions();
  const [isSending, setIsSending] = useState(false);
  const phoneRegex = /^(\+?\d{1,4}[\s-]?)?(\(?\d{3}\)?[\s-]?)?[\d\s-]{7,10}$/;

  const initialValues: any = {
    name: "",
    email: "",
    phone: "",
    subject: "Consultation1",
  };

  const formik = useFormik({
    initialValues: initialValues as any,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: false,
    validate: (values) => {
      const errors: any = {};
      if (!values.name || values.name === "") {
        errors.name = "Name is required!";
      }
      if (!values.email || values.email === "") {
        errors.email = "Email is required!";
      } else if (
        values.email !== "" &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Email is not valid!";
      }
      if (!values.phone || values.phone === "") {
        errors.phone = "Phone is required!";
      } else if (values.phone !== "" && !phoneRegex.test(values.phone)) {
        errors.phone = "Phone is not valid!";
      }

      return errors;
    },
    onSubmit: async () => {
      handleConceirgeEmail(formik.values);
    },
  });

  const handleSubmit = async (e: any) => {
    // setIsSubmetted(true);
    const values = formik.values;
    formik.setTouched({ name: true, email: true, phone: true });
    e.preventDefault();

    const validationErrors = await formik.validateForm();
    if (Object.keys(validationErrors).length > 0) {
      // setErrors(validationErrors);
      return;
    } else {
      setIsSending(true);
      handleConceirgeEmail(values).then(() => {
        setIsSending(false);
      });
    }
  };

  const handleChange = (e: any) => {
    formik.setFieldValue(e.target.name, e.target.value);
    formik.setFieldTouched(e.target.name, true);
  };

  const handleBlur = (e: any) => {
    formik.setFieldTouched(e.target.name, true);
  };
  return (
    <>
      <div className="w-full 3xl:h-[590px] h-[560]  grid grid-cols-1 xl:grid-cols-5 rounded-2xl overflow-y-scroll	lg:overflow-y-auto">
        <div className="xl:col-span-2 max-xl:order-1 md:px-[92px] py-12 px-4 max-xl:h-3/4 ">
          <h2 className="md:text-2xl text-xl uppercase font-bold">
            Concierge Services for a Seamless Experience
          </h2>
          <div className="flex p-4 gap-4 bg-[#2A3F851A] rounded-xl mt-4">
            <Image
              src={legal}
              alt="modal image"
              className="h-[40px] w-[40px] object-cover"
            />
            <p className="capitalize text-xl">legal assistance</p>
          </div>
          <div className="flex p-4 gap-4 bg-[#2A3F851A] rounded-xl mt-4">
            <Image
              src={bank}
              alt="modal image"
              className="h-[40px] w-[40px] object-cover"
            />
            <p className="capitalize text-xl">Bank account assistance</p>
          </div>
          <div className="flex p-4 gap-4 bg-[#2A3F851A] rounded-xl mt-4">
            <Image
              src={business}
              alt="modal image"
              className="h-[40px] w-[40px] object-cover"
            />
            <p className="capitalize text-xl">Business set-up</p>
          </div>
          <div className="flex p-4 gap-4 bg-[#2A3F851A] rounded-xl mt-4">
            <Image
              src={passport}
              alt="modal image"
              className="h-[40px] w-[40px] object-cover"
            />
            <p className="capitalize text-xl">Visa support</p>
          </div>
        </div>
        <div className="max-xl:order-2 mx-42 xl:col-span-3 md:px-[60px] rounded-2xl 2xl:px-[70px] py-10 px-4 bg-[#2A3F85] text-white">
          {/* select  */}
          <h2 className="md:text-[22px] text-lg font-bold mb-2">
            Book a Concierge Consultation
          </h2>
          <h3 className="md:text-lg text-base mb-10">
            leave your request and we will find a solution.
          </h3>
          <div className="flex  flex-col gap-3 xl:gap-6 mb-6 ">
            <div className="flex justify-center max-xl:flex-wrap">
              <div className=" w-full xl:basis-1/2">
                <label className="text-center text-base md:text-xl font-light font-inter leading-[32px]">
                  Name
                </label>
                <br />
                <div className="relative w-full xl:w-fit mt-2">
                  <input
                    placeholder="Your name"
                    name="name"
                    type="text"
                    defaultValue={formik.values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="cus w-full focus:outline-none bg-transparent 3xl:w-[320px] sm:w-[270px] w-[220px] h-[70px] border rounded-xl text-base md:text-xl font-medium font-inter ps-7 appearance-none"
                  />
                </div>
                <p className="text-red-500 text-sm">
                  {(formik.errors.name as any) &&
                    formik.touched.name &&
                    formik.errors.name}
                </p>
              </div>
              <div className=" w-full xl:basis-1/2">
                <label className="text-center text-base md:text-xl font-light font-inter leading-[32px]">
                  Phone number
                </label>
                <br />
                <div className="relative w-full xl:w-fit mt-2">
                  <input
                    placeholder="Phone number"
                    type="text"
                    name="phone"
                    defaultValue={formik.values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // className="h-14 w-full  rounded-2xl border border-white calc_inputs bg-transparent"
                    className=" w-full focus:outline-none bg-transparent 3xl:w-[320px] sm:w-[270px] w-[220px] h-[70px] border rounded-xl text-base md:text-xl font-medium font-inter ps-7 appearance-none"
                  />
                </div>
                <p className="text-red-500 text-sm">
                  {(formik.errors.phone as any) &&
                    formik.touched.phone &&
                    formik.errors.phone}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 2xl:gap-6 mb-6">
            <div className="flex justify-center max-xl:flex-wrap">
              <div className=" w-full xl:basis-1/2">
                <label className="text-center text-base md:text-xl font-light font-inter leading-[32px]">
                  Email
                </label>
                <br />
                <div className="relative w-full xl:w-fit mt-2">
                  <input
                    name="email"
                    placeholder="Your email"
                    type="text"
                    defaultValue={formik.values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="focus:outline-none bg-transparent 3xl:w-[320px] sm:w-[270px] w-[220px] h-[70px] border rounded-xl text-base md:text-xl font-medium font-inter ps-7 appearance-none"
                  />
                </div>
                <p className="text-red-500 text-sm">
                  {(formik.errors.email as any) &&
                    formik.touched.email &&
                    formik.errors.email}
                </p>
              </div>
              <div className="w-full xl:basis-1/2">
                <label
                  htmlFor="Subject"
                  className="text-center text-base md:text-xl font-light font-inter leading-[32px]"
                >
                  Subject
                </label>
                <br></br>
                <div className="relative w-full xl:w-fit select-arrow mt-2">
                  <select
                    id="Subject"
                    name="subject"
                    defaultValue={formik.values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="custom-select focus:outline-none bg-transparent 3xl:w-[320px] sm:w-[270px] w-[220px] h-[70px] border rounded-xl text-base md:text-xl font-medium font-inter ps-7 "
                  >
                    <option className="text-black" value="Consultation1">Consultation about..</option>
                    <option className="text-black" value="Consultation2">Consultation about..</option>
                  </select>
                </div>
                <p className="text-red-500 text-sm">
                  {(formik.errors.subject as any) &&
                    formik.touched.subject &&
                    formik.errors.subject}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              onClick={handleSubmit}
              className="w-32 md:w-[164px] h-[68px] text-[#3d55a3] rounded-2xl bg-white text-base md:text-lg font-medium font-inter"
            >
              {isSending ? "Sending ..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
