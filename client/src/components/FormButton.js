import React from "react";

const FormButton = ({ children, ...rest }) => {
  return (
    <div className="flex flex-wrap -mx-3 mt-6">
      <div className="w-full px-3">
        <button
          {...rest}
          className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default FormButton;
