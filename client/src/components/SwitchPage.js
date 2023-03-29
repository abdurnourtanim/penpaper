import React from "react";
import { Link } from "react-router-dom";

const SwitchPage = ({ children, to }) => {
  return (
    <div className="text-gray-600 text-center mt-6">
      {children}
      <Link
        to={to}
        className="text-blue-600 hover:underline transition duration-150 ease-in-out"
      >
        {(to === "/signup" && " Signup ") || (to === "/login" && " Login")}
      </Link>
    </div>
  );
};

export default SwitchPage;
