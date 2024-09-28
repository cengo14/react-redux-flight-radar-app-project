import React from "react";
import { BiSolidError } from "react-icons/bi";

const Error = ({ error }) => {
  console.log(error);

  return (
    <div className="h-100 d-flex justify-content-center align-items-center text-light">
      <BiSolidError size={120} color="red" />
      {error}
    </div>
  );
};

export default Error;
