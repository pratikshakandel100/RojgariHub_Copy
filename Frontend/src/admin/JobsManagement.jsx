import React, { useState } from "react";
import { Filter, Download, Plus, Eye, Edit, Trash2, X, MapPin, Clock, DollarSign, Users, Save, AlertCircle } from "lucide-react";

const JobsManagement = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "San Francisco, US",
      type: "Full Time",
      applications: 45,
      posted: "2 hours ago",
      salary: "$120k - $150k",
      description: "We are looking for a Senior React Developer to join our dynamic team. The ideal candidate should have extensive experience in building scalable web applications using React and modern JavaScript frameworks.",
      requirements: [
        "5+ years of experience with React.js",
        "Strong proficiency in JavaScript, HTML5, and CSS3",
        "Experience with Redux or other state management libraries",
        "Familiarity with RESTful APIs and GraphQL",
        "Knowledge of modern build tools (Webpack, Babel)",
        "Experience with version control systems (Git)",
        "Strong problem-solving and communication skills"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Comprehensive health, dental, and vision insurance",
        "401(k) with company matching",
        "Flexible working hours and remote work options",
        "Professional development budget",
        "Unlimited PTO policy",
        "Modern office with free meals and snacks"
      ],
      contactEmail: "hr@techcorp.com",
      contactPhone: "+1 (555) 123-4567",
      companySize: "500-1000 employees",
      industry: "Technology",
      experienceLevel: "Senior Level",
      status: "Active"
    },
    {
      id: 2,
      title: "UX Designer",
      company: "DesignHub",
      location: "London, UK",
      type: "Remote",
      applications: 32,
      posted: "5 hours ago",
      salary: "$80k - $100k",
      description: "Seeking a creative UX Designer to enhance user experiences across our digital platforms. You'll work closely with product managers and developers to create intuitive and engaging user interfaces.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)",
        "Strong understanding of user-centered design principles",
        "Experience with user research and usability testing",
        "Knowledge of responsive and mobile design",
        "Portfolio demonstrating design process and outcomes"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance coverage",
        "Flexible working arrangements",
        "Professional development opportunities",
        "Creative workspace and tools",
        "Annual design conference budget"
      ],
      contactEmail: "jobs@designhub.com",
      contactPhone: "+44 20 7946 0958",
      companySize: "50-100 employees",
      industry: "Design & Creative",
      experienceLevel: "Mid Level",
      status: "Active"
    },
    {
      id: 3,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "Berlin, Germany",
      type: "Full Time",
      applications: 28,
      posted: "1 day ago",
      salary: "$90k - $120k",
      description: "Lead product development and strategy for our innovative fintech startup. Drive product vision, roadmap planning, and cross-functional collaboration to deliver exceptional user experiences.",
      requirements: [
        "4+ years of product management experience",
        "Strong analytical and strategic thinking skills",
        "Experience with Agile/Scrum methodologies",
        "Knowledge of fintech or financial services",
        "Excellent communication and leadership abilities",
        "Data-driven decision making approach"
      ],
      benefits: [
        "Equity participation in growing startup",
        "Flexible schedule and remote work options",
        "Health and wellness benefits",
        "Learning and development budget",
        "Startup environment with growth opportunities",
        "Team building events and company retreats"
      ],
      contactEmail: "hiring@startupxyz.com",
      contactPhone: "+49 30 1234 5678",
      companySize: "10-50 employees",
      industry: "Fintech",
      experienceLevel: "Senior Level",
      status: "Active"
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataFlow",
      location: "Toronto, Canada",
      type: "Full Time",
      applications: 67,
      posted: "2 days ago",
      salary: "$110k - $140k",
      description: "Analyze large datasets to drive business decisions and create predictive models. Work with cutting-edge machine learning technologies to solve complex business problems.",
      requirements: [
        "Master's degree in Data Science, Statistics, or related field",
        "Strong programming skills in Python and R",
        "Experience with machine learning frameworks (TensorFlow, PyTorch)",
        "Knowledge of SQL and database management",
        "Experience with data visualization tools",
        "Strong statistical analysis and modeling skills"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Comprehensive health benefits",
        "Gym membership and wellness programs",
        "Flexible work arrangements",
        "Conference and training opportunities",
        "State-of-the-art technology and tools"
      ],
      contactEmail: "recruit@dataflow.com",
      contactPhone: "+1 (416) 555-1234",
      companySize: "100-500 employees",
      industry: "Data & Analytics",
      experienceLevel: "Mid to Senior Level",
      status: "Active"
    }
  ]);

  const [selectedJob, setSelectedJob] = useState(null);
  const [editingJob, setEditingJob] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [newRequirement, setNewRequirement] = useState("");
  const [newBenefit, setNewBenefit] = useState("");

  const jobTypes = ["Full Time", "Part Time", "Remote", "Contract", "Internship"];
  const experienceLevels = ["Entry Level", "Mid Level", "Senior Level", "Executive"];
  const industries = ["Technology", "Design & Creative", "Fintech", "Data & Analytics", "Healthcare", "Education", "Marketing"];
  const companySizes = ["1-10 employees", "10-50 employees", "50-100 employees", "100-500 employees", "500-1000 employees", "1000+ employees"];

  const handleDeleteJob = (jobId) => {
    setJobs(jobs.filter((job) => job.id !== jobId));
  };

  const handleViewJob = (job) => {
    setSelectedJob(job);
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setEditFormData({
      ...job,
      requirements: [...job.requirements],
      benefits: [...job.benefits]
    });
  };

  const closeModal = () => {
    setSelectedJob(null);
    setEditingJob(null);
    setEditFormData({});
    setNewRequirement("");
    setNewBenefit("");
  };

  const handleInputChange = (field, value) => {
    setEditFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setEditFormData(prev => ({
        ...prev,
        requirements: [...prev.requirements, newRequirement.trim()]
      }));
      setNewRequirement("");
    }
  };

  const removeRequirement = (index) => {
    setEditFormData(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index)
    }));
  };

  const addBenefit = () => {
    if (newBenefit.trim()) {
      setEditFormData(prev => ({
        ...prev,
        benefits: [...prev.benefits, newBenefit.trim()]
      }));
      setNewBenefit("");
    }
  };

  const removeBenefit = (index) => {
    setEditFormData(prev => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index)
    }));
  };

  const handleSaveChanges = () => {
    setJobs(jobs.map(job => 
      job.id === editingJob.id ? { ...editFormData } : job
    ));
    closeModal();
  };

  return (
    <div className="space-y-6">
      {/* Jobs Management Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Jobs Management</h2>
          <p className="text-gray-600">Manage all job postings and applications</p>
        </div>
        <div className="flex space-x-3">
         
        </div>
      </div>

      {/* Jobs Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Applications</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{job.title}</div>
                      <div className="text-sm text-gray-500">{job.salary}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{job.company}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{job.location}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{job.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{job.applications}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewJob(job)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEditJob(job)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                        title="Edit Job"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteJob(job.id)}
                        className="p-1 text-gray-400 hover:text-red-600"
                        title="Delete Job"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Job Details Modal (View) */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h3>
                <p className="text-gray-600">{selectedJob.company}</p>
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
              {/* Job Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{selectedJob.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{selectedJob.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{selectedJob.salary}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{selectedJob.applications} applications</span>
                </div>
              </div>

              {/* Company Information */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Company Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Industry:</span>
                    <span className="ml-2 text-gray-900">{selectedJob.industry}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Company Size:</span>
                    <span className="ml-2 text-gray-900">{selectedJob.companySize}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Experience Level:</span>
                    <span className="ml-2 text-gray-900">{selectedJob.experienceLevel}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Posted:</span>
                    <span className="ml-2 text-gray-900">{selectedJob.posted}</span>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Job Description</h4>
                <p className="text-gray-700 leading-relaxed">{selectedJob.description}</p>
              </div>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Benefits & Perks</h4>
                <ul className="space-y-2">
                  {selectedJob.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">Email:</span>
                    <span className="ml-2 text-indigo-600">{selectedJob.contactEmail}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone:</span>
                    <span className="ml-2 text-gray-900">{selectedJob.contactPhone}</span>
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
                  setSelectedJob(null);
                  handleEditJob(selectedJob);
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Edit Job
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Job Edit Modal */}
      {editingJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Edit Job</h3>
                <p className="text-gray-600">Update job details and requirements</p>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                    <input
                      type="text"
                      value={editFormData.title || ""}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      value={editFormData.company || ""}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
                    <input
                      type="text"
                      value={editFormData.salary || ""}
                      onChange={(e) => handleInputChange("salary", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Dropdown Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                    <select
                      value={editFormData.type || ""}
                      onChange={(e) => handleInputChange("type", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {jobTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                    <select
                      value={editFormData.experienceLevel || ""}
                      onChange={(e) => handleInputChange("experienceLevel", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {experienceLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                    <select
                      value={editFormData.companySize || ""}
                      onChange={(e) => handleInputChange("companySize", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {companySizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                    <input
                      type="email"
                      value={editFormData.contactEmail || ""}
                      onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone</label>
                    <input
                      type="tel"
                      value={editFormData.contactPhone || ""}
                      onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Job Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
                  <textarea
                    value={editFormData.description || ""}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Requirements */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
                  <div className="space-y-2 mb-3">
                    {editFormData.requirements?.map((requirement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={requirement}
                          onChange={(e) => {
                            const newRequirements = [...editFormData.requirements];
                            newRequirements[index] = e.target.value;
                            handleInputChange("requirements", newRequirements);
                          }}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                          type="button"
                          onClick={() => removeRequirement(index)}
                          className="p-2 text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newRequirement}
                      onChange={(e) => setNewRequirement(e.target.value)}
                      placeholder="Add new requirement"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      type="button"
                      onClick={addRequirement}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                      Add
                    </button>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Benefits & Perks</label>
                  <div className="space-y-2 mb-3">
                    {editFormData.benefits?.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={benefit}
                          onChange={(e) => {
                            const newBenefits = [...editFormData.benefits];
                            newBenefits[index] = e.target.value;
                            handleInputChange("benefits", newBenefits);
                          }}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                          type="button"
                          onClick={() => removeBenefit(index)}
                          className="p-2 text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newBenefit}
                      onChange={(e) => setNewBenefit(e.target.value)}
                      placeholder="Add new benefit"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      type="button"
                      onClick={addBenefit}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                      Add
                    </button>
                  </div>
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

export default JobsManagement;
