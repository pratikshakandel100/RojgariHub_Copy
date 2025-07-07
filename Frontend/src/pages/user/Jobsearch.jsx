import React from 'react';
import { useForm } from 'react-hook-form';
import { Search, Filter, MapPin, DollarSign, Clock, Heart } from 'lucide-react';

const featuredJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120k - $160k',
    type: 'Full-time',
    posted: '2 days ago',
    logo: '🚀',
    skills: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: 2,
    title: 'UX Designer',
    company: 'DesignStudio',
    location: 'New York, NY',
    salary: '$90k - $130k',
    type: 'Full-time',
    posted: '1 day ago',
    logo: '🎨',
    skills: ['Figma', 'Adobe XD', 'Prototyping']
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'DataTech',
    location: 'Remote',
    salary: '$110k - $150k',
    type: 'Remote',
    posted: '3 days ago',
    logo: '📊',
    skills: ['Python', 'ML', 'SQL']
  }
];

export default function JobSearch() {
  const searchForm = useForm({
    defaultValues: {
      jobTitle: '',
      location: ''
    }
  });

  const onSearchSubmit = (data) => {
    console.log('Search data:', data);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <form onSubmit={searchForm.handleSubmit(onSearchSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                {...searchForm.register('jobTitle', {
                  required: 'Job title is required',
                  minLength: { value: 2, message: 'Job title must be at least 2 characters' }
                })}
                type="text"
                placeholder="Job title, keywords..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchForm.formState.errors.jobTitle && (
                <p className="text-red-500 text-sm mt-1">
                  {searchForm.formState.errors.jobTitle.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...searchForm.register('location')}
                type="text"
                placeholder="Location"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Search className="h-5 w-5 inline mr-2" />
                Search
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        {featuredJobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{job.logo}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
                  <p className="text-gray-600 mb-2">{job.company}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.posted}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
