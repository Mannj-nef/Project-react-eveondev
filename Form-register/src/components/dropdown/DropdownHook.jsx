import React, { useEffect, useRef, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSize from "../../hooks/useClickOutSize";
import "./style.scss";

const DropdownHook = ({ control, setValue, defaultLabel, ...props }) => {
  const selectJobRef = useRef(null);
  const { isShow, setShow } = useClickOutSize(selectJobRef);
  const [label, setLable] = useState(defaultLabel);

  const dropdownValue = useWatch({
    control,
    defaultValue: "",
    name: props.name,
  });

  useEffect(() => {
    if (dropdownValue === "") {
      setLable(defaultLabel);
    }
  }, [dropdownValue]);

  const handleSelectJob = (e) => {
    setValue(props.name, e.target.dataset.value);
    setLable(e.target.textContent);
  };

  return (
    <div className="w-full cursor-pointer select-none">
      <div
        ref={selectJobRef}
        onClick={() => setShow(true)}
        className=" w-full bg-white rounded p-[15px]"
      >
        {label}
      </div>
      {props.dataJob?.map((item) => (
        <div
          className={` w-full mt-[5px] bg-white rounded p-[15px] ${
            isShow ? "block" : "hidden"
          }`}
          key={item.id}
          onClick={handleSelectJob}
          data-value={item.value}
        >
          {item.job}
        </div>
      ))}
    </div>
  );
};

export default DropdownHook;
