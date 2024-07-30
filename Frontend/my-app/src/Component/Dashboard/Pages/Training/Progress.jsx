import React from 'react';
import img1 from "../../../Images/industry3.jfif";

function Progress() {
    const newEvent = [
        {
            id: 1,
            img: img1,
            name: "Salman Kumar",
            date: '15/02/2025',
            time: "3:00 PM"
        },
        {
            id: 2,
            img: img1,
            name: "Salman Kumar",
            date: '15/02/2025',
            time: "3:00 PM"
        },
        {
            id: 3,
            img: img1,
            name: "Salman Kumar",
            date: '15/02/2025',
            time: "3:00 PM"
        }
    ];

    return (
        <div className='w-full h-full px-4 py-6'>
            <div className='w-full max-w-3xl mx-auto'>
                <div className='mb-6'>
                    <h1 className='text-xl font-bold text-gray-800'>Upcoming Events</h1>
                </div>
                {
                    newEvent.map((data) => (
                        <div key={data.id} className='w-full bg-blue-100 mb-4 rounded-lg p-3 flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                            <div className='flex-shrink-0 flex items-center gap-3'>
                                <img src={data.img} alt="" className='w-16 h-16 rounded-full object-cover'/>
                                <div className='flex flex-col'>
                                    <h1 className='text-lg text-blue-600 font-semibold'>{data.name}</h1>
                                    <p className='text-gray-700'>Data Analytics</p>
                                </div>
                            </div>
                            <div className='flex flex-col text-gray-600'>
                                <p className='text-base'>Date: {data.date}</p>
                                <p className='text-base'>Time: {data.time}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Progress;
