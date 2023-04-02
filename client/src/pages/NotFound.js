import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "../assets/page-error.png";

const NotFound = () => {
  return (
    <div className="bg-[#25293c] text-white w-full h-100 flex justify-center items-center flex-col  pb-5">
      <h2 className="text-6xl">Page Not Found</h2>
      <p className="text-xl">
        Oops! 😖 The requested URL was not found on this server.
      </p>
      <Link to="/" className="p-3 mt-5 mb-5 rounded bg-[#17aec8]">
        Back to home
      </Link>
      <img className="p-10" src={ErrorImg} alt="page-error" />
    </div>
  );
};

export default NotFound;
