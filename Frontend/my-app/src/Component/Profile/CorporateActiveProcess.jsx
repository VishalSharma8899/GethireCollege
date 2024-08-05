import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';

export const CorporateActiveProcess = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [activeProcesses, setActiveProcesses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const jobRole = [{
        jobTitle: data.jobTitle,
        vacancies: data.vacancies,
      }];

      const response = await axios.post('http://localhost:3000/corporate/activeProcess', {
        companyId: data.companyId,
        companyName: data.companyName,
        jobRole: jobRole,
      });
      
      // Update active processes with the response data
      setActiveProcesses((prevProcesses) => {
        const updatedProcesses = prevProcesses.filter(process => process.companyId !== response.data.companyId);
        updatedProcesses.push(response.data);
        return updatedProcesses;
      });
      
      alert("Form submitted successfully");
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-5">Active Process Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="companyId" className="block text-sm font-medium text-gray-700">Company ID</label>
          <input
            id="companyId"
            {...register('companyId', { required: 'Company ID is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.companyId && <p className="text-red-500 text-sm mt-1">{errors.companyId.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            id="companyName"
            {...register('companyName', { required: 'Company Name is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Role</label>
          <input
            id="jobTitle"
            {...register('jobTitle', { required: 'Job Role is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="vacancies" className="block text-sm font-medium text-gray-700">Vacancies</label>
          <input
            id="vacancies"
            type="number"
            {...register('vacancies', { required: 'Vacancies is required', min: { value: 1, message: 'Vacancies must be at least 1' } })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.vacancies && <p className="text-red-500 text-sm mt-1">{errors.vacancies.message}</p>}
        </div>
        <div>
          <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
        </div>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Active Processes</h2>
        <ul>
          {activeProcesses.map((process) => (
            <li key={process.companyId} className="mb-4">
              {/* <p><strong>Company ID:</strong> {process.companyId}</p> */}
              {/* <p><strong>Company Name:</strong> {process.companyName}</p> */}
              {process.jobRole.length > 0 && process.jobRole.map((role, index) => (
                <div key={index} className="mb-2">
                    <p><strong>Company Name:</strong> {process.companyName}</p>
                  <p><strong>Job Role:</strong> {role.jobTitle}</p>
                  <p><strong>Vacancies:</strong> {role.vacancies}</p>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
