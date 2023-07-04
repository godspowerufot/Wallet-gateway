import React, { useEffect } from "react";
import Modelone from "./clients/IMG-20230507-WA0008.jpg";
import Modelone2 from "./clients/IMG-20230507-WA0009.jpg";
import Modelone3 from "./clients/IMG-20230507-WA0010.jpg";
import Modelone4 from "./clients/IMG-20230507-WA0011.jpg";

function Clients() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column" id="column2">
            <div className="image-wrapper" alt="image4">
              <img src={Modelone} />
            </div>
            <div className="text-wrapper">
              <h2>PROFILE VERIFIED </h2>
              <p>
                Once profile is verified by our team, you can now find and book
                models via our <b>model search</b> , or post a Job Job offers
                can be a collaboration shoots, or paid projects. When Models
                apply for your job post, take your time and select the best.
              </p>
            </div>
          </div>

          <div className="column" id="column2">
            <div className="text-wrapper">
              <h2 style={{ textAlign: "left" }}>CREATE YOUR PROFILE </h2>
              <p>
                If you want an easy online way to find models for your next
                project, create your profile, add links to your website and
                social media and enter a short bio about yourself or company.
                You can also upload some examples of your work,{" "}
              </p>
            </div>
            <div className="image-wrapper">
              <img src={Modelone3} alt="image4" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column" id="column1">
            <div className="image-wrapper">
              <img src={Modelone2} alt="image4" />
            </div>
            <div className="text-wrapper">
              <h2> WRITE REVIEWS </h2>
              <p>
                You can leave reviews about your experience to help others on
                our platform to make the best choices when booking, or working
                with each models.
              </p>
            </div>
          </div>
          <div className="column" id="column1">
            <div className="text-wrapper">
              <h2>BOOK WITH EASE</h2>
              <p>
                You can find the perfect model for your job and use our booking
                tools to book your choice of model. Send a job description to
                the model and when the model accept your job offer, pay the fee
                via wallet. All within our safe and trusted platform.
              </p>
            </div>
            <div className="image-wrapper">
              <img src={Modelone4} alt="image4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
