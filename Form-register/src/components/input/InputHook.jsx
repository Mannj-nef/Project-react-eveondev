import React from "react";
import { useController } from "react-hook-form";
import "./style.scss";

const InputHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input className="p-[15px] rounded input-coltrol" {...props} {...field} />
  );
};

export default InputHook;
