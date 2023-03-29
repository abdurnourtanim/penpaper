import React from "react";
import avatar from "../assets/avatar.png";
import convertToBase64 from "../helper/convert";
import FormButton from "./FormButton";
import Input from "./Input";

const UpdateForm = ({ updateState }) => {
  const {
    username,
    setUsername,
    phone,
    setPhone,
    handleSubmit,
    photo,
    setPhoto,
  } = updateState;

  const fileUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setPhoto(base64);
  };

  return (
    <form className="flex items-center flex-col">
      <label className="mb-24 flex" htmlFor="profile">
        <img
          alt="user"
          src={photo || avatar}
          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 cursor-pointer"
          style={{ maxWidth: "150px" }}
        />
        <input
          onChange={fileUpload}
          type="file"
          name="profile"
          id="profile"
          hidden
        />
      </label>
      <span>Change profile picture</span>
      <Input
        value={username}
        setValue={setUsername}
        name="name"
        placeholder="Change your name"
      />
      <Input
        type="text"
        value={phone}
        setValue={setPhone}
        name="phone"
        placeholder="Change your phone number"
      />

      <FormButton onClick={handleSubmit} type="button">
        Update
      </FormButton>

      <div className="text-sm text-gray-500 text-center mt-3">
        By creating an account, you agree to the
        <a className="underline" href="#0">
          terms & conditions
        </a>
        , and our
        <a className="underline" href="#0">
          privacy policy
        </a>
        .
      </div>
    </form>
  );
};

export default UpdateForm;
