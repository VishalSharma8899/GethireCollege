import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../Images/microsoft.png";
import img2 from "../../../Images/walmart.png";
import img3 from "../../../Images/meesho.png";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function Card() {
  const data = [
    {
      id: 1,
      img: img1,
      name: "Amazon",
      CTC: "1,00,000"
    },
    {
      id: 2,
      img: img2,
      name: "Amazon",
      CTC: "1,00,000"
    },
    {
      id: 3,
      img: img3,
      name: "Amazon",
      CTC: "1,00,000"
    },
    {
      id: 4,
      img: img1,
      name: "Amazon",
      CTC: "1,00,000"
    },
    {
      id: 5,
      img: img2,
      name: "Amazon",
      CTC: "1,00,000"
    },
    {
      id: 6,
      img: img3,
      name: "Amazon",
      CTC: "1,00,000"
    },
    {
      id: 7,
      img: img1,
      name: "Amazon",
      CTC: "1,00,000"
    }
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed as needed
    centerPadding: "60px",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  return (
    <div className="slider-container gap-2 mb-10">
      <Slider {...settings}>
        {data.map((data) => {
          return (
            <div key={data.id} className="mx-2">
              <div className='card' style={{ width: '200px', height: '200px' }}>
                <img src={data.img} alt="" className='w-full h-32 object-cover object-center' />
                <div className='card-body p-2'>
                  <h3 className='text-lg font-bold'></h3>
                  <p className='text-sm'>{data.name}</p>
                  <p className=''>{data.CTC}</p>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Card;
