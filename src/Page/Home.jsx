import React from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Features from "../Component/Features";
import Pricing from "../Component/Pricing";
import Footer from "../Component/Footer";
export default function Home() {
  return (
    <div className="font-sans text-slate-800">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
