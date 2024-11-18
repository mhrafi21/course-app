import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
const Hero = () => {
  const images = [
    "/images/star.png",
    "/images/star.png",
    "/images/star.png",
    "/images/star.png",
    "/images/halfStar.png",
  ];

  return (
    <div>
      <div style={{marginTop: "74px"}}>
        <div className={styles.hero}>
          <div className={styles.heroRow}>
            <div className={styles.colLeft}>
              <div className="flex gap-20 flex-col">
                <div className="flex gap-5 align-items-center">
                  {images?.map((image, index) => (
                    <div key={index}>
                      <Image src={image} alt="star" width={24} height={24} />
                    </div>
                  ))}
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "400",
                      marginLeft: "10px",
                    }}
                  >
                    4.9 (566)
                  </span>
                </div>
                <h1>#1 Platform Powering Health and Wellness</h1>
                <h4 className="pt-15 ">
                  We are restoring home as the primary place of personal
                  well-being
                </h4>
                <p>
                  Health is not just about what you are eating. It is also about
                  what you are thinking and saying
                </p>
                <div className="flex gap-15">
                  <button className="btn-primary">Browse Courses</button>
                  <button className="btn-outline-none">Get Started</button>
                </div>
              </div>
            </div>

            <div className={styles.colRight}>
              <div>
                <Image
                  src={"/images/mask.png"}
                  layout="responsive"
                  width={648}
                  height={760}
                  alt="hero image not found!"
                />
                <div className={styles.icon}>
                  <Image
                    className="icon-img"
                    src={"/images/Frame.png"}
                    alt="heart icon"
                    width={74}
                    height={74}
                  />
                </div>
              </div>
              <div className={styles.bottomImg}>
                <div>
                  <div>
                      <div className={styles.bottomImgTop}>
                        <span>12,000+</span>
                        <p>Happy learners rely on us regularly</p>
                      </div>
                  </div>
                  <div>
                    <div className={styles.bottomImgBottom}>
                      <span>Find your wellbeing</span>
                        <p>By prioritizing self-care and making informed choices, one can enhance their overall quality of life</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
