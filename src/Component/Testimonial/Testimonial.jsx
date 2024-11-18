"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import styles from "./Testimonial.module.css";
import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      img: "/images/cardProfile.png",
      name: "John Doe",
      review: "The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life",

    },
    {
      img: "/images/cardProfile.png",
      name: "Jane Smith",
      review: "Excellent service and support. Highly recommend!",
      rating: 4,
    },
    {
      img: "/images/cardProfile.png",
      name: "Alex Johnson",
      review: "The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
      rating: 5,
    },
    {
      img: "/images/cardProfile.png",
      name: "Alex Johnson",
      review: "The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
      rating: 5,
    },
    {
      img: "/images/cardProfile.png",
      name: "Alex Johnson",
      review: "The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
      rating: 5,
    },
    {
      img: "/images/cardProfile.png",
      name: "Alex Johnson",
      review: "The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
      rating: 5,
    },
    {
      img: "/images/cardProfile.png",
      name: "Alex Johnson",
      review: "The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
      rating: 5,
    },
    {
      img: "/images/cardProfile.png",
      name: "Alex Johnson",
      review: "The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
      rating: 5,
    },
  ];

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.heading}>
        Learners love EduPath. See why they rate us 4.9 out of 5
      </h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3.4,
            spaceBetween: 40,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        navigation={true}
        className={styles.swiperContainer}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.testimonialCard}>
              <div className="flex justify-between align-items-center">
                <Image
                  src={testimonial.img}
                  width={56}
                  height={56}
                  style={{ borderRadius: "100%" }}
                  alt="image not found!"
                />
                <svg
                  width="26"
                  height="19"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 17V6C14.5017 4.40921 15.1343 2.88404 16.2592 1.75919C17.384 0.634327 18.9092 0.00165367 20.5 0C20.7652 0 21.0196 0.105356 21.2071 0.292892C21.3946 0.480429 21.5 0.734783 21.5 1C21.5 1.26522 21.3946 1.51957 21.2071 1.70711C21.0196 1.89464 20.7652 2 20.5 2C19.4391 2 18.4217 2.42143 17.6716 3.17157C16.9214 3.92172 16.5 4.93913 16.5 6V7H24C24.5304 7 25.0391 7.21071 25.4142 7.58579C25.7893 7.96086 26 8.46957 26 9V17C26 17.5304 25.7893 18.0391 25.4142 18.4142C25.0391 18.7893 24.5304 19 24 19H16.5C15.9696 19 15.4609 18.7893 15.0858 18.4142C14.7107 18.0391 14.5 17.5304 14.5 17ZM2 19H9.5C10.0304 19 10.5391 18.7893 10.9142 18.4142C11.2893 18.0391 11.5 17.5304 11.5 17V9C11.5 8.46957 11.2893 7.96086 10.9142 7.58579C10.5391 7.21071 10.0304 7 9.5 7H2V6C2 4.93913 2.42143 3.92172 3.17157 3.17157C3.92172 2.42143 4.93913 2 6 2C6.26522 2 6.51957 1.89464 6.70711 1.70711C6.89464 1.51957 7 1.26522 7 1C7 0.734783 6.89464 0.480429 6.70711 0.292892C6.51957 0.105356 6.26522 0 6 0C4.40921 0.00165367 2.88404 0.634327 1.75919 1.75919C0.634327 2.88404 0.00165367 4.40921 0 6V17C0 17.5304 0.210714 18.0391 0.585787 18.4142C0.960859 18.7893 1.46957 19 2 19Z"
                    fill="#9998E1"
                  />
                </svg>
              </div>
               <h3 className={styles.name}>{testimonial.name}</h3>
              <p className={`${styles.review}`}>{testimonial.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
