import React from 'react';
import { TrendingUp, Users, Briefcase, DollarSign, Calendar } from 'lucide-react';

const Analytics = () => {
  const analyticsData = [
    {
      title: 'Monthly Revenue',
      value: '$45,280',
      change: '+15%',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'New Users',
      value: '1,247',
      change: '+23%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Job Applications',
      value: '3,456',
      change: '+18%',
      icon: Briefcase,
      color: 'bg-purple-500'
    },
    {
      title: 'Success Rate',
      value: '67%',
      change: '+5%',
      icon: TrendingUp,
      color: 'bg-indigo-500'
    }
  ];

  const topPerformingJobs = [
    { title: 'Software Engineer', applications: 234, views: 1567 },
    { title: 'Product Manager', applications: 189, views: 1234 },
    { title: 'UX Designer', applications: 156, views: 987 },
    { title: 'Data Scientist', applications: 143, views: 876 }
  ];

  const topCompanies = [
    { name: 'TechCorp', jobs: 45, applications: 567 },
    { name: 'DesignHub', jobs: 32, applications: 423 },
    { name: 'StartupXYZ', jobs: 28, applications: 345 },
    { name: 'DataFlow', jobs: 25, applications: 298 }
  ];

  return (
    <div className="space-y-6">
      {/* Analytics Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
          <p className="text-gray-600">View detailed analytics and generate reports</p>
        </div>
        <div className="flex space-x-3">

        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{item.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                  <p className="text-sm text-green-600 mt-1">{item.change} from last month</p>
                </div>
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Jobs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Jobs</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topPerformingJobs.map((job, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{job.title}</h4>
                    <p className="text-sm text-gray-500">{job.views} views</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{job.applications}</p>
                    <p className="text-sm text-gray-500">applications</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Companies */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Companies</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topCompanies.map((company, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">{company.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{company.name}</h4>
                      <p className="text-sm text-gray-500">{company.jobs} active jobs</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{company.applications}</p>
                    <p className="text-sm text-gray-500">applications</p>
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

export default Analytics;
