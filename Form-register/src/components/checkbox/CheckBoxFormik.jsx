import { useField } from "formik";
import React from "react";
import "./style.scss";

const CheckBoxFormik = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={field.value}
          className="input-checkbox hidden"
          {...props}
          {...field}
        />
        <span className="w-5 h-5 rounded-md bg-white border border-[#2979ff] flex items-center justify-center">
          {field.value === true && (
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7453 1.89733L3.93178 9.71087L0.254822 6.03391L1.17132 5.11741L3.93178 7.87137L10.8288 0.980835L11.7453 1.89733Z"
                fill="white"
              />
            </svg>
          )}
        </span>
        {children}
      </label>
      {meta.touched && meta.error && (
        <p className="text-[#E74C3C] select-none">{meta.error}</p>
      )}
    </div>
  );
};

export default CheckBoxFormik;
