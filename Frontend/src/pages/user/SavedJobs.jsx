import React from 'react';
import { MapPin, DollarSign, Clock, Trash2, ExternalLink } from 'lucide-react';

const savedJobs = [
  {
    id: 1,
    title: 'Senior UI/UX Designer',
    company: 'CreativeHub',
    location: 'New York, NY',
    salary: '$90k - $120k',
    posted: '3 days ago',
    logo: '🎨',
    skills: ['Figma', 'Sketch', 'User Research']
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'CodeWave',
    location: 'Remote',
    salary: '$100k - $140k',
    posted: '5 days ago',
    logo: '💻',
    skills: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 3,
    title: 'Marketing Specialist',
    company: 'Brandly',
    location: 'Los Angeles, CA',
    salary: '$60k - $85k',
    posted: '2 days ago',
    logo: '📢',
    skills: ['SEO', 'Content Marketing', 'Analytics']
  }
];

export default function SavedJobs() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Saved Jobs</h2>
        <p className="text-sm text-gray-500 mt-1">You have {savedJobs.length} saved job{savedJobs.length !== 1 ? 's' : ''}.</p>
      </div>

      <div className="space-y-4">
        {savedJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{job.logo}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600 mb-1">{job.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.posted}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-red-100 text-red-600 hover:text-red-700 p-2 rounded-lg">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Apply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
