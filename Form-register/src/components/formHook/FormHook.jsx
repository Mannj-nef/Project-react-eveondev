import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";
import CheckBox from "../checkbox/CheckBox";
import DropdownHook from "../dropdown/DropdownHook";

const jobs = [
  {
    id: 1,
    job: "Frontend developer",
  },
  {
    id: 2,
    job: "Backend developer",
  },
  {
    id: 3,
    job: "Fullstack developer",
  },
];

const schema = Yup.object({
  username: Yup.string()
    .required("Please enter your username")
    .min(2, "Must be 2 characters or more"),
  password: Yup.string()
    .required("Please enter your password")
    .min(2, "Must be 2 characters or more")
    .matches(),
  email: Yup.string()
    .email("please enter validity email")
    .required("Please enter your Email address"),
  gender: Yup.string()
    .required("please choose your gender")
    .oneOf(["male", "female"], "Can only choose male or female"),
  terms: Yup.boolean("check").required("please choose your gender"),
});

const FormHook = () => {
  const { handleSubmit, control, formState, reset, setValue } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors, isSubmitting } = formState;

  const handleSubmitForm = (values) => {
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver();
        console.log(values);
        reset();
      }, 2000);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="border border-white rounded-lg m-auto mt-10 p-[50px] max-w-[450px] w-full flex flex-col"
      autoComplete="off"
    >
      <div className="flex flex-col gap-[5px] mt-[15px]">
        <label
          className="font-medium text-lg cursor-pointer"
          htmlFor="username"
        >
          Username
        </label>

        <InputHook
          placeholder="Enter your username"
          control={control}
          name="username"
          id="username"
        ></InputHook>
        {errors?.username && (
          <p className="text-[#E74C3C] select-none">
            {errors.username.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-[5px] mt-[15px]">
        <label
          className="font-medium text-lg cursor-pointer"
          htmlFor="password"
        >
          Password
        </label>

        <InputHook
          placeholder="Enter your password"
          control={control}
          name="password"
          id="password"
        ></InputHook>
        {errors?.password && (
          <p className="text-[#E74C3C] select-none">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-[5px] mt-[15px]">
        <label className="font-medium text-lg cursor-pointer" htmlFor="email">
          Email address
        </label>

        <InputHook
          placeholder="Enter your Email address"
          control={control}
          name="email"
          id="email"
        ></InputHook>
        {errors?.email && (
          <p className="text-[#E74C3C] select-none">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-[5px] mt-[15px]">
        <label className="font-medium text-lg cursor-pointer" htmlFor="email">
          Gender
        </label>
        <div className="flex gap-5">
          <RadioHook
            name="gender"
            label="Male"
            control={control}
            value="male"
          ></RadioHook>
          <RadioHook
            name="gender"
            label="Female"
            control={control}
            value="female"
          ></RadioHook>
        </div>
        {errors?.gender && (
          <p className="text-[#E74C3C] ">{errors.gender.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-[5px] mt-[15px]">
        <label className="font-medium text-lg cursor-pointer" htmlFor="email">
          Are you
        </label>
        <div className="flex gap-5">
          <DropdownHook
            control={control}
            name="job"
            dataJob={jobs}
            setValue={setValue}
          ></DropdownHook>
        </div>
        {errors?.gender && (
          <p className="text-[#E74C3C] ">{errors.gender.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-[5px] mt-[15px]">
        <CheckBox name="terms" control={control}>
          <p>I accept the terms and conditions</p>
        </CheckBox>
        {errors?.terms && (
          <p className="text-[#E74C3C] ">{errors.terms.message}</p>
        )}
      </div>

      <button
        className="p-3 text-white bg-[#2979FF] font-bold mt-6 rounded"
        type="submit"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 rounded-full border-2 animate-spin m-auto border-t-transparent"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default FormHook;
