import { useField } from "formik";
import React, { useEffect, useRef, useState } from "react";
import useClickOutSize from "../../hooks/useClickOutSize";
import "./style.scss";

const DropdownFormik = ({ label: initLabel, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [label, setlabel] = useState(initLabel);
  const selectJobRef = useRef(null);
  const { isShow, setShow } = useClickOutSize(selectJobRef);

  const handleSelectJob = (e) => {
    setShow(false);
    const target = e.target;
    helpers.setValue(target.dataset.value);
    setlabel(target.textContent);
  };

  console.log("meta", meta);
  console.log("field", field);

  useEffect(() => {
    if (field.value === "") setlabel(initLabel);
  }, [field.value]);
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

      {meta.touched && meta.error && (
        <p className="text-[#E74C3C] select-none">{meta.error}</p>
      )}
    </div>
  );
};

export default DropdownFormik;
