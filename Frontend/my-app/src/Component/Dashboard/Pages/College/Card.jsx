import React,{useState} from 'react'
import { IoLocationOutline } from "react-icons/io5";
function Card() {
    const [jobListings, setJobListings] = useState([
        {
          id: 1,
          company: 'Amazon',
          role: 'Fresher',
          location: 'Chennai, Tamil Nadu'
        },
        {
            id: 1,
            company: 'Amazon',
            role: 'Fresher',
            location: 'Chennai, Tamil Nadu'
          },
          {
            id: 1,
            company: 'Amazon',
            role: 'Fresher',
            location: 'Chennai, Tamil Nadu'
          },
          {
            id: 1,
            company: 'Amazon',
            role: 'Fresher',
            location: 'Chennai, Tamil Nadu'
          },
          {
            id: 1,
            company: 'Amazon',
            role: 'Fresher',
            location: 'Chennai, Tamil Nadu'
          },
          {
            id: 1,
            company: 'Amazon',
            role: 'Fresher',
            location: 'Chennai, Tamil Nadu'
          },
      ]);
  return (
    <div className='flex gap-10 mt-5'>
      {jobListings.map((job) => (
        <div key={job.id} className="flex gap-5 mb-5 text-sm">
          <div className="card" style={{ width: "8rem", height: "10rem" }}>
            <div className="card-body">
              <h5 className="card-title">{job.company}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{job.role}</h6>
              <div className="flex gap-2">
                <p className="card-text">
                  <IoLocationOutline />
                </p>
                <p>{job.location}</p>
              </div>
              <button className="bg-black text-white rounded-xl p-2 mt-2">View Jobs</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card