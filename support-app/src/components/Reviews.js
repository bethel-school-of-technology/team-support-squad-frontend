import React from "react";
import "./Reviews.css";
import ReviewImg from "../assets/review.png";
import { ReviewsData } from "../Data/ReviewsData";
import { Swiper, SwiperSlide } from "swiper/react";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="r-wrapper">
        <div className="r-container">
          <span>Top Supporter</span>
          <span>
            Johnny says, This is the best site to buy pre-owned items anywhere
            on the internet!
          </span>
        </div>
        <img src={ReviewImg} alt="" />

        <div className="r-container">
          <span>300k</span>
          <span>Growing Supporters Worldwide</span>
        </div>
      </div>
      {/* reviews */}
      <div className="supporters">Testimonials</div>
      <div className="carousel">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className="tCarousel"
        >
          {ReviewsData.map((reviews, i) => (
            <SwiperSlide>
              <div className="slideReviews">
                <img src={reviews.image} alt="" />
                <span>{reviews.comment}</span>
                <hr />
                <span>{reviews.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
