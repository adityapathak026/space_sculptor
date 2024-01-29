import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { portData } from "../constants";

const Portfolio = () => {
  return (
    <div className="portfolio container">
      <div className="portfolio_content">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
        >
          {portData.map((port) => (
            <SwiperSlide key={port.id}>
              <img src={port.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="port btn">Get a quote</button>
    </div>
  );
};

export default Portfolio;
