import React, { useEffect, useRef, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSize from "../../hooks/useClickOutSize";
import "./style.scss";

const DropdownHook = ({ control, setValue, ...props }) => {
  const selectJobRef = useRef(null);
  const { isShow, setShow } = useClickOutSize(selectJobRef);

  const jobDropdown = useWatch({
    control,
    defaultValue: "",
    name: props.name,
  });

  const handleSelectJob = (e) => {
    setValue(props.name, e.target.textContent);
  };

  return (
    <div className="w-full cursor-pointer select-none">
      <div
        ref={selectJobRef}
        onClick={() => setShow(true)}
        className=" w-full bg-white rounded p-[15px]"
      >
        {jobDropdown || "Select your job"}
      </div>
      {props.dataJob?.map((item) => (
        <div
          className={` w-full mt-[5px] bg-white rounded p-[15px] ${
            isShow ? "block" : "hidden"
          }`}
          key={item.id}
          onClick={handleSelectJob}
        >
          {item.job}
        </div>
      ))}
    </div>
  );
};

export default DropdownHook;
