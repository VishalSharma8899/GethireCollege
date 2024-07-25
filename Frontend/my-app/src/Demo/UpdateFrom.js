import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UpdateForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();

    if (data.college_img && data.college_img.length > 0) {
      formData.append('college_img', data.college_img[0]);
    }
    if (data.college_info) {
      formData.append('college_info', data.college_info);
    }
     var id= 1;
    // Ensure at least one field is provided
    if (formData.has('college_img') || formData.has('college_info')) {
      try {
        const response = await axios.post(`http://localhost:3000/college_data_update/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          alert('Data updated successfully');
          reset();
        } else {
          alert('Failed to update data');
        }
      } catch (error) {
        console.error('Error while updating data:', error);
        alert('An error occurred while updating data');
      }
    } else {
      alert('Please provide at least one field to update');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6 space-y-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Update College Info</h2>

      {/* College Image */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">College Image</label>
        <input
          type="file"
          {...register('college_img')}
          className="p-1 border border-gray-300 rounded-md text-sm text-gray-500 file:py-1 file:px-2 file:border file:border-gray-300 file:rounded-md file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-200 ease-in-out"
        />
      </div>

      {/* College Info */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">College Info</label>
        <textarea
          {...register('college_info')}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          placeholder="Enter College Info"
          rows="3"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateForm;
