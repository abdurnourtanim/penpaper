import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { updateUser } from "../components/services/auth.service";
import UpdateForm from "../components/UpdateForm";

const Update = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");

  const { userId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateUser({
      userId,
      username,
      phone,
      photo,
    });

    navigate(`/profile/${userId}`);
    alert("profile update successfull");
  };

  const updateState = {
    username,
    setUsername,
    phone,
    setPhone,
    handleSubmit,
    photo,
    setPhoto,
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Update your information.</h1>
              </div>

              <div className="max-w-sm mx-auto w-full">
                <UpdateForm updateState={updateState} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Update;
