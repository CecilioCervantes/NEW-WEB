import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>We Hustle. We Celebrate. We Repeat.</h2>
          <p>
            We grind hard—but we celebrate harder. From boat parties and black-tie nights to giving back at orphanages and schools, this crew shows up with heart. New office? We throw down. Big win? We cheer loud. Around here, culture isn’t a perk—it’s the vibe. If you’re all in on ambition, community, and good times, this is your squad.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
