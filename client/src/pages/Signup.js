import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";
import Header from "../components/Header";
import OrLine from "../components/OrLine";
import SignupForm from "../components/SignupForm";
import SwitchPage from "../components/SwitchPage";
import { loginAction, signupAction } from "../container/actions";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const route = () => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  };

  useEffect(() => {
    if (route()) {
      navigate("/login");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
      checkPassword: confirmPassword,
      error,
    };

    const validate = dispatch(signupAction(newUser));

    validate
      .then(() => {
        // navigate("/login");\
        const userInfo = {
          email,
          password,
        };
        const login = dispatch(loginAction(userInfo));
        login
          .then(() => {
            navigate(`/`);
          })
          .catch((error) => {
            setError(error.err);
          });
      })
      .catch((error) => {
        setError(error.data.err);
      });
  };

  const signupState = {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleSubmit,
    error,
    setError,
  };
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  Welcome. We exist to make entrepreneurism easier.
                </h1>
              </div>

              <div className="max-w-sm mx-auto">
                <SignupForm signupState={signupState} />
                <OrLine />
                <GoogleLogin />
                <SwitchPage to="/login">Already using Simple?</SwitchPage>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Signup;
