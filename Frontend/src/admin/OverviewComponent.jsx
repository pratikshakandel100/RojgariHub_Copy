import React from 'react';
import { Briefcase, Building2, Users, DollarSign, Eye, Edit } from 'lucide-react';

const OverviewComponent = () => {
  const dashboardStats = [
    { 
      title: 'Total Jobs', 
      value: '2,847', 
      change: '+12%', 
      icon: Briefcase, 
      color: 'bg-blue-500',
      trend: 'up'
    },
    { 
      title: 'Active Companies', 
      value: '156', 
      change: '+8%', 
      icon: Building2, 
      color: 'bg-green-500',
      trend: 'up'
    },
    { 
      title: 'Job Seekers', 
      value: '18,492', 
      change: '+23%', 
      icon: Users, 
      color: 'bg-indigo-500',
      trend: 'up'
    },
    { 
      title: 'Revenue', 
      value: '$45,280', 
      change: '+15%', 
      icon: DollarSign, 
      color: 'bg-purple-500',
      trend: 'up'
    }
  ];

  const recentJobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp',
      location: 'San Francisco, US',
      status: 'Active',
      applications: 45,
      posted: '2 hours ago'
    },
    {
      id: 2,
      title: 'UX Designer',
      company: 'DesignHub',
      location: 'London, UK',
      status: 'Active',
      applications: 32,
      posted: '5 hours ago'
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'StartupXYZ',
      location: 'Berlin, Germany',
      status: 'Pending',
      applications: 28,
      posted: '1 day ago'
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'DataFlow',
      location: 'Toronto, Canada',
      status: 'Active',
      applications: 67,
      posted: '2 days ago'
    }
  ];

  const recentCompanies = [
    {
      id: 1,
      name: 'TechCorp',
      industry: 'Technology',
      employees: '500-1000',
      jobs: 12,
      status: 'Verified',
      joined: '2024-01-15'
    },
    {
      id: 2,
      name: 'DesignHub',
      industry: 'Design',
      employees: '50-100',
      jobs: 8,
      status: 'Pending',
      joined: '2024-01-20'
    },
    {
      id: 3,
      name: 'StartupXYZ',
      industry: 'Fintech',
      employees: '10-50',
      jobs: 5,
      status: 'Verified',
      joined: '2024-01-18'
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Active': 'bg-green-100 text-green-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Verified': 'bg-green-100 text-green-700',
      'Inactive': 'bg-red-100 text-red-700'
    };
    return statusConfig[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Jobs and Companies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Jobs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Jobs</h3>
              <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                View all
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{job.title}</h4>
                    <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBadge(job.status)}`}>
                        {job.status}
                      </span>
                      <span className="text-xs text-gray-500">{job.applications} applications</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Companies */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Companies</h3>
              <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                View all
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentCompanies.map((company) => (
                <div key={company.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">{company.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{company.name}</h4>
                      <p className="text-sm text-gray-500">{company.industry} • {company.employees} employees</p>
                      <div className="flex items-center mt-1">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBadge(company.status)}`}>
                          {company.status}
                        </span>
                        <span className="text-xs text-gray-500 ml-2">{company.jobs} jobs</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewComponent;
