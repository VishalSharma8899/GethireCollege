import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Micro from "../../../Images/microsoft.png";
import deltax from '../../../Images/deltax.jpeg';
import walmart from '../../../Images/walmart.png';
import meesho from '../../../Images/meesho.png';
import Helios from '../../../Images/Helios.png'
import Card from './Card';

function CardActive() {
  const cardData = [
    { image: Micro, company: 'Microsoft', position: 'SDE-1', progress: 60, percentage: 50 },
    { image: deltax, company: 'Deltax', position: 'SDE-2', progress: 40, percentage: 40 },
    { image: walmart, company: 'Walmart', position: 'Developer', progress: 60, percentage: 50 },
    { image: meesho, company: 'Meesho', position: 'Frontend', progress: 80, percentage: 80 },
    {image: Helios , company: "Helios", position: 'Software Developer', progress: 90, percentage: 90}
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 1000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </Slider>
  );
}

export default CardActive;
