import React from 'react';
import { Plus } from 'lucide-react';

const PostJob = ({ newJob, setNewJob, handleJobSubmit, setActiveTab }) => {
  const [showBoostModal, setShowBoostModal] = React.useState(false);
  const [boostChecked, setBoostChecked] = React.useState(false);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Post New Job</h2>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <form onSubmit={handleJobSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Job Title *
              </label>
              <input
                type="text"
                required
                value={newJob.title}
                onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g. Senior Software Engineer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Job Type *
              </label>
              <select
                value={newJob.type}
                onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location *
              </label>
              <input
                type="text"
                required
                value={newJob.location}
                onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g. Mumbai, India"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Salary Range *
              </label>
              <input
                type="text"
                required
                value={newJob.salary}
                onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g. ₹15-25 LPA"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Job Description *
            </label>
            <textarea
              required
              rows={4}
              value={newJob.description}
              onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Describe the job role, responsibilities, and what you're looking for..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Requirements *
            </label>
            <textarea
              required
              rows={3}
              value={newJob.requirements}
              onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter requirements separated by commas (e.g. React, Node.js, 3+ years experience)"
            />
          </div>

          {/* Boost Job Checkbox */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="boost"
              checked={boostChecked}
              onChange={(e) => {
                setBoostChecked(e.target.checked);
                if (e.target.checked) setShowBoostModal(true);
              }}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="boost" className="text-sm text-gray-700 dark:text-gray-300">
              Boost this job for more visibility
            </label>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Post Job</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('jobs')}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {/* Boost Job Modal */}
      {showBoostModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full shadow-lg space-y-6 relative">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Boost Your Job</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Reach more candidates by boosting your job post! Choose a boost plan and proceed to payment.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between border p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">7-Day Boost</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Increase visibility for a week.</p>
                </div>
                <span className="text-blue-600 font-bold">₹999</span>
              </div>
              <div className="flex items-center justify-between border p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">30-Day Boost</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Maximize exposure for a month.</p>
                </div>
                <span className="text-blue-600 font-bold">₹3499</span>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowBoostModal(false);
                  setBoostChecked(false);
                }}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Replace this with your payment logic
                  alert('Redirecting to payment...');
                  setShowBoostModal(false);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostJob;
