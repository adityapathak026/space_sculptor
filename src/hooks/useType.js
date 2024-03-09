import { useState } from "react";

const useType = () => {
  const [type, setType] = useState("password");
  const [ctype, setCType] = useState("password");

  const handlePassword = (type) => {
    setType(type);
  };

  const handleConfirmPassword = (ctype) => {
    setCType(ctype);
  };

  return {
    type,
    handlePassword,
    handleConfirmPassword,
    ctype,
  };
};

export default useType;
