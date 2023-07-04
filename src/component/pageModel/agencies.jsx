import React, { useEffect } from "react";
import Modelone from "./agencies/IMG-20230507-WA0007.jpg";
import Modelone2 from "./agencies/IMG-20230507-WA0012.jpg";
import Modelone3 from "./agencies/IMG-20230507-WA0013.jpg";
import "./agency.css";
function Agencies() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column" id="column2">
            <div className="image-wrapper" alt="first ">
              <img src={Modelone} />
            </div>
            <div className="text-wrapper">
              <h2>PROFILE ACTIVATED! </h2>
              <p>
                once your profile is actived on the platform you can start
                listings your
                <b>Models</b> on the platform by creating their portfolio and
                start applying to <b>castings</b> (modeling jobs) to connect
                with clients. <b>castings</b> (modeling jobs) to connect with
                clients..
              </p>
            </div>
            <div className="column" id="column2">
              <div className="image-wrapper">
                <img src={Modelone3} alt="image4" />
              </div>
              <div className="text-wrapper">
                <h2>WRITE REVIEWS</h2>
                <p>
                  you can leave reviewws about your experience to help others on
                  our platform to make the best choices when working ,or
                  collaborating with each other.
                </p>
              </div>
            </div>
          </div>

          <div className="column" id="column1">
            <div className="text-wrapper">
              <h2>CREATE YOUR PORTFOLIO</h2>
              <p>
                {" "}
                Premium Models App is a platform for you to advertise yourself
                to clients looking for models for their new projects and also
                create a marketing portoflio for yourself . Simply sign up, pay
                subscription fee and measeurements and add a little about what
                makes you special
              </p>
              <p>
                with your login data , youn access and edit your model portfolio
                from any place,at any time!
              </p>
              <p>Upload your professional photos and update them regularly!</p>{" "}
            </div>
            <div className="image-wrapper">
              <img src={Modelone2} alt="image4" />
            </div>
            <div className="text-wrapper">
              <h2>INCREASED EXPOSURE!</h2>
              <p>
                Verified clients who are looking for models for their projects,
                . can booked your models through their portfolio , Getting your
                models in front of new clients everyday is hard .Take advantage
                of our platform to expose your models to new opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Agencies;
