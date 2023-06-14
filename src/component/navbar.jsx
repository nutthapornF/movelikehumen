import "./style.scss";
import { useNavigate } from "react-router-dom";

import Logo from "../img/logo.png";
import fbIcon from "../img/facebookIcon.webp";
import igIcon from "../img/igicon.webp";
import { useState } from "react";

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  let navigate = useNavigate();

  const hamburgerToggle = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const Hamberger = () => {
    return (
      <div className="hamberger">
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
      </div>
    );
  };

  const HamburgerModal = () => {
    return (
      <div className="navModalWrap">
        <div className="hamburgerlinks">
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
      </div>
    );
  };

  return (
    <div className="navWraper">
      {isHamburgerOpen ? <HamburgerModal /> : <></>}
      <div className="navlinks">
        <div className="logo">
          <img src={Logo} alt="logo" />{" "}
        </div>
        <div className="middleLinks">
          <div className="hambergerWrap" onClick={hamburgerToggle}>
            <Hamberger />
          </div>
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
