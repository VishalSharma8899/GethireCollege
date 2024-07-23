import React,{useState} from 'react'
import ClgCult from "../../../Images/ClgDance.jfif";
import ClgHr from "../../../Images/ClgHr.avif";
import ClgSport from "../../../Images/ClgSports.jpg";
import ClgWork from "../../../Images/ClgWorkshop.jpg";
function Events() {
    const [events] = useState([
        {
          id: 1,
          image: ClgCult,
          title: "Cultural Events",
          description: "Conducted Various Cultural Events",
        },
        {
          id: 2,
          image: ClgWork,
          title: "Workshop",
          description: "Workshops Conducted by Students",
        },
        {
          id: 3,
          image: ClgSport,
          title: "Sports Events",
          description: "Various Games Conducted for Students",
        },
        {
          id: 4,
          image: ClgHr,
          title: "HR Meet",
          description: "HR Meet help to make connections",
        },
      ]);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
         {events.map((event) => (
                <div
                  key={event.id}
                  className="w-full p-1 h-32 flex flex-col"
                >
                  <div className="w-full">
                    <div className="w-3/4 h-28 flex justify-center items-center rounded-md border border-black-500 mx-auto">
                      <div className="w-28 h-28 flex justify-center items-center">
                        <img src={event.image} className="rounded-lg" alt="" />
                      </div>
                      <div className="flex flex-col ml-2">
                        <div className="mt-3 bg-gray-100 flex items-center p-1 rounded w-32 ml-2 h-8 text-sm">
                          {event.title}
                        </div>
                        <div className="ml-2 mt-2">{event.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
    </div>
  )
}

export default Events