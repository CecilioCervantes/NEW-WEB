import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What It’s Really Like to Work Here</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <div class="google-badge">
           <a 
            href="https://g.co/kgs/uN58VBK" 
            target="_blank">
            ✅ Google us. 190+ 5-star reviews speak for themselves
          </a>
        </div>
      </div>
      
    </div>
  );
};
