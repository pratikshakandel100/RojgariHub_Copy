import React, { useState } from 'react';
import { Search, MapPin, Users, Briefcase, Code, DollarSign, PenTool, BarChart3, Monitor, Building2, Target, Mail, Phone, MapPin as MapPinIcon, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const RojgarHubHomepage = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchJob, setSearchJob] = useState('');

  const companies = [
    { name: 'Vodafone', logo: 'V' },
    { name: 'Intel', logo: 'intel' },
    { name: 'Tesla', logo: 'TESLA' },
    { name: 'AMD', logo: 'AMD' },
    { name: 'Talkit', logo: 'Talkit' }
  ];

  const categories = [
    { name: 'Design', icon: PenTool, jobs: 216, color: 'bg-purple-100 text-purple-600' },
    { name: 'Sales', icon: BarChart3, jobs: 145, color: 'bg-blue-100 text-blue-600' },
    { name: 'Marketing', icon: Target, jobs: 180, color: 'bg-indigo-500 text-white', featured: true },
    { name: 'Finance', icon: DollarSign, jobs: 325, color: 'bg-gray-100 text-gray-600' },
    { name: 'Technology', icon: Monitor, jobs: 436, color: 'bg-blue-100 text-blue-600' },
    { name: 'Engineering', icon: Code, jobs: 542, color: 'bg-gray-100 text-gray-600' },
    { name: 'Business', icon: Briefcase, jobs: 211, color: 'bg-gray-100 text-gray-600' },
    { name: 'Human Resources', icon: Users, jobs: 346, color: 'bg-gray-100 text-gray-600' }
  ];

  const featuredJobs = [
    { 
      title: 'Email Marketing', 
      company: 'Revolut', 
      location: 'Madrid, Spain', 
      type: 'Full Time', 
      tag: 'Featured',
      color: 'bg-red-500',
      description: 'Revolut is looking for Email Marketing to help team on...'
    },
    { 
      title: 'Brand Designer', 
      company: 'Dropbox', 
      location: 'San Francisco, US', 
      type: 'Full Time', 
      tag: 'Featured',
      color: 'bg-blue-500',
      description: 'Dropbox is looking for Brand Designer to help team on...'
    },
    { 
      title: 'Email Marketing', 
      company: 'Pitch', 
      location: 'Berlin, Germany', 
      type: 'Full Time', 
      tag: 'Featured',
      color: 'bg-black',
      description: 'Pitch is looking for Customer Manager to join marketing t...'
    },
    { 
      title: 'Visual Designer', 
      company: 'Blinkist', 
      location: 'Granada, Spain', 
      type: 'Full Time', 
      tag: 'Featured',
      color: 'bg-green-500',
      description: 'Blinkist is looking for Visual Designer to help team on...'
    },
    { 
      title: 'Product Designer', 
      company: 'ClassPass', 
      location: 'Manchester, UK', 
      type: 'Full Time', 
      tag: 'Featured',
      color: 'bg-blue-600',
      description: 'ClassPass is looking for Product Designer to help cus...'
    },
    { 
      title: 'Lead Designer', 
      company: 'Canva', 
      location: 'Ontario, Canada', 
      type: 'Full Time', 
      tag: 'Featured',
      color: 'bg-teal-500',
      description: 'Canva is looking for Lead Designer to help team on...'
    },
    { 
      title: 'Brand Strategist', 
      company: 'GoDaddy', 
      location: 'Marseille, France', 
      type: 'Full Time', 
      tag: 'Featured',
      color: 'bg-gray-800',
      description: 'GoDaddy is looking for Brand Strategist to help team...'
    },
    { 
      title: 'Data Analyst', 
      company: 'Twitter', 
      location: 'San Diego, US', 
      type: 'Full Time', 
      tag: 'Featured',
      color: 'bg-blue-400',
      description: 'Twitter is looking for Data Analyst to help team on...'
    }
  ];

  const latestJobs = [
    { 
      title: 'Social Media Assistant', 
      company: 'Nomad', 
      location: 'Paris, France', 
      type: 'Design', 
      time: '11 minutes ago',
      color: 'bg-green-500'
    },
    { 
      title: 'Social Media Assistant', 
      company: 'Netlify', 
      location: 'Paris, France', 
      type: 'Design', 
      time: '14 minutes ago',
      color: 'bg-teal-500'
    },
    { 
      title: 'Brand Designer', 
      company: 'Dropbox', 
      location: 'San Francisco, USA', 
      type: 'Design', 
      time: '24 minutes ago',
      color: 'bg-blue-500'
    },
    { 
      title: 'Brand Designer', 
      company: 'Maze', 
      location: 'San Francisco, USA', 
      type: 'Design', 
      time: '1 hour ago',
      color: 'bg-blue-600'
    },
    { 
      title: 'Interactive Developer', 
      company: 'Terraform', 
      location: 'Hamburg, Germany', 
      type: 'Design', 
      time: '1 hour ago',
      color: 'bg-cyan-500'
    },
    { 
      title: 'Interactive Developer', 
      company: 'Upwork', 
      location: 'Hamburg, Germany', 
      type: 'Design', 
      time: '2 hours ago',
      color: 'bg-blue-500'
    },
    { 
      title: 'HR Manager', 
      company: 'Divvy', 
      location: 'Central Germany', 
      type: 'Design', 
      time: '2 hours ago',
      color: 'bg-red-500'
    },
    { 
      title: 'HR Manager', 
      company: 'Packer', 
      location: 'Central Germany', 
      type: 'Design', 
      time: '3 hours ago',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">RojgarHub</span>
              </div>
              <nav className="ml-10 flex space-x-8">
                <a href="#" className="text-gray-500 hover:text-gray-700">Find Jobs</a>
                <a href="#" className="text-gray-500 hover:text-gray-700">Browse Companies</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">Login</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-lg">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Discover<br />
                more than<br />
                <span className="text-indigo-600">5000+ Jobs</span>
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                Great platform for the job seeker that searching for<br />
                new career heights and passionate about startups.
              </p>
              
              {/* Search Bar */}
              <div className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4">
                <div className="flex-1 flex items-center">
                  <Search className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    value={searchJob}
                    onChange={(e) => setSearchJob(e.target.value)}
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex-1 flex items-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Florence, Italy"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full outline-none"
                  />
                </div>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                  Search my job
                </button>
              </div>
              
              <div className="mt-4 text-sm text-gray-500">
                Popular: UI Designer, UX Researcher, Android, Admin
              </div>
            </div>
            
            <div className="flex-1 flex justify-end">
              <img 
                src="/api/placeholder/400/500" 
                alt="Job seeker" 
                className="w-80 h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8">Companies we helped grow</p>
          <div className="flex items-center justify-center space-x-12">
            {companies.map((company, index) => (
              <div key={index} className="text-gray-400 font-bold text-xl">
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Explore by <span className="text-indigo-600">category</span>
            </h2>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium">
              Show all jobs →
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-2 border-gray-200 hover:border-indigo-300 transition-colors cursor-pointer ${
                    category.featured ? 'bg-indigo-500 text-white' : 'bg-white'
                  }`}
                >
                  <IconComponent className="w-8 h-8 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <p className={`text-sm ${category.featured ? 'text-indigo-100' : 'text-gray-500'}`}>
                    {category.jobs} jobs available →
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Start Posting Jobs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl p-8 flex items-center">
            <div className="flex-1 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Start posting<br />
                jobs today
              </h2>
              <p className="text-indigo-100 mb-6">
                Start posting jobs for only $10.
              </p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Sign Up For Free
              </button>
            </div>
            <div className="flex-1">
              <img 
                src="/api/placeholder/500/300" 
                alt="Dashboard" 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured <span className="text-indigo-600">jobs</span>
            </h2>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium">
              Show all jobs →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredJobs.map((job, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${job.color} rounded-lg flex items-center justify-center text-white font-bold mr-4`}>
                    {job.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{job.description}</p>
                <div className="flex items-center justify-between">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                    {job.tag}
                  </span>
                  <span className="text-xs text-gray-500">{job.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Jobs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Latest <span className="text-indigo-600">jobs open</span>
            </h2>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium">
              Show all jobs →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestJobs.map((job, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${job.color} rounded-lg flex items-center justify-center text-white font-bold mr-4`}>
                    {job.company.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium mb-2 inline-block">
                      {job.type}
                    </span>
                    <p className="text-xs text-gray-500">{job.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="ml-2 text-xl font-bold">RojgarHub</span>
              </div>
              <p className="text-gray-400 mb-4">
                Great platform for the job seeker that<br />
                searching for new career heights and<br />
                passionate about startups.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Companies</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Advice</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Docs</a></li>
                <li><a href="#" className="hover:text-white">Guide</a></li>
                <li><a href="#" className="hover:text-white">Updates</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Get job notifications</h3>
              <p className="text-gray-400 mb-4">
                The latest job news, articles, sent to<br />
                your inbox weekly.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex items-center justify-between">
            <p className="text-gray-400">2024 © RojgarHub. All rights reserved.</p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RojgarHubHomepage;