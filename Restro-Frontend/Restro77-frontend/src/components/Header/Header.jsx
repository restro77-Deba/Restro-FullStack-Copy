import React, { useEffect, useRef, useState } from "react";
import style from "./header.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Header = () => {
  const slides = [
    {
      title: "Order your favourite food here",
      desc: "Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.",
      bgClass: style.bg1,
      btnText: "View Menu",
    },
    {
      title: "Fast Delivery at Your Doorstep",
      desc: "Hot and fresh food delivered quickly to your home. Experience the convenience of our super-fast delivery service.",
      bgClass: style.bg2,
      btnText: "Order Now",
    },
    {
      title: "Delicious Meals Every Day",
      desc: "Discover new tastes and flavours with our daily specials. We bring the best cuisines right to your table.",
      bgClass: style.bg3,
      btnText: "Explore",
    },
  ];

  const [current, setCurrent] = useState(0);
  const autoPlayRef = useRef(null);

  /* ================= AUTOPLAY ================= */
  const startAutoplay = () => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
  };

  const stopAutoplay = () => {
    clearInterval(autoPlayRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  /* ================= CONTROLS ================= */
  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
    startAutoplay();
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
    startAutoplay();
  };

  /* ================= SWIPE SUPPORT ================= */
  const startX = useRef(0);
  const endX = useRef(0);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = startX.current - endX.current;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <div
      className={style.header}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${style.slide} ${index === current ? style.active : ""
            } ${slide.bgClass}`}
        >
          <div className={style.content}>
            <h2>{slide.title}</h2>
            <p>{slide.desc}</p>
            <a href="#ExploreMenu">{slide.btnText}</a>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        className={style.prevBtn}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FaArrowLeft />
      </button>

      <button
        className={style.nextBtn}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaArrowRight />
      </button>

      {/* Pagination */}
      <div className={style.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${style.dot} ${index === current ? style.activeDot : ""
              }`}
            onClick={() => {
              setCurrent(index);
              startAutoplay();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
