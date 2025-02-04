/* eslint-disable @typescript-eslint/no-explicit-any */
import img_modal from "@/assets/images/modalImg.png";
import { useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
import actions from "@/app/components/utility/apiActions";
import RangeSlider from "../../utility/RangeSlider";

export default function ModalReport() {
  const { handleReportEmail } = actions();
  const [isSending, setIsSending] = useState(false);
  const phoneRegex = /^(\+?\d{1,4}[\s-]?)?(\(?\d{3}\)?[\s-]?)?[\d\s-]{7,10}$/;

  const initialValues: any = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    location: "uae",
    investment: "invest1",
    startRange: 80000,
    endRange: 600000,
    code: "+971",
  };

  const formik = useFormik({
    initialValues: initialValues as any,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: false,
    validate: (values) => {
      const errors: any = {};
      if (!values.fname || values.fname === "") {
        errors.fname = "First Name is required!";
      }
      if (!values.lname || values.lname === "") {
        errors.lname = "Last Name is required!";
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
    onSubmit: async () => {},
  });

  const handleSubmit = async (e: any) => {
    // setIsSubmetted(true);
    formik.setTouched({ fname: true, lname: true, email: true, phone: true });
    const values = formik.values;
    e.preventDefault();
    const validationErrors = await formik.validateForm();
    if (Object.keys(validationErrors).length > 0) {
      // setErrors(validationErrors);
      return;
    } else {
      setIsSending(true);
      handleReportEmail(values).then(() => {
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
      <div className="w-full 3xl:h-[680px] h-[600] grid grid-cols-1 md:grid-cols-5 rounded-2xl overflow-y-scroll	lg:overflow-y-auto ">
        <div className="md:order-1 order-2 mx-42 md:col-span-3 sm:px-12 px-4 py-6 lg:mt-0 md:-mt-32 -mt-12 ">
          {/* select  */}
          <div className="flex flex-col gap-3 2xl:gap-6 mb-4 ">
            <div className="flex justify-center max-xl:flex-wrap">
              <div className=" w-full xl:basis-1/2">
                <label className="text-center text-primary text-base md:text-xl font-light font-inter leading-[32px]">
                  Name
                </label>
                <br />
                <div className="relative w-full xl:w-fit mt-1">
                  <input
                    placeholder="Your name"
                    type="text"
                    value={formik.values.fname}
                    name="fname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="cus 3xl:w-[320px] sm:w-[270px] w-[220px] h-[70px] border-2 border-primary rounded-xl text-primary text-base md:text-xl font-medium font-inter ps-7 appearance-none"
                  />
                </div>
                <p className="text-red-500 text-sm">
                  {(formik.errors.fname as any) &&
                    formik.touched.fname &&
                    formik.errors.fname}
                </p>
              </div>
              <div className=" w-full xl:basis-1/2">
                <label className="text-center text-primary text-base md:text-xl font-light font-inter leading-[32px]">
                  Last name
                </label>
                <br />
                <div className="relative w-full xl:w-fit mt-1">
                  <input
                    placeholder="Your last name"
                    type="text"
                    name="lname"
                    value={formik.values.lname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="cus 3xl:w-[320px] sm:w-[270px] w-[220px] h-[70px] border-2 border-primary rounded-xl text-primary text-base md:text-xl font-medium font-inter ps-7 appearance-none"
                  />
                </div>
                <p className="text-red-500 text-sm">
                  {(formik.errors.lname as any) &&
                    formik.touched.lname &&
                    formik.errors.lname}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 2xl:gap-6 mb-4">
            <div className="flex justify-center max-xl:flex-wrap">
              <div className=" w-full xl:basis-1/2">
                <label className="text-center text-primary text-base md:text-xl font-light font-inter leading-[32px]">
                  Phone number
                </label>
                <br />
                <div className="relative h-[70px] w-[340px] xl:w-fit mt-1">
                  <input
                    placeholder="000 - 000 - 000"
                    type="text"
                    name="phone"
                    defaultValue={formik.values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // className="h-14 w-full  rounded-2xl border border-white calc_inputs bg-transparent"
                    className="absolute 3xl:w-[240px] sm:w-[190px] top-0 sm:left-[80px] left-[50px] h-[70px] sm:ps-[24px] ps-[30px] border-2 border-primary rounded-xl text-primary text-base md:text-xl font-medium font-inter appearance-none"
                  />
                  <div className="absolute top-0 left-0 sm:w-[100px] w-[70px] h-[70px]  select-arrow">
                    <select
                      name="code"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={formik.values.code}
                      //   onChange={(e) => setSelectedCategory(e.target.value)}
                      // className=" calc_inputs  bg-transparent border-l border-[#ADADAD] rounded-xl focus:outline-none "
                      className="custom-select w-full px-3  py-3 h-full border-2 border-primary rounded-xl text-primary text-sm md:text-xl font-medium font-inter appearance-none"
                    >
                      <option value="+971">+971</option>
                    </select>
                  </div>
                </div>
                <p className="text-red-500 text-sm">
                  {(formik.errors.phone as any) &&
                    formik.touched.phone &&
                    formik.errors.phone}
                </p>
              </div>
              <div className=" w-full xl:basis-1/2">
                <label className="text-center text-primary text-base md:text-xl font-light font-inter leading-[32px]">
                  Email
                </label>
                <br />
                <div className="relative w-full xl:w-fit mt-1">
                  <input
                    placeholder="Your email"
                    type="text"
                    name="email"
                    defaultValue={formik.values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="cus 3xl:w-[320px] sm:w-[270px] w-[220px] h-[70px] border-2 border-primary rounded-xl text-primary text-base md:text-xl font-medium font-inter ps-7 appearance-none"
                  />
                </div>
                <p className="text-red-500 text-sm">
                  {(formik.errors.email as any) &&
                    formik.touched.email &&
                    formik.errors.email}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 2xl:gap-4 ">
            <div className="flex justify-center max-xl:flex-wrap">
              <div className="w-full xl:basis-1/2 ">
                <label
                  htmlFor="Location"
                  className="text-center text-primary text-base md:text-xl font-light font-inter leading-[32px]"
                >
                  Location
                </label>
                <br></br>
                <div className="relative w-full xl:w-fit  mt-1">
                  <select
                    id="Location"
                    name="location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={formik.values.location}
                    className="custom-select 3xl:w-[320px] sm:w-[270px] w-[220px] h-[70px] border-2 border-primary rounded-xl text-primary text-base md:text-xl font-medium font-inter ps-7 "
                  >
                    <option value="uae">UAE</option>
                    <option value="usa">USA</option>
                  </select>
                </div>
              </div>
              <div className="w-full xl:basis-1/2">
                <label
                  htmlFor="investment"
                  className="text-center text-[#293f84] text-base md:text-xl  font-light font-inter leading-[32px]"
                >
                  Investment interests
                </label>
                <br></br>
                <div className="relative w-full xl:w-fit mt-1">
                  <select
                    id="investment"
                    name="investment"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={formik.values.investment}
                    className="custom-select 3xl:w-[320px] sm:w-[270px] w-[220px] h-[70px] border-2 border-primary rounded-xl text-primary text-base md:text-xl font-medium font-inter ps-7 "
                  >
                    <option value="invest1">Investment 1</option>
                    <option value="invest2">Investment 2</option>
                  </select>
                </div>
              </div>
            </div>
            <h3 className=" text-left text-[#293f84] text-base md:text-xl font-light font-inter leading-[62px]">
              Budget range
            </h3>
            <div className="mt-14">
              <RangeSlider
                setEndRange={(val: number) =>
                  formik.setFieldValue("endRange", val)
                }
                setStartRange={(val: number) =>
                  formik.setFieldValue("startRange", val)
                }
              />
            </div>
          </div>
          <div className="flex justify-end -mt-6">
            <button
              onClick={handleSubmit}
              className="w-32 md:w-[164px] h-[70px] bg-[#3d55a3] rounded-2xl text-white text-base 2xl:text-lg font-medium font-inter"
            >
              {isSending ? "Sending ..." : "Send"}
            </button>
          </div>
        </div>
        <div className="md:col-span-2 md:order-2 order-1 max-xl:h-3/4 ">
          <Image
            src={img_modal}
            alt="modal image"
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </>
  );
}
