import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features.jsx";
import Testimonial from "../components/Testimonial";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Features />
        <Testimonial />
        <CallToAction />
        <Footer />
    </div>
  )
}
