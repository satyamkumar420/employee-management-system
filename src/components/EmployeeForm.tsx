"use client";

import { EmployeeFormState, EmployeeFormErrors } from "../types";

type EmployeeFormProps = {
  formState: EmployeeFormState;
  errors: EmployeeFormErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  submitButtonText: string;
};

export default function EmployeeForm({
  formState,
  errors,
  handleChange,
  handleSubmit,
  onCancel,
  submitButtonText,
}: EmployeeFormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 📝 Name input field */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
          placeholder="Enter employee name"
          aria-label="Employee name"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* 📧 Email input field */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
          placeholder="Enter email address"
          aria-label="Employee email"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* 👨‍💼 Position input field */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Position
        </label>
        <input
          type="text"
          name="position"
          value={formState.position}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
          placeholder="Enter position"
          aria-label="Employee position"
        />
        {errors.position && (
          <p className="text-red-500 text-sm">{errors.position}</p>
        )}
      </div>

      {/* 🎬 Action buttons */}
      <div className="flex justify-end space-x-3 mt-8">
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
        >
          {submitButtonText}
        </button>
      </div>
    </form>
  );
}
