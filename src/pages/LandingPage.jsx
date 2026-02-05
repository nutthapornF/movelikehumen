import "./style.scss";

import Navbar from "../component/navbar";
import MainBG from "../img/mainBG.jpg";
import movelikeahumanBg from "../img/yellowIshMain.JPG";
import Review from "../component/review";
import Footer from "../component/footer";
import { Checked } from "../icons/checked";

const LandingPage = () => {
  const services = [
    "M2T BLADE THERAPY",
    "STRENGTH TRAINING",
    "MOBILITY",
    "ONLINE PERSONAL TRAINING",
    "NUTRITION GUIDELINE",
    "AND MORE",
  ];

  return (
    <div className="landingPageWraper">
      <Navbar />
      <div className="main">
        {/* <iframe
          width="100%"
          height="750px"
          src="https://www.youtube.com/embed/nsKqaDSNt6U?si=MWNiuLESCYeNgYRd&amp;controls=0&amp;start=8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe> */}
        <img className="mainBg" src={movelikeahumanBg} alt="mainBG" />
        <div className="displayWrap">
          <div className="title"> MOVE LIKE A HUMAN</div>
          <div className="btnWrap">
            <button>
              {" "}
              <a href="https://lin.ee/S7P034e"> BOOK NOW </a>
            </button>
          </div>
        </div>
      </div>
      {/*///////////// second part ///////////// */}
      <div className="secondPart">
        <div className="boxWrapper">
          <div className="mainbox">
            <p className="p1">
              Everybody is unique, with their own strengths, limitations and
              schedules . Therefore, as a professional trainer, our passion is
              to guide you towards a healthier lifestyle. we understand the
              difficulties and challenges of balancing your lifestyle to a
              healthier lifestyle.
            </p>
            <br />
            <p className="p2">
              our method is to build a custom plan based on your schedule, goals
              ,and most importantly, your health. we'll guide you through our
              proven system of creating a healthier, happier and more confident
              version of yourself
            </p>
            <h1>Move to your Max</h1>
          </div>
          <div className="smallBoxes">
            {services.map((s, i) => {
              return (
                <div className="outerbox" key={i}>
                  <div className="box">
                    <div className="content">
                      <div className="checked">
                        <Checked />
                      </div>
                      <h3>{s}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*///////////// third part ///////////// */}
      <div className="clientReview">
        <div className="reviewLine"></div>
        <Review />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
