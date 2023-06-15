import Navbar from "../component/navbar";
import packages from "../datas/prices.json";
import Footer from "../component/footer";

const PricePage = () => {
  console.log(packages.PriveteSession);
  return (
    <>
      <Navbar />
      <div className="pricePageWraper">
        <div className="header">Choose Your Plan</div>
        <h2 className="privateSessionHeader">Private Training</h2>
        <div className="boxWrap PriveteSession">
          {packages.PriveteSession?.map((p) => {
            return (
              <>
                <PrizeBox
                  amountSession={p.sessionsAmount}
                  price={p.price}
                  pricePerHour={p.pricePerSession}
                  validsation={p.validation}
                />
              </>
            );
          })}
        </div>
        {/* Semi private */}
        <h2 className="SemiPrivatex2Header">Semi Private Training x2</h2>
        <div className="boxWrap SemiPrivatex2">
          {packages.SemiPrivatex2?.map((p) => {
            return (
              <>
                <PrizeBox
                  amountSession={p.sessionsAmount}
                  price={p.price}
                  pricePerHour={p.pricePerSession}
                  validsation={p.validation}
                />
              </>
            );
          })}
        </div>
        {/* x3 simi private */}
        <h2 className="SemiPrivatex3Header">Semi Private Training x3</h2>
        <div className="boxWrap SemiPrivatex3">
          {packages.SemiPrivatex3?.map((p) => {
            return (
              <>
                <PrizeBox
                  amountSession={p.sessionsAmount}
                  price={p.price}
                  pricePerHour={p.pricePerSession}
                  validsation={p.validation}
                />
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricePage;

const PrizeBox = ({ amountSession, price, pricePerHour, validsation }) => {
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
