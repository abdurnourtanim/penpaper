import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileOverlay from "../components/ProfileOverlay";
import UserAvatar from "../components/UserAvatar";
import UserBio from "../components/UserBio";
import UserDetails from "../components/UserDetails";
import { logoutAction } from "../container/actions";

const Profile = () => {
  const [username, setUsername] = useState();
  const [photo, setPhoto] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userId } = useParams();

  useEffect(() => {
    const userData = async () => {
      await axios
        .get(`http://localhost:4000/api/user/${userId}`)
        .then((value) => {
          const { username, photo } = value.data;
          setUsername(username);
          setPhoto(photo);
        })
        .catch((err) => console.log(err));
    };

    userData();
  }, [userId]);

  const route = () => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  };

  useEffect(() => {
    if (!route()) {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    dispatch(logoutAction());
    navigate("/login");
  };

  const user = {
    photo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile-avatar&psig=AOvVaw0C3pbNmA7ap2IaTWbQOR4s&ust=1679461934967000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMif3rGh7P0CFQAAAAAdAAAAABAE",
    name: username || "username",
    collage: "University of Computer Science",
    address: {
      city: "Chattogram",
      country: "Bangladesh",
    },
    company: {
      name: "Coding for KiDs",
      position: "CEO",
    },
  };

  return (
    <>
      <Navbar transparent logout={logout} />
      <main className="profile-page">
        <ProfileOverlay />
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-80">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <UserAvatar userPhoto={photo} />
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32  sm:mt-0">
                      <Button type="button">Connect</Button>

                      <Link
                        className="bg-[#17aec8] hover:bg-[#13a6c0da] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                        to={`/update/${userId}`}
                      >
                        Update
                      </Link>
                    </div>
                  </div>
                  <UserDetails />
                </div>
                <UserBio user={user} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />/
    </>
  );
};

export default Profile;
