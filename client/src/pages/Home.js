import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Features from "../components/Features";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const navigate = useNavigate();

  const route = () => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  };

  useEffect(() => {
    if (!route()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <HeroHome />
        <Features />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
