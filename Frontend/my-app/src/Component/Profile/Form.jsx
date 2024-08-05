import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';

// Step 1: College Form
const CollegeForm = ({ register, errors, handleSubmit, onNext }) => (
  <form onSubmit={handleSubmit(onNext)} className="max-w-4xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-lg border border-gray-200">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">College Info</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2">ID</label>
        <input
          type="text"
          {...register('id', { required: 'ID is required' })}
          className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.id ? 'border-red-500' : ''}`}
          placeholder="Enter ID"
        />
        {errors.id && <span className="text-red-500 text-sm mt-1">{errors.id.message}</span>}
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2">College Logo Name</label>
        <input
          type="text"
          {...register('college_logo_name', { required: 'College Logo Name is required' })}
          className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.college_logo_name ? 'border-red-500' : ''}`}
          placeholder="Enter College Logo Name"
        />
        {errors.college_logo_name && <span className="text-red-500 text-sm mt-1">{errors.college_logo_name.message}</span>}
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2">College Name</label>
        <input
          type="text"
          {...register('college_name', { required: 'College Name is required' })}
          className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.college_name ? 'border-red-500' : ''}`}
          placeholder="Enter College Name"
        />
        {errors.college_name && <span className="text-red-500 text-sm mt-1">{errors.college_name.message}</span>}
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2">College Address</label>
        <input
          type="text"
          {...register('college_address', { required: 'College Address is required' })}
          className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.college_address ? 'border-red-500' : ''}`}
          placeholder="Enter College Address"
        />
        {errors.college_address && <span className="text-red-500 text-sm mt-1">{errors.college_address.message}</span>}
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2">College Website</label>
        <input
          type="text"
          {...register('college_website', { required: 'College Website is required' })}
          className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.college_website ? 'border-red-500' : ''}`}
          placeholder="Enter College Website"
        />
        {errors.college_website && <span className="text-red-500 text-sm mt-1">{errors.college_website.message}</span>}
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2">College Facebook ID</label>
        <input
          type="text"
          {...register('college_facebook_id', { required: 'College Facebook ID is required' })}
          className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.college_facebook_id ? 'border-red-500' : ''}`}
          placeholder="Enter College Facebook ID"
        />
        {errors.college_facebook_id && <span className="text-red-500 text-sm mt-1">{errors.college_facebook_id.message}</span>}
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2">College LinkedIn ID</label>
        <input
          type="text"
          {...register('college_linkedin_id', { required: 'College LinkedIn ID is required' })}
          className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.college_linkedin_id ? 'border-red-500' : ''}`}
          placeholder="Enter College LinkedIn ID"
        />
        {errors.college_linkedin_id && <span className="text-red-500 text-sm mt-1">{errors.college_linkedin_id.message}</span>}
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2">College WhatsApp Number</label>
        <input
          type="text"
          {...register('college_whatsapp_num', { required: 'College WhatsApp Number is required' })}
          className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.college_whatsapp_num ? 'border-red-500' : ''}`}
          placeholder="Enter College WhatsApp Number"
        />
        {errors.college_whatsapp_num && <span className="text-red-500 text-sm mt-1">{errors.college_whatsapp_num.message}</span>}
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2">College Gmail ID</label>
        <input
          type="text"
          {...register('college_gmail_id', { required: 'College Gmail ID is required' })}
          className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.college_gmail_id ? 'border-red-500' : ''}`}
          placeholder="Enter College Gmail ID"
        />
        {errors.college_gmail_id && <span className="text-red-500 text-sm mt-1">{errors.college_gmail_id.message}</span>}
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2">College Info</label>
        <textarea
          {...register('college_info', { required: 'College Info is required' })}
          className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.college_info ? 'border-red-500' : ''}`}
          placeholder="Enter College Info"
          rows="4"
        />
        {errors.college_info && <span className="text-red-500 text-sm mt-1">{errors.college_info.message}</span>}
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2">College Location</label>
        <input
          type="text"
          {...register('college_location', { required: 'College Location is required' })}
          className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.college_location ? 'border-red-500' : ''}`}
          placeholder="Enter College Location"
        />
        {errors.college_location && <span className="text-red-500 text-sm mt-1">{errors.college_location.message}</span>}
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2">College Image</label>
        <input
          type="file"
          {...register('college_img')}
          className="p-1 border border-gray-300 rounded-md text-sm text-gray-500 file:py-1 file:px-2 file:border file:border-gray-300 file:rounded-md file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-200 ease-in-out"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2">College Logo</label>
        <input
          type="file"
          {...register('college_logo')}
          className="p-1 border border-gray-300 rounded-md text-sm text-gray-500 file:py-1 file:px-2 file:border file:border-gray-300 file:rounded-md file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-200 ease-in-out"
        />
      </div>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
    >
      Next
    </button>
  </form>
);

// Step 2: Placement Form
const PlacementForm = ({ register, handleSubmit,errors, control, onNext, onPrev }) => {
  const { fields, append } = useFieldArray({
    control,
    name: 'placements'
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="max-w-lg mx-auto p-6 space-y-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Add Placement</h2>
      
      {fields.map((item, index) => (
        <div key={item.id} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-2">Placement Company</label>
            <input
              type="text"
              {...register(`placements.${index}.placementCompany`, { required: 'Placement Company is required' })}
              className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors?.placements?.[index]?.placementCompany ? 'border-red-500' : ''}`}
              placeholder="Enter Placement Company"
            />
            {errors?.placements?.[index]?.placementCompany && <span className="text-red-500 text-sm mt-1">{errors.placements[index].placementCompany.message}</span>}
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-2">Student Name</label>
            <input
              type="text"
              {...register(`placements.${index}.studentName`, { required: 'Student Name is required' })}
              className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors?.placements?.[index]?.studentName ? 'border-red-500' : ''}`}
              placeholder="Enter Student Name"
            />
            {errors?.placements?.[index]?.studentName && <span className="text-red-500 text-sm mt-1">{errors.placements[index].studentName.message}</span>}
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-2">CTC</label>
            <input
              type="text"
              {...register(`placements.${index}.ctc`, { required: 'CTC is required' })}
              className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors?.placements?.[index]?.ctc ? 'border-red-500' : ''}`}
              placeholder="Enter CTC"
            />
            {errors?.placements?.[index]?.ctc && <span className="text-red-500 text-sm mt-1">{errors.placements[index].ctc.message}</span>}
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              {...register(`placements.${index}.location`, { required: 'Location is required' })}
              className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors?.placements?.[index]?.location ? 'border-red-500' : ''}`}
              placeholder="Enter Location"
            />
            {errors?.placements?.[index]?.location && <span className="text-red-500 text-sm mt-1">{errors.placements[index].location.message}</span>}
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ placementCompany: '', studentName: '', ctc: '', location: '' })}
        className="w-full bg-green-500 text-white py-2 rounded-md font-semibold shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
      >
        Add Another Placement
      </button>

      <div className="flex justify-between gap-5">
        <button
          type="button"
          onClick={onPrev}
          className="w-full bg-gray-500 text-white py-2 rounded-md font-semibold shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 ease-in-out"
        >
          Back
        </button>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        >
          Next
        </button>
      </div>
    </form>
  );
};

// Step 3: Events Form
const EventsAddForm = ({ register, handleSubmit, errors, onPrev }) => (
  <form
    onSubmit={handleSubmit(async (data) => {
      console.log(data); // Log the data to check its structure
      const formData = new FormData();
      formData.append('event_name', data.event_name || ''); // Default to empty string if undefined
      formData.append('event_date', data.event_date || '');
      formData.append('event_description', data.event_description || '');
      formData.append('event_location', data.event_location || '');
      if (data.image && data.image[0]) {
        formData.append('event_image', data.image[0]);
      }

      try {
        await axios.post('http://localhost:3000/college_cultural_events_add', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Event submitted successfully!');
      } catch (error) {
        console.error('Error submitting event:', error);
        alert('An error occurred while submitting the event.');
      }
    })}
    className="container mx-auto p-6 space-y-6 bg-white rounded-lg shadow-md border border-gray-200"
  >
    <h1 className="text-3xl font-bold text-center mb-6">Submit an Event</h1>

    <div className="flex flex-col">
      <label className="text-gray-700 text-sm font-medium mb-2">Event Name</label>
      <input
        type="text"
        {...register('event_name', { required: 'Event Name is required' })}
        className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors?.event_name ? 'border-red-500' : ''}`}
        placeholder="Enter Event Name"
      />
      {errors?.event_name && <span className="text-red-500 text-sm mt-1">{errors.event_name.message}</span>}
    </div>

    <div className="flex flex-col">
      <label className="text-gray-700 text-sm font-medium mb-2">Event Date</label>
      <input
        type="date"
        {...register('event_date', { required: 'Event Date is required' })}
        className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors?.event_date ? 'border-red-500' : ''}`}
      />
      {errors?.event_date && <span className="text-red-500 text-sm mt-1">{errors.event_date.message}</span>}
    </div>

    <div className="flex flex-col">
      <label className="text-gray-700 text-sm font-medium mb-2">Event Description</label>
      <textarea
        {...register('event_description', { required: 'Event Description is required' })}
        className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors?.event_description ? 'border-red-500' : ''}`}
        placeholder="Enter Event Description"
        rows="4"
      />
      {errors?.event_description && <span className="text-red-500 text-sm mt-1">{errors.event_description.message}</span>}
    </div>

    <div className="flex flex-col">
      <label className="text-gray-700 text-sm font-medium mb-2">Event Location</label>
      <input
        type="text"
        {...register('event_location', { required: 'Event Location is required' })}
        className={`p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors?.event_location ? 'border-red-500' : ''}`}
        placeholder="Enter Event Location"
      />
      {errors?.event_location && <span className="text-red-500 text-sm mt-1">{errors.event_location.message}</span>}
    </div>

    <div className="flex flex-col">
      <label className="text-gray-700 text-sm font-medium mb-2">Event Image</label>
      <input
        type="file"
        {...register('image')}
        className="p-1 border border-gray-300 rounded-md text-sm text-gray-500 file:py-1 file:px-2 file:border file:border-gray-300 file:rounded-md file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-200 ease-in-out"
      />
    </div>

    <div className="flex justify-between gap-5">
      <button
        type="button"
        onClick={onPrev}
        className="w-full bg-gray-500 text-white py-2 rounded-md font-semibold shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 ease-in-out"
      >
        Back
      </button>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
      >
        Submit
      </button>
    </div>
  </form>
);


// Multi-Step Form Wrapper
const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      placements: [{ placementCompany: '', studentName: '', ctc: '', location: '' }]
    }
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmitAll = async (data) => {
    console.log('Form data:', data);
    // Handle form submission for all steps
  };

  return (
    <div className="container mx-auto p-6">
      {step === 0 && <CollegeForm register={register} errors={errors} handleSubmit={handleSubmit} onNext={handleNext} />}
      {step === 1 && <PlacementForm register={register} handleSubmit={handleSubmit} control={control} onNext={handleNext} onPrev={handlePrev} />}
      {step === 2 && <EventsAddForm register={register} handleSubmit={handleSubmit} onPrev={handlePrev} />}
    </div>
  );
};

export default MultiStepForm;
