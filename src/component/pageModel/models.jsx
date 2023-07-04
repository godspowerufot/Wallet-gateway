import React from "react";
import Modelone from "./models/IMG-20230507-WA0002.jpg";
import Modelone2 from "./models/IMG-20230507-WA0003.jpg";

import Modelone3 from "./models/IMG-20230507-WA0004.jpg";
function Models() {
  return (
    <>
      {/* button division*/}
      <div className="container">
        <div className="row">
          <div className="column" id="column2">
            <div className="image-wrapper" alt="image4">
              <img src={Modelone} />
            </div>
            <div className="text-wrapper">
              <h2>PORTFOLIO ACTIVATED! </h2>
              <p>
                once your portfolio is active on the platform you can join the{" "}
                <b>Model Community</b> , or jump straight in and start applying
                to <b>castings</b> (modeling jobs) to connect with clients..
              </p>
              <div className="row">
                <div className="column" id="column2">
                  <div className="image-wrapper">
                    <img src={Modelone3} alt="image4" />
                  </div>
                  <div className="text-wrapper">
                    <h2>WRITE REVIEWS</h2>
                    <p>
                      you can leave reviewws about your experience to help
                      others on our platform to make the best choices when
                      working ,or collaborating with each other{" "}
                    </p>
                  </div>
                </div>
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
              <h2>GET DISCOVERED!</h2>
              <p>
                Verified clients who are looking for models for their projects,
                can message you through your profile , or post online castings
                and invite you to apply. You may also be booked through our
                platform or sent a smart contract , which will secure the
                details for the agreed job or collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Models;
