// const response = await axios.post(`http://localhost:3000//college_top_placements_add/${collegeId}`, data);
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';

const PlacementForm = () => {
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      placements: [{ placementCompany: "", studentName: "", ctc: "", location: "" }]
    }
  });
  const { fields, append } = useFieldArray({
    control,
    name: "placements"
  });

  const onSubmit = async (data) => {
    // Check if the placements array is not empty
    if (!data.placements || data.placements.length === 0) {
      alert('Please add at least one placement');
      return;
    }

    const collegeId = 1; // Replace with the actual college ID

    try {
      // Format data to match the required API format
      const formattedData = {
        placements: data.placements
      };

      const response = await axios.post(`http://localhost:3000/college_top_placements_add/${collegeId}`, formattedData);

      if (response.status === 200) {
        alert('Placement added successfully');
        reset();
      } else {
        alert('Failed to add placement');
      }
    } catch (error) {
      console.error('Error while adding placement:', error);
      alert('An error occurred while adding placement');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6 space-y-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Add Placement</h2>
      
      {fields.map((item, index) => (
        <div key={item.id} className="space-y-2">
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">Company</label>
            <input
              {...register(`placements.${index}.placementCompany`)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
              placeholder="Enter Company"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">Student Name</label>
            <input
              {...register(`placements.${index}.studentName`)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
              placeholder="Enter Student Name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">CTC</label>
            <input
              {...register(`placements.${index}.ctc`)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
              placeholder="Enter CTC"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">Location</label>
            <input
              {...register(`placements.${index}.location`)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
              placeholder="Enter Location"
              required
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ placementCompany: "", studentName: "", ctc: "", location: "" })}
        className="w-full bg-green-500 text-white py-2 rounded-md font-semibold shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
      >
        Add Another Placement
      </button>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
      >
        Submit
      </button>
    </form>
  );
};

export default PlacementForm;

