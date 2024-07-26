import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CollegeForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: '',
      college_img: null,
      college_logo: null,
      college_logo_name: '',
      college_name: '',
      college_address: '',
      college_website: '',
      college_facebook_id: '',
      college_linkedin_id: '',
      college_whatsapp_num: '',
      college_gmail_id: '',
      college_info: '',
      college_location: '',
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('id', data.id);
    formData.append('college_logo_name', data.college_logo_name);
    formData.append('college_name', data.college_name);
    formData.append('college_address', data.college_address);
    formData.append('college_website', data.college_website);
    formData.append('college_facebook_id', data.college_facebook_id);
    formData.append('college_linkedin_id', data.college_linkedin_id);
    formData.append('college_whatsapp_num', data.college_whatsapp_num);
    formData.append('college_gmail_id', data.college_gmail_id);
    formData.append('college_info', data.college_info);
    formData.append('college_location', data.college_location);

    if (data.college_img && data.college_img[0]) {
      formData.append('college_img', data.college_img[0]);
    }
    if (data.college_logo && data.college_logo[0]) {
      formData.append('college_logo', data.college_logo[0]);
    }

    try {
      const response = await axios.post('http://localhost:3000/college_data_upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Data submitted successfully:', response.data);
      reset();
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6 space-y-4 bg-white rounded-lg shadow-md border border-gray-200">
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">College Form</h2>
  
    <div className="space-y-4">
      {/* ID */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">ID</label>
        <input
          type="text"
          {...register('id')}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          placeholder="Enter College ID"
        />
      </div>
  
      {/* College Image */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">College Image</label>
        <input
          type="file"
          {...register('college_img')}
          className="p-1 border border-gray-300 rounded-md text-sm text-gray-500 file:py-1 file:px-2 file:border file:border-gray-300 file:rounded-md file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-200 ease-in-out"
        />
      </div>
  
      {/* College Logo */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">College Logo</label>
        <input
          type="file"
          {...register('college_logo')}
          className="p-1 border border-gray-300 rounded-md text-sm text-gray-500 file:py-1 file:px-2 file:border file:border-gray-300 file:rounded-md file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-200 ease-in-out"
        />
      </div>
  
      {/* College Logo Name */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">College Logo Name</label>
        <input
          {...register('college_logo_name')}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          placeholder="Enter College Logo Name"
        />
      </div>
  
      {/* College Name */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">College Name</label>
        <input
          {...register('college_name')}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          placeholder="Enter College Name"
        />
      </div>
  
      {/* College Address */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">College Address</label>
        <input
          {...register('college_address')}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          placeholder="Enter College Address"
        />
      </div>
  
      {/* College Website */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">College Website</label>
        <input
          {...register('college_website')}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          placeholder="Enter College Website URL"
        />
      </div>
  
      {/* College Facebook ID */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">College Facebook ID</label>
        <input
          {...register('college_facebook_id')}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          placeholder="Enter College Facebook ID"
        />
      </div>
  
      {/* College LinkedIn ID */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">College LinkedIn ID</label>
        <input
          {...register('college_linkedin_id')}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          placeholder="Enter College LinkedIn ID"
        />
      </div>
  
      {/* College WhatsApp Number */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">College WhatsApp Number</label>
        <input
          {...register('college_whatsapp_num')}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          placeholder="Enter College WhatsApp Number"
        />
      </div>
  
      {/* College Gmail ID */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">College Gmail ID</label>
        <input
          {...register('college_gmail_id')}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          placeholder="Enter College Gmail ID"
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
  
      {/* College Location */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">College Location</label>
        <input
          {...register('college_location')}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          placeholder="Enter College Location"
        />
      </div>
    </div>
  
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
    >
      Submit
    </button>
  </form>
  
  
  
  );
};

export default CollegeForm;
