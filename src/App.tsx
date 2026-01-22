import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CallBack from "./components/CallBack";
import ScrollToTop from "./helpers/ScrollToTop";
import { useEffect } from "react";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<CallBack />} />
      </Routes>
      <Footer />
      <div className="copyright">
        <p>© Copyright 2025 - Longevity Lounge All Rights Reserved.</p>
      </div>
    </>
  );
};

export default App;
