import React from "react";
import { Formik } from "formik";
import InputFornik from "../input/InputFornik";
import { schema } from "../../constants/validateYup";
import RadioFormik from "../radio/RadioFormik";
import CheckBoxFormik from "../checkbox/CheckBoxFormik";
import DropdownFormik from "../dropdown/DropdownFormik";

const jobs = [
  {
    id: 1,
    job: "Frontend developer",
    value: "fe",
  },
  {
    id: 2,
    job: "Backend developer",
    value: "be",
  },
  {
    id: 3,
    job: "Fullstack developer",
    value: "fs",
  },
];

const FormFormik = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        email: "",
        gender: "male",
        job: "",
        terms: false,
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
          resetForm();
        }, 2000);
      }}
    >
      {(formik) => {
        const watchRadioChecked = formik.values.gender;
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="border border-white rounded-lg m-auto mt-10 p-[50px] max-w-[450px] w-full flex flex-col"
            autoComplete="off"
          >
            <InputFornik
              name="username"
              placeholder="Enter your username"
              lable="Username"
            ></InputFornik>
            <InputFornik
              name="password"
              placeholder="Enter your password"
              lable="Password"
            ></InputFornik>
            <InputFornik
              name="email"
              placeholder="Enter your Email Address"
              lable="Email Address"
            ></InputFornik>
            <div className="flex flex-col gap-[5px] mt-[15px]">
              <label className="font-medium text-lg cursor-pointer">
                Gender
              </label>
              <div className="flex gap-5">
                <RadioFormik
                  label="Male"
                  name="gender"
                  value="male"
                  checked={watchRadioChecked === "male"}
                ></RadioFormik>
                <RadioFormik
                  label="Female"
                  name="gender"
                  value="female"
                  checked={watchRadioChecked === "female"}
                ></RadioFormik>
              </div>
            </div>
            <div className="flex flex-col gap-[5px] mt-[15px]">
              <label
                className="font-medium text-lg cursor-pointer"
                htmlFor="email"
              >
                Are you
              </label>
              <div className="flex gap-5">
                <DropdownFormik
                  dataJob={jobs}
                  label="Select your job"
                  name="job"
                ></DropdownFormik>
              </div>
              <div className="flex flex-col gap-[5px] mt-[15px]">
                <CheckBoxFormik name="terms">
                  <p>I accept the terms and conditions</p>
                </CheckBoxFormik>
              </div>
            </div>
            <button
              type="submit"
              className="p-3 text-white bg-[#2979FF] font-bold mt-6 rounded"
            >
              {formik.isSubmitting ? (
                <div className="w-5 h-5 rounded-full border-2 animate-spin m-auto border-t-transparent"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default FormFormik;
