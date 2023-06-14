import Navbar from "../component/navbar";
const PricePage = () => {
  return (
    <>
      <Navbar />
      <div className="pricePageWraper">
        <div className="header">Choose Your Plan</div>
        <div className="boxWrap">
          {/* map here ?? */}
          <PrizeBox />
          <PrizeBox />
        </div>
      </div>
    </>
  );
};

export default PricePage;

const PrizeBox = () => {
  return (
    <div className="contentBox">
      <div className="upper">
        <div className="classType">Single session</div>
        <div className="price">1800</div>
        <div className="dummyText">
          Book your class and try out something new
        </div>
      </div>

      <button className="bookBtn">LET'S DO IT</button>
    </div>
  );
};
