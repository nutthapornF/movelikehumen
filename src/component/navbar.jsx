import "./style.scss";
import { useNavigate } from "react-router-dom";

import Logo from "../img/logo.png";
import fbIcon from "../img/facebookIcon.webp";
import igIcon from "../img/igicon.webp";

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <div className="navWraper">
      <div className="navlinks">
        <div className="logo">
          <img src={Logo} alt="logo" />{" "}
        </div>
        <div className="middleLinks">
          <div className="home" onClick={() => navigate("/")}>
            HOME
          </div>
          <div className="plan" onClick={() => navigate("/plan&price")}>
            PLAN&PRICEING
          </div>
          <div className="photo" onClick={() => navigate("/gallery")}>
            PHOTO
          </div>
        </div>
        <div className="social">
          <div className="facebook">
            <img src={fbIcon} alt="fbIcon" />
          </div>
          <div className="igIcon">
            <a href="https://www.instagram.com/move.likeahuman/">
              <img src={igIcon} alt="igicon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
