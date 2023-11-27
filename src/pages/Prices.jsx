import { LazyLoadImage } from "react-lazy-load-image-component";

import "./style.scss";
import Navbar from "../component/navbar";
import packages from "../datas/prices.json";
import Footer from "../component/footer";
import promotionImg from "../img/promotionImg.jpg";
import promotionPricedImg from "../img/promotionPriceImg.jpg";
import blackFridayPromoton from "../img/blackFridayPromotion.png";
import blackFridayPromoton2 from "../img/blackFridayPromotion2.JPG";

const PricePage = () => {
  // console.log(packages.PriveteSession);
  return (
    <>
      <Navbar />
      <div className="pricePageWraper">
        <div className="header">Choose Your Plan</div>
        <div className="promotion">
          {/* <div className="special">
            <div className="specialOffer">
              <h1>PERSONAL</h1>
              <h1>TRAINING</h1>
              <h2>TRIAL</h2>
              <h3 className="discountPrice">
                999 <span>THB</span>{" "}
              </h3>
              <div className="oldPricewDash">
                <h3 className="discountPrice oldPrice">
                  1800 <span>THB</span>{" "}
                </h3>
                <div className="dash"></div>
              </div>
              <div className="validuser">
                ** Valid for 1 user - First time only
              </div>
            </div>
          </div> */}
          <LazyLoadImage
            src={promotionPricedImg}
            // width={600}
            // height={400}
            alt="promotion"
            effect="blur"
            className="promotionImg"
          />
          <LazyLoadImage
            src={blackFridayPromoton}
            alt="promotion"
            effect="blur"
            className="promotionImg"
          />
          <LazyLoadImage
            src={blackFridayPromoton2}
            alt="promotion"
            effect="blur"
            className="promotionImg"
          />
          {/* <img src={promotionImg} alt="promotion" /> */}
        </div>
        <h2 className="privateSessionHeader">Private Training</h2>
        <div className="boxWrap PriveteSession">
          {packages.PriveteSession?.map((p, i) => {
            return (
              <div key={i}>
                <PrizeBox
                  amountSession={p.sessionsAmount}
                  price={p.price}
                  pricePerHour={p.pricePerSession}
                  validsation={p.validation}
                />
              </div>
            );
          })}
        </div>
        {/* Semi private */}
        <h2 className="SemiPrivatex2Header">Semi Private Training x2</h2>
        <div className="boxWrap SemiPrivatex2">
          {packages.SemiPrivatex2?.map((p, i) => {
            return (
              <div key={i}>
                <PrizeBox
                  amountSession={p.sessionsAmount}
                  price={p.price}
                  pricePerHour={p.pricePerSession}
                  validsation={p.validation}
                />
              </div>
            );
          })}
        </div>
        {/* x3 simi private */}
        <h2 className="SemiPrivatex3Header">Semi Private Training x3</h2>
        <div className="boxWrap SemiPrivatex3">
          {packages.SemiPrivatex3?.map((p, i) => {
            return (
              <div key={i}>
                <PrizeBox
                  amountSession={p.sessionsAmount}
                  price={p.price}
                  pricePerHour={p.pricePerSession}
                  validsation={p.validation}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricePage;

const PrizeBox = ({ amountSession, price, pricePerHour, validsation, key }) => {
  return (
    <div className="contentBox">
      <div className="upper">
        <div className="classType">{amountSession}</div>
        <div className="price">{price}</div>
        <div className="dummyText">
          {pricePerHour} / session
          <p>**{validsation}** </p>
        </div>
      </div>

      {/* <button className="bookBtn">LET'S DO IT</button> */}
    </div>
  );
};
