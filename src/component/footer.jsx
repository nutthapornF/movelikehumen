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
        {/* <img src={Map} alt="map" /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.9158886114709!2d100.56569126958593!3d13.738807999165733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f09ccbd3a2b%3A0x776eabe65f552ad0!2sMove%20Like%20A%20Human!5e0!3m2!1sth!2sth!4v1691730192729!5m2!1sth!2sth"
          width="360"
          height="170"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};
export default Footer;
