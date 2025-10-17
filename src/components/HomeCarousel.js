import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/img/header-bg1.png";
import img2 from "../assets/img/header-bg2.jpg";
import img3 from "../assets/img/header-bg3.png";

const HomeCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    draggable: false
  };

  return (
    <section className="home-carousel">
      <Slider {...settings}>
        {[img1, img2, img3].map((image, index) => (
          <div key={index} className="carousel-slide">
            <div
              className="carousel-bg"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="carousel-overlay">
                <div className="carousel-text">
                  <h1>Comprometidos con el Medioambiente</h1>
                  <p>Especialistas en gestión y retiro de asbesto</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HomeCarousel;
