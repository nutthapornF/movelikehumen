import Map from "../img/map.jpg";

const Footer = () => {
  return (
    <div className="footerWrap">
      <div className="contact">
        <div className="contactsTitle">CONTACT US</div>

        <div className="content">
          <div className="box1">
            <p>Line: @movelikeahuman</p>
            <p>Call : 0903280298</p>
          </div>
          <div className="box2">
            <p>BTS Phromphrong</p>
            <p>Sukhumvit 31</p>
          </div>
          <div className="box3">
            <p>
              พัชรเพลส 45, 1-5 ซอย สวัสดี แขวงคลองเตยเหนือ เขตวัฒนา
              กรุงเทพมหานคร 10110
            </p>
          </div>
        </div>
      </div>
      <div className="map">
        <img src={Map} alt="map" />
      </div>
    </div>
  );
};
export default Footer;
