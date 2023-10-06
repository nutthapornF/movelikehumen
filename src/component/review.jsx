import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import person from "../img/person.png";
import personIcon from "../img/personIcon.png";

import { Star } from "../icons/stars";
import { ClientReview } from "../datas/clientReview";
const Review = () => {
  return (
    <>
      <Carousel controls={false}>
        {ClientReview.map((review, i) => {
          return (
            <Carousel.Item interval={3000} key={i}>
              <ReviewCard title={review.title} p={review.detail} />
              {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default Review;

const ReviewCard = ({ img, title, p }) => {
  return (
    <div className="reviewWraper reviewtwo">
      <div className="upper">
        <img src={personIcon} alt=" client1" />
        {/* <div className="stars">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div> */}
      </div>
      <div className="reviewDetails">
        <h3>"{title}"</h3>
        <p>{p}</p>
      </div>
    </div>
  );
};
