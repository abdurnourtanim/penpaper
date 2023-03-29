import React, { useState } from "react";
import avatar from "../assets/avatar.png";
import convertToBase64 from "../helper/convert";

const UserAvatar = ({ userPhoto }) => {
  const [file, setFile] = useState();

  const fileUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
      <div className="relative">
        <label htmlFor="profile">
          <img
            alt="user"
            src={userPhoto || file || avatar}
            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 cursor-pointer"
            style={{ maxWidth: "150px" }}
          />
        </label>
        <input
          onChange={fileUpload}
          type="file"
          name="profile"
          id="profile"
          hidden
        />
      </div>
    </div>
  );
};

export default UserAvatar;
