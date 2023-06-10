import "./style.scss";

import { useState } from "react";
import { galleryPhoto } from "../datas/indexImg";
import Navbar from "../component/navbar";

const Gallery = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [photos, setPhotos] = useState(galleryPhoto);

  // console.log(galleryPhoto);
  return (
    <>
      <Navbar />
      <div className="galleryWrapper">
        <div className="singleImg">
          {photos.map((p, i) => {
            console.log(p);
            return <img src={p} alt="gym photos" key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
