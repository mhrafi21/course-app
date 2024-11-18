"use client";

import React, { useState } from "react";
import styles from "./Questions.module.css";
import Image from "next/image";
const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: "Personalized routine?",
      content:
        "We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.",
    },
    {
      title: "Follow-up after completing courses?",
      content:
        "We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.",
    },
    {
      title: "Access to additional resources?",
      content:
        "We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.",
    },
    {
      title: "Free community support?",
      content:
        "We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.",
    },
  ];

  return (
    <div>
      <div>
        <div className={styles.hero}>
          <div className={styles.heroRow}>
            <div className={styles.colLeft}>
              <div>
                <h2>We provide...</h2>
                <div className={styles.accordion}>
                  {items.map((item, index) => (
                    <div key={index} className={`${activeIndex === index ? styles.headerActive : styles.item}`}>
                      <button
                        className={styles.header}
                        onClick={() => toggleAccordion(index)}
                      >
                        <span>
                          {activeIndex === index ? (
                            <svg
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13 0C10.4288 0 7.91543 0.762437 5.77759 2.1909C3.63975 3.61935 1.97351 5.64968 0.989572 8.02512C0.0056327 10.4006 -0.251811 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80762 22.1924C5.6257 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5995 25.9944 17.9749 25.0104C20.3503 24.0265 22.3807 22.3603 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C25.9964 9.5533 24.6256 6.24882 22.1884 3.81163C19.7512 1.37445 16.4467 0.00363977 13 0ZM18.7075 10.7075L11.7075 17.7075C11.6146 17.8005 11.5043 17.8742 11.3829 17.9246C11.2615 17.9749 11.1314 18.0008 11 18.0008C10.8686 18.0008 10.7385 17.9749 10.6171 17.9246C10.4957 17.8742 10.3854 17.8005 10.2925 17.7075L7.29251 14.7075C7.10486 14.5199 6.99945 14.2654 6.99945 14C6.99945 13.7346 7.10486 13.4801 7.29251 13.2925C7.48015 13.1049 7.73464 12.9994 8.00001 12.9994C8.26537 12.9994 8.51987 13.1049 8.70751 13.2925L11 15.5863L17.2925 9.2925C17.3854 9.19959 17.4957 9.12589 17.6171 9.07561C17.7385 9.02532 17.8686 8.99944 18 8.99944C18.1314 8.99944 18.2615 9.02532 18.3829 9.07561C18.5043 9.12589 18.6146 9.19959 18.7075 9.2925C18.8004 9.38541 18.8741 9.49571 18.9244 9.6171C18.9747 9.7385 19.0006 9.8686 19.0006 10C19.0006 10.1314 18.9747 10.2615 18.9244 10.3829C18.8741 10.5043 18.8004 10.6146 18.7075 10.7075Z"
                                fill="#9998E1"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13 0C10.4288 0 7.91543 0.762437 5.77759 2.1909C3.63975 3.61935 1.97351 5.64968 0.989572 8.02512C0.0056327 10.4006 -0.251811 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80762 22.1924C5.6257 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5995 25.9944 17.9749 25.0104C20.3503 24.0265 22.3807 22.3603 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C25.9964 9.5533 24.6256 6.24882 22.1884 3.81163C19.7512 1.37445 16.4467 0.00363977 13 0ZM18.7075 10.7075L11.7075 17.7075C11.6146 17.8005 11.5043 17.8742 11.3829 17.9246C11.2615 17.9749 11.1314 18.0008 11 18.0008C10.8686 18.0008 10.7385 17.9749 10.6171 17.9246C10.4957 17.8742 10.3854 17.8005 10.2925 17.7075L7.29251 14.7075C7.10486 14.5199 6.99945 14.2654 6.99945 14C6.99945 13.7346 7.10486 13.4801 7.29251 13.2925C7.48015 13.1049 7.73464 12.9994 8.00001 12.9994C8.26537 12.9994 8.51987 13.1049 8.70751 13.2925L11 15.5863L17.2925 9.2925C17.3854 9.19959 17.4957 9.12589 17.6171 9.07561C17.7385 9.02532 17.8686 8.99944 18 8.99944C18.1314 8.99944 18.2615 9.02532 18.3829 9.07561C18.5043 9.12589 18.6146 9.19959 18.7075 9.2925C18.8004 9.38541 18.8741 9.49571 18.9244 9.6171C18.9747 9.7385 19.0006 9.8686 19.0006 10C19.0006 10.1314 18.9747 10.2615 18.9244 10.3829C18.8741 10.5043 18.8004 10.6146 18.7075 10.7075Z"
                                fill="black"
                                fill-opacity="0.5"
                              />
                            </svg>
                          )}
                        </span>{" "}
                        {item.title}
                      </button>
                      <div
                        className={`${styles.content} ${
                          activeIndex === index ? styles.active : ""
                        }`}
                      >
                        <p 
                       
                        >
                          
                          {item.content}

                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <button className="btn-outline-none-accordion">
                    Learn More About Our Services
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.colRight}>
              <div>
                <Image
                  src={"/images/questionsPhoto.png"}
                  layout="responsive"
                  width={648}
                  height={760}
                  alt="hero image not found!"
                />
                <div className={styles.icon}>
                  <Image
                    className="icon-img"
                    src={"/images/questionsIcon.png"}
                    alt="heart icon"
                    width={74}
                    height={74}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
