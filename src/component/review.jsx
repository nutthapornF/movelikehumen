import client1 from "../img/client1.jpg";
import client2 from "../img/client2.jpg";
import { Star } from "../icons/stars";

const Review = () => {
  return (
    <>
      <div className="reviewWraper">
        <div className="upper">
          <img src={client1} alt=" client1" />
          <div className="stars">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="reviewDetails">
          <h3>“Chris is an excellent coach”</h3>
          <p>
            Our family (parents + 2 teenagers) have worked out with Chris for
            over three years. He tailors great workouts for each of us,
            perfectly matching these with our goals, abilities and adjusting for
            any specific issues. No two workouts are the same, so it is always
            both challenging and interesting. He works with us individually
            toward longer term strength and fitness goals. His depth of
            knowlerecommend Chris as a trainer/coach.
          </p>
        </div>
      </div>

      {/* //////////////////////// */}
      <div className="reviewWraper reviewtwo">
        <div className="upper">
          <img src={client2} alt=" client1" />
          <div className="stars">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="reviewDetails">
          <h3>“Chris is an excellent coach”</h3>
          <p>
            Our family (parents + 2 teenagers) have worked out with Chris for
            over three years. He tailors great workouts for each of us,
            perfectly matching these with our goals, abilities and adjusting for
            any specific issues. No two workouts are the same, so it is always
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
