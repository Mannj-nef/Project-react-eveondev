import React from "react";
import { useField } from "formik";

const InputFornik = ({ lable, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-[5px] mt-[15px]">
      {lable && (
        <label
          className="font-medium text-lg cursor-pointer"
          htmlFor={props.name || props.id}
        >
          {lable}
        </label>
      )}
      <input className="p-[15px] rounded input-coltrol" {...props} {...field} />
      {meta.touched && meta.error && (
        <p className="text-[#E74C3C] select-none">{meta.error}</p>
      )}
    </div>
  );
};

export default InputFornik;
