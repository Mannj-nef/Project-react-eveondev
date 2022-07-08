import { useEffect, useState } from "react";

export default function useClickOutSize(dome) {
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    const handleCkickOutSize = (e) => {
      const target = e.target;
      const domeNode = dome.current;

      if (domeNode && !domeNode.contains(target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleCkickOutSize);

    return () => document.removeEventListener("click", handleCkickOutSize);
  }, []);
  return { isShow, setShow };
}
