import "./style.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
            // console.log(p);
            return (
              <LazyLoadImage
                src={p}
                // width={600}
                // height={400}
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
