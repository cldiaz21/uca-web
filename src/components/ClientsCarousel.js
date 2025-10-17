import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import client1 from '../assets/img/clients/client1.png';
import client2 from '../assets/img/clients/client2.png';
import client3 from '../assets/img/clients/client3.png';
import client4 from '../assets/img/clients/client4.png';
import client5 from '../assets/img/clients/client5.png';
import client6 from '../assets/img/clients/client6.png';
import client7 from '../assets/img/clients/client7.png';
import client8 from '../assets/img/clients/client8.png';

// Componentes personalizados para las flechas
const NextArrow = ({ onClick }) => (
  <button className="slick-arrow slick-next" onClick={onClick} aria-label="Siguiente">
    <ChevronRight size={30} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="slick-arrow slick-prev" onClick={onClick} aria-label="Anterior">
    <ChevronLeft size={30} />
  </button>
);

const ClientsCarousel = () => {
  const clients = [client1, client2, client3, client4, client5, client6, client7, client8];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    centerMode: true,
    centerPadding: '12%',
    responsive: [
      { 
        breakpoint: 1600, 
        settings: { 
          slidesToShow: 3,
          centerPadding: '8%'
        } 
      },
      { 
        breakpoint: 1200, 
        settings: { 
          slidesToShow: 2,
          centerPadding: '15%'
        } 
      },
      { 
        breakpoint: 992, 
        settings: { 
          slidesToShow: 2,
          centerPadding: '10%'
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 1,
          centerPadding: '25%'
        } 
      },
      { 
        breakpoint: 576, 
        settings: { 
          slidesToShow: 1,
          centerPadding: '15%'
        } 
      }
    ]
  };

  return (
    <div className="clients-section">
      <div className="clients-carousel">
        <Slider {...settings}>
          {clients.map((src, i) => (
            <div key={i} className="client-slide">
              <div className="client-logo">
                <img src={src} alt={`Cliente ${i + 1}`} loading="lazy" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientsCarousel;
