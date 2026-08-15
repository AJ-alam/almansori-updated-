import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Lenis from "lenis";
import Footer from "./components/Footer";
import About from "./pages/About";
import ServiceDetail from "./pages/ServiceDetail";
import ContactPage from "./pages/ContactPage";
import OffersPage from "./pages/OffersPage";
const App = () => {
  const lenis = new Lenis({
    autoRaf: true,
  });

  lenis.on("scroll", () => {
  });
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/services/:slug/:subSlug" element={<ServiceDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/offers" element={<OffersPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
