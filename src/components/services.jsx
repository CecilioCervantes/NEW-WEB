import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Apply to Our Winning Telemarketing Team</h2>
          <p>
            We’re hiring closers. If you’ve got hustle, we’ll handle the rest—training, hot storm leads, daily bonuses, and uncapped commission. No experience? We’ll coach you. Already crushing it? We’ll outpay your current gig and throw in a welcome bonus. Show up, plug in, and start earning fast.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <div className="icon-wrapper">
                    <i className={d.icon}></i>
                    <span className="badge-spot">
                      {d.name === "Telemarketing Agents" && "37 openings"}
                      {d.name === "Sales Supervisors" && "3 openings"}
                      {d.name === "Campaign Builder" && "1 opening"}
                    </span>
                  </div>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        {/* 🚀 CTA Button */}
        <div className="mt-4">
          <a
            href="#contact"
            className="btn btn-custom btn-lg page-scroll btn-cta-services"
          >
            🚀 Apply Now – Start This Week!
          </a>
        </div>
      </div>
    </div>
  );
};
