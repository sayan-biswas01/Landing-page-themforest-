import React from "react";

function Pricing() {
  return (
    <section id="pricing" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold">One Time Price</h2>
        <div
          className="card mx-auto mt-4 p-4 shadow"
          style={{ maxWidth: "400px" }}
        >
          <h3>$19</h3>
          <p className="text-muted">ThemeForest Regular License</p>
          <a className="btn btn-primary w-100" href="#">
            Purchase
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
