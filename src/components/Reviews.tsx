"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { ReviewCard } from "./ReviewCard";
import { reviewsDataFirst } from "../../data/reviewsDataFirst";
import { reviewsDataSecond } from "../../data/reviewsDataSecond";

export const Reviews = () => {
  return (
    <section
      className="flex flex-col mt-[250px] items-center justify-center"
      id="reviews"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="uppercase w-[361px] text-[50px] tracking-[0.5em] leading-[60px] font-inria text-primary text-center">
          Reviews
        </h1>

        <div className="w-[229px] h-[1px] bg-secondary mt-[10px] mb-[120px]" />
      </div>

      <div style={{ width: "100%", height: "300px" }}>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={6000}
          slidesPerView={3}
          spaceBetween={150}
        >
          {reviewsDataFirst.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div style={{ width: "100%", height: "300px" }} className="mt-[58px]">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          slidesPerView={3}
          spaceBetween={150}
        >
          {reviewsDataSecond.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
