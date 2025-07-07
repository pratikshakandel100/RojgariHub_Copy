import React, { useState } from 'react';
import { Plus, Filter, Download, Eye, Edit, Trash2, CheckCircle, XCircle, X, MapPin, Users, Building, Mail, Calendar, Save } from 'lucide-react';

const Companies = () => {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: 'TechCorp',
      industry: 'Technology',
      employees: '500-1000',
      jobs: 12,
      joined: '2024-01-15',
      email: 'contact@techcorp.com',
      location: 'San Francisco, US',
      phone: '+1 (555) 123-4567',
      website: 'www.techcorp.com',
      description: 'Leading technology solutions provider focused on innovation and excellence.',
      foundedYear: '2010',
      companyType: 'Private',
      headquarters: 'San Francisco, CA',
      ceo: 'John Smith',
      revenue: '$50M - $100M'
    },
    {
      id: 2,
      name: 'DesignHub',
      industry: 'Design',
      employees: '50-100',
      jobs: 8,
      joined: '2024-01-20',
      email: 'hello@designhub.com',
      location: 'London, UK',
      phone: '+44 20 7946 0958',
      website: 'www.designhub.com',
      description: 'Creative design agency specializing in digital experiences and brand identity.',
      foundedYear: '2018',
      companyType: 'Private',
      headquarters: 'London, UK',
      ceo: 'Sarah Johnson',
      revenue: '$10M - $25M'
    },
    {
      id: 3,
      name: 'StartupXYZ',
      industry: 'Fintech',
      employees: '10-50',
      jobs: 5,
      joined: '2024-01-18',
      email: 'info@startupxyz.com',
      location: 'Berlin, Germany',
      phone: '+49 30 1234 5678',
      website: 'www.startupxyz.com',
      description: 'Innovative fintech startup revolutionizing digital payments and financial services.',
      foundedYear: '2020',
      companyType: 'Startup',
      headquarters: 'Berlin, Germany',
      ceo: 'Michael Chen',
      revenue: '$1M - $5M'
    }
  ]);

  const [selectedCompany, setSelectedCompany] = useState(null);
  const [editingCompany, setEditingCompany] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const industries = ['Technology', 'Design', 'Fintech', 'Healthcare', 'Education', 'Marketing', 'Manufacturing', 'Retail'];
  const employeeSizes = ['1-10', '10-50', '50-100', '100-500', '500-1000', '1000+'];
  const companyTypes = ['Private', 'Public', 'Startup', 'Non-profit', 'Government'];
  const revenueRanges = ['Under $1M', '$1M - $5M', '$5M - $10M', '$10M - $25M', '$25M - $50M', '$50M - $100M', '$100M+'];

  

  const handleViewCompany = (company) => {
    setSelectedCompany(company);
  };

  const handleEditCompany = (company) => {
    setEditingCompany(company);
    setEditFormData({ ...company });
  };

  const handleDeleteCompany = (companyId) => {
    setCompanies(companies.filter(company => company.id !== companyId));
  };

  const closeModal = () => {
    setSelectedCompany(null);
    setEditingCompany(null);
    setEditFormData({});
  };

  const handleInputChange = (field, value) => {
    setEditFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveChanges = () => {
    setCompanies(companies.map(company => 
      company.id === editingCompany.id ? { ...editFormData } : company
    ));
    closeModal();
  };




  return (
    <div className="space-y-6">
      {/* Companies Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Companies Management</h2>
          <p className="text-gray-600">Manage company profiles and verifications</p>
        </div>
        <div className="flex space-x-3">

        </div>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div key={company.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">{company.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{company.name}</h3>
                  <p className="text-sm text-gray-500">{company.industry}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Employees:</span> {company.employees}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Active Jobs:</span> {company.jobs}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Location:</span> {company.location}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Email:</span> {company.email}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Joined:</span> {company.joined}
              </p>
            </div>

            <div className="flex space-x-2">
              <button 
                onClick={() => handleViewCompany(company)}
                className="flex-1 flex items-center justify-center px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Eye className="w-4 h-4 mr-1" />
                View
              </button>
              <button 
                onClick={() => handleEditCompany(company)}
                className="flex-1 flex items-center justify-center px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </button>
             
              <button 
                onClick={() => handleDeleteCompany(company.id)}
                className="flex items-center justify-center px-3 py-2 text-sm text-red-600 border border-red-300 rounded-lg hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Company Details Modal (View) */}
      {selectedCompany && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">{selectedCompany.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedCompany.name}</h3>
                  <p className="text-gray-600">{selectedCompany.industry}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Company Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{selectedCompany.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{selectedCompany.employees} employees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{selectedCompany.jobs} active jobs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Joined {selectedCompany.joined}</span>
                </div>
              </div>

              {/* Company Information */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Company Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${getStatusBadge(selectedCompany.status)}`}>
                      {selectedCompany.status}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Founded:</span>
                    <span className="ml-2 text-gray-900">{selectedCompany.foundedYear}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Company Type:</span>
                    <span className="ml-2 text-gray-900">{selectedCompany.companyType}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Revenue:</span>
                    <span className="ml-2 text-gray-900">{selectedCompany.revenue}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">CEO:</span>
                    <span className="ml-2 text-gray-900">{selectedCompany.ceo}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Headquarters:</span>
                    <span className="ml-2 text-gray-900">{selectedCompany.headquarters}</span>
                  </div>
                </div>
              </div>

              {/* Company Description */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Company Description</h4>
                <p className="text-gray-700 leading-relaxed">{selectedCompany.description}</p>
              </div>

              {/* Contact Information */}
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Email:</span>
                    <span className="ml-2 text-indigo-600">{selectedCompany.email}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone:</span>
                    <span className="ml-2 text-gray-900">{selectedCompany.phone}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Website:</span>
                    <span className="ml-2 text-indigo-600">{selectedCompany.website}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 px-6 py-4 flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedCompany(null);
                  handleEditCompany(selectedCompany);
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Edit Company
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Company Edit Modal */}
      {editingCompany && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Edit Company</h3>
                <p className="text-gray-600">Update company details and information</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Edit Form */}
            <div className="p-6">
              <form className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      value={editFormData.name || ""}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                    <select
                      value={editFormData.industry || ""}
                      onChange={(e) => handleInputChange("industry", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      value={editFormData.location || ""}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Headquarters</label>
                    <input
                      type="text"
                      value={editFormData.headquarters || ""}
                      onChange={(e) => handleInputChange("headquarters", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Company Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Employee Count</label>
                    <select
                      value={editFormData.employees || ""}
                      onChange={(e) => handleInputChange("employees", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {employeeSizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Type</label>
                    <select
                      value={editFormData.companyType || ""}
                      onChange={(e) => handleInputChange("companyType", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {companyTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Founded Year</label>
                    <input
                      type="text"
                      value={editFormData.foundedYear || ""}
                      onChange={(e) => handleInputChange("foundedYear", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Leadership & Financial */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CEO</label>
                    <input
                      type="text"
                      value={editFormData.ceo || ""}
                      onChange={(e) => handleInputChange("ceo", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Revenue Range</label>
                    <select
                      value={editFormData.revenue || ""}
                      onChange={(e) => handleInputChange("revenue", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {revenueRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={editFormData.email || ""}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={editFormData.phone || ""}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                    <input
                      type="url"
                      value={editFormData.website || ""}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Company Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Description</label>
                  <textarea
                    value={editFormData.description || ""}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 px-6 py-4 flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Companies;
