import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features.jsx";
import Testimonial from "./components/Testimonial";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Register from "./components/Auth/Register";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
