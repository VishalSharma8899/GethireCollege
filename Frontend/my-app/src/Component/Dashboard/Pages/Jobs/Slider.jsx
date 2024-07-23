import React from 'react';
import Active from './ActiveProcess'; 
import Micro from '../../../Images/microsoft.png'
import Google from '../../../Images/google.png'
function Slider () {
  const data = [
    { image: {Micro}, company: 'Microsoft', position: 'SDE-1' },
    { image: {Google}, company: 'Google', position: 'Developer' }
  ];
  
   console.log(data);
  return (
    <div className="flex">
      <Active data={data} />
    </div>
  );
};

export default Slider;
