import "./style.scss";

import Navbar from "../component/navbar";
import MainBG from "../img/mainBG.jpg";
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
        <img className="mainBg" src={MainBG} alt="mainBG" />
        <div className="displayWrap">
          <div className="title">MOVE LIKE A HUMAN</div>
          <div className="btnWrap">
            <button>BOOK NOW</button>
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
              our method is to build a custom plan based on your health,
              schedule and most importantly, your goals. we'll guide you through
              our proven system of creating a healthier, happier and more
              confident version of yourself
            </p>
            <h1>Move to your Max</h1>
          </div>
          <div className="smallBoxes">
            {services.map((s, i) => {
              return (
                <div className="box" key={i}>
                  <div className="content">
                    <div className="checked">
                      <Checked />
                    </div>
                    <h3>{s}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*///////////// third part ///////////// */}
      <div className="clientReview">
        <Review />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
