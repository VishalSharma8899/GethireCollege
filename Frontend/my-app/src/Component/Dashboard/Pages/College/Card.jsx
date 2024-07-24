import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../Images/amazon.png";
import img2 from "../../../Images/flipkart.png";
import img3 from "../../../Images/google.png";

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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
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
        <div className="mx-2">
          <div className='card' style={{ width: '200px', height: '200px' }}>
            <img src={img1} alt="" className='w-full h-full object-cover object-center'/>
            <div className='card-body p-2'>
               <h3 className='text-lg font-bold'>Slick</h3>
               <p className='text-sm'>Amazon</p>
            </div>
          </div>
        </div>
        
        <div className="mx-2">
          <div className='card' style={{ width: '200px', height: '200px' }}>
            <img src={img2} alt="" className='w-full h-full object-cover object-center'/>
            <div className='card-body p-2'>
               <h3 className='text-lg font-bold'>Slick</h3>
               <p className='text-sm'>Flipkart</p>
            </div>
          </div>
        </div>

        <div className="mx-2">
          <div className='card' style={{ width: '200px', height: '200px' }}>
            <img src={img3} alt="" className='w-full h-full object-cover object-center'/>
            <div className='card-body p-2'>
               <h3 className='text-lg font-bold'>Slick</h3>
               <p className='text-sm'>Google</p>
            </div>
          </div>
        </div>

        <div className="mx-2">
          <div className='card' style={{ width: '200px', height: '200px' }}>
            <img src={img1} alt="" className='w-full h-full object-cover object-center'/>
            <div className='card-body p-2'>
               <h3 className='text-lg font-bold'>Slick</h3>
               <p className='text-sm'>Amazon</p>
            </div>
          </div>
        </div>

        <div className="mx-2">
          <div className='card' style={{ width: '200px', height: '200px' }}>
            <img src={img2} alt="" className='w-full h-full object-cover object-center'/>
            <div className='card-body p-2'>
               <h3 className='text-lg font-bold'>Slick</h3>
               <p className='text-sm'>Flipkart</p>
            </div>
          </div>
        </div>

        <div className="mx-2">
          <div className='card' style={{ width: '200px', height: '200px' }}>
            <img src={img3} alt="" className='w-full h-full object-cover object-center'/>
            <div className='card-body p-2'>
               <h3 className='text-lg font-bold'>Slick</h3>
               <p className='text-sm'>Google</p>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  )
}

export default Card;
