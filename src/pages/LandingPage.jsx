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
            <h1>Move to your Max</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem vel odio, fugit nobis, nostrum perferendis temporibus
              perspiciatis veritatis deleniti enim reprehenderit consectetur est
              ea harum error aut atque inventore earum. Lorem, ipsum dolor sit
              adolore ipsum. Consequuntur doloremque illum blanditiis
              reprehenderit.{" "}
            </p>
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
