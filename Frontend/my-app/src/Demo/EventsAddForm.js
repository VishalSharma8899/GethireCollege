// await axios.post(`http://localhost:3000/college_cultural_events_add/${id}`, formData, {
    import React from 'react';
    import { useForm } from 'react-hook-form';
    import axios from 'axios';
    
    const EventsAddForm = () => {
      const { register, handleSubmit, reset } = useForm();
      
      const onSubmit = async (data) => {
        const formData = new FormData();
    
        // Create an array of events
        const events = [
          {
            eventName: data.eventName,
            eventDate: data.eventDate,
            description: data.description,
          }
        ];
    
        formData.append('events', JSON.stringify(events));
    
        // Append image file if provided
        if (data.image[0]) {
          formData.append('images', data.image[0]);
        }
    
        try {
          // Replace `collegeId` with the actual college ID you want to use
          // const collegeId = 1;
          await axios.post(`http://localhost:3000/college_cultural_events_add`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          reset();
          alert('Event submitted successfully!');
        } catch (error) {
          console.error('Error submitting event:', error);
          alert('An error occurred while submitting the event.');
        }
      };
    
      return (
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Submit an Event</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <div>
              <label className="block text-gray-700">Event Name</label>
              <input
                type="text"
                {...register('eventName', { required: true })}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
    
            <div>
              <label className="block text-gray-700">Event Date</label>
              <input
                type="date"
                {...register('eventDate', { required: true })}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
    
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                {...register('description', { required: true })}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
    
            <div>
              <label className="block text-gray-700">Image</label>
              <input
                type="file"
                {...register('image')}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
    
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
              Submit Event
            </button>
          </form>
        </div>
      );
    };
    
    export default EventsAddForm;
    