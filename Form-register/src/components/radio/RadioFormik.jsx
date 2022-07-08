import React from "react";
import { useField } from "formik";

const RadioFormik = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <label className="flex items-center gap-3">
      <input
        type="radio"
        checked={props.checked}
        className="w-[20px] h-[20px] border-none outline-none"
        {...field}
        {...props}
      />
      <span className="text-[#999] font-normal cursor-pointer">{label}</span>
    </label>
  );
};

export default RadioFormik;
