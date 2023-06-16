import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import client1 from "../img/client1.jpg";
import client2 from "../img/client2.jpg";
import { Star } from "../icons/stars";
const Review = () => {
  const clientReviewText = [{}];

  return (
    <>
      <Carousel controls={false}>
        <Carousel.Item interval={3000}>
          <ReviewCard
            img={client1}
            title="lorem ipsum dolor"
            p="lorem ipsum dolor lorem loremLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perspiciatis accusamus ipsum eveniet quidem alias sit quia illum praesentium quaerat animi nam ad, laudantium reiciendis? Maiores libero in fugit cumque? "
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <ReviewCard
            img={client2}
            title="lorem ipsum dolor"
            p="lorem ipsum dolor lorem loremLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perspiciatis accusamus ipsum eveniet quidem alias sit quia illum praesentium quaerat animi nam ad, laudantium reiciendis? Maiores libero in fugit cumque? "
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <ReviewCard
            img={client2}
            title="lorem ipsum dolor"
            p="lorem ipsum dolor lorem loremLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perspiciatis accusamus ipsum eveniet quidem alias sit quia illum praesentium quaerat animi nam ad, laudantium reiciendis? Maiores libero in fugit cumque? "
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Review;

const ReviewCard = ({ img, title, p }) => {
  return (
    <div className="reviewWraper reviewtwo">
      <div className="upper">
        <img src={img} alt=" client1" />
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
