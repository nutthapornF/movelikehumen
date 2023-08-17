import "./style.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { galleryPhoto1, galleryPhoto2 } from "../datas/indexImg";
import Navbar from "../component/navbar";

const Gallery = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [photos1, setPhotos1] = useState(galleryPhoto1);
  const [photos2, setPhotos2] = useState(galleryPhoto2);

  // console.log(galleryPhoto);
  return (
    <>
      <Navbar />
      <div className="galleryWrapper row">
        <div className="singleImg column">
          {photos1.map((p, i) => {
            // console.log(p);
            return (
              // <LazyLoadImage
              <img
                src={p}
                // width={"100%"}
                // height={"100%"}
                alt="gym photos"
                key={i}
                // effect="blur"
              />
            );
          })}
        </div>
        <div className="singleImg column">
          {photos2.map((p, i) => {
            // console.log(p);
            return (
              <img
                src={p}
                width={"50%"}
                // height={"100%"}
                alt="gym photos"
                key={i}
                effect="blur"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
