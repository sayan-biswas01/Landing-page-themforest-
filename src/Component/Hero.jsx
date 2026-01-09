import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="py-5 bg-light" style={{ marginTop: "70px" }}>
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="fw-bold display-5">High Converting Landing Page</h1>
            <p className="lead text-muted">
              Perfect for SaaS, Startup & App Products
            </p>
            <a className="btn btn-primary btn-lg mt-3" href="#pricing">
              Get Started
            </a>
          </motion.div>
          <motion.div
            className="col-lg-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img className="img-fluid" alt="Preview" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
