import  { useEffect, useState } from "react";

function Progress() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchTalk = async () => {
      try {
        const response = await fetch("http://localhost:3000/college/getAllIndustryTalk");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching industry talks:", error);
      }
    };

    fetchTalk();
  }, []);

  const baseUrl = 'http://localhost:3000';

  return (
    <div className="w-full px-2 py-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800">Upcoming Events</h1>
        </div>
        {events.length > 0 ? (
          events.slice(0, 3).map((data) => (
            <div
              key={data.id}
              className="w-full bg-white mb-4 rounded-lg p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6"
            >
              <div className="flex-shrink-0 flex items-center gap-3">
                <img
                  src={`${baseUrl}/${data.photo}`}
                  alt={data.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h1 className="text-base sm:text-lg text-blue-600 font-semibold">
                    {data.name}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-700">
                    {data.specializationWith}
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-gray-600">
                <p className="text-xs sm:text-base">Date: {data.date}</p>
                <p className="text-xs sm:text-base">Time: {data.time}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No upcoming events available.</p>
        )}
      </div>
    </div>
  );
}

export default Progress;
