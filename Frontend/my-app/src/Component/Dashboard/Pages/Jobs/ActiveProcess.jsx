import React from 'react';
import Slider from './Slider';

function ActiveProcess({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  // console.log(data)
  return (
    <div className='h-56 mt-3'>
      <p className='font-bold text-lg ml-2'>Active Process</p>
          
      {data && data.length > 0 ? ( 
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="flex w-64 rounded-xl h-32 ml-16 mt-3 gap-3">
              <div className="mb-3">
                <img className="w-28" src={item.image} alt="img" />
              </div>
              <div className="mt-3">
                <p>{item.company}</p>
                <p>{item.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>No active processes found.</p>
      )}
    </div>
  );
}

export default ActiveProcess;
