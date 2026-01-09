import React from "react";

function Features() {
  const items = ["Fast Load", "Responsive", "Easy Setup"];
  return (
    <section id="features" className="py-5">
      <div className="container">
        <div className="row g-4">
          {items.map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="card text-center h-100 shadow-sm p-4 border-0">
                <h5>{item}</h5>
                <p className="text-muted">
                  Buyer-friendly clean component design
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
