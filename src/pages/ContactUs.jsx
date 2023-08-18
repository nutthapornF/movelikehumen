import "./style.scss";
import { useState } from "react";
import gymMap from "../img/gymMap.png";
import LineQR from "../img/LineQr.png";

import Navbar from "../component/navbar";

const ContactUs = () => {
  // console.log(galleryPhoto);
  return (
    <>
      <Navbar />
      <div className="contactUs ">
        <div className="contactContent">
          <div className="header">
            <h1>Contact Us</h1>

            <p className="contexttext">
              We are more than happy to help in anyway we can. Reach out to us
              through Line or our social media channels.
            </p>
          </div>
          <div className="mapimg">
            <img src={gymMap} alt="gymMap" />
          </div>
          <div className="contact">
            <div className="left">
              <p>Call : 0867623217</p>
              <p>Line : @Movelikeahuman</p>
            </div>
            <div className="right">
              <img src={LineQR} alt="Line QR code" />
            </div>
          </div>
          <div className="hours">
            <h1>Open everyday : Reserveation Only</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
