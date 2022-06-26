import React from "react";
import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "male",
  });
  return (
    <label className="flex items-center gap-3">
      <input
        type="radio"
        className="w-[20px] h-[20px] border-none outline-none"
        {...field}
        {...props}
      />
      <span className="text-[#999] font-normal cursor-pointer">
        {props.label}
      </span>
    </label>
  );
};

export default RadioHook;
