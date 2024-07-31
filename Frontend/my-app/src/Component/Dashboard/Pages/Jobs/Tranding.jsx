import React from 'react';
import Google from '../../../Images/google.png';

const trendingData = [
  { name: 'Shweta Meena', position: 'SDE-1', branch: 'CSE', year: '2025', package: '45LPA' },
  { name: 'John Doe', position: 'Backend Developer', branch: 'IT', year: '2024', package: '40LPA' },
  { name: 'Jane Smith', position: 'Frontend Developer', branch: 'ECE', year: '2023', package: '35LPA' },
  { name: 'Robert Brown', position: 'Full Stack Developer', branch: 'CS', year: '2026', package: '50LPA' },
  { name: 'Emily Davis', position: 'Data Scientist', branch: 'IT', year: '2022', package: '55LPA' },
  { name: 'Michael Wilson', position: 'DevOps Engineer', branch: 'CS', year: '2025', package: '48LPA' },
  { name: 'Sophia Johnson', position: 'UX/UI Designer', branch: 'DES', year: '2024', package: '42LPA' },
  { name: 'William Garcia', position: 'Systems Analyst', branch: 'IT', year: '2023', package: '38LPA' },
  { name: 'Olivia Martinez', position: 'Product Manager', branch: 'MGMT', year: '2026', package: '52LPA' },
  { name: 'James Brown', position: 'Network Engineer', branch: 'EE', year: '2022', package: '46LPA' },
  { name: 'Isabella Anderson', position: 'Cloud Engineer', branch: 'CS', year: '2025', package: '49LPA' },
  { name: 'Benjamin Thomas', position: 'Database Administrator', branch: 'IT', year: '2024', package: '44LPA' },
  { name: 'Mia Harris', position: 'Machine Learning Engineer', branch: 'CS', year: '2023', package: '57LPA' },
  { name: 'Ethan Lee', position: 'Security Analyst', branch: 'CS', year: '2026', package: '50LPA' },
  { name: 'Ava Clark', position: 'Business Analyst', branch: 'BA', year: '2022', package: '41LPA' },
  { name: 'Liam Robinson', position: 'Software Engineer', branch: 'IT', year: '2025', package: '46LPA' },
  { name: 'Charlotte Walker', position: 'Data Engineer', branch: 'IT', year: '2024', package: '53LPA' },
  { name: 'Noah King', position: 'Web Developer', branch: 'CS', year: '2023', package: '39LPA' },
  { name: 'Amelia Young', position: 'AI Researcher', branch: 'CS', year: '2026', package: '60LPA' },
  { name: 'Oliver Scott', position: 'Game Developer', branch: 'CS', year: '2022', package: '47LPA' },
  { name: 'Harper Adams', position: 'Systems Engineer', branch: 'EE', year: '2025', package: '45LPA' }
];

const scrollStyle = `
  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  .animate-scroll {
    animation: scroll 30s linear infinite;
  }

  .scroll-container {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  .scroll-content {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .scroll-content > div {
    flex-shrink: 0;
    margin-bottom: 1rem; /* Reduced margin for spacing between items */
  }
`;

function Tranding() {
  return (
    <div className="p-2 md:p-4 lg:p-6 h-screen overflow-hidden relative">
      <style>{scrollStyle}</style>
      <p className="font-semibold md:text-xl lg:text-lg mb-4 md:mb-6 lg:mb-8">
        Trending on Gethire
      </p>
      
      <div className="scroll-container">
        <div className="scroll-content animate-scroll">
          {trendingData.concat(trendingData).map((item, index) => (
            <div key={index} className="bg-blue-100 p-2 md:p-4 lg:p-6  rounded-md flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <div className="w-full sm:w-1/4 flex justify-center ">
                <img src={Google} alt="Company" className="w-20 h-14 sm:w-24 sm:h-16 object-contain" />
              </div>
              <div className="w-full sm:w-3/4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
                <div className="name flex flex-col">
                  <p className="font-bold text-sm md:text-base lg:text-lg">{item.name}</p>
                  <p className="font-semibold text-xs md:text-sm lg:text-base">{item.position}</p>
                </div>
                <div className="branches flex flex-col">
                  <p className="font-bold text-sm md:text-base lg:text-lg">{item.branch}</p>
                  <p className="font-semibold text-xs md:text-sm lg:text-base">{item.year}</p>
                </div>
                <div className="package flex flex-col">
                  <p className="font-semibold text-sm md:text-base lg:text-lg">{item.package}</p>
                </div>
                <div className="more">
                  <button className="bg-blue-500 text-white rounded-md px-3 py-1 md:px-4 md:py-2 lg:px-5 lg:py-3 hover:shadow-md transition-shadow">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tranding;
