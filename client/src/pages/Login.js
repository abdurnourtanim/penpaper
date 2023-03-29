import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import OrLine from "../components/OrLine";
import SwitchPage from "../components/SwitchPage";
import { loginAction } from "../container/actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const route = () => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  };

  useEffect(() => {
    if (route()) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      email,
      password,
    };

    const login = dispatch(loginAction(userInfo));
    login
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.err);
      });
  };

  const loginState = {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    error,
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
                  Welcome back. We exist to make entrepreneurism easier.
                </h1>
              </div>

              <div className="max-w-sm mx-auto">
                <LoginForm loginState={loginState}></LoginForm>
                <OrLine />
                <GoogleLogin />
                <SwitchPage to="/signup">Don't you have an account?</SwitchPage>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
