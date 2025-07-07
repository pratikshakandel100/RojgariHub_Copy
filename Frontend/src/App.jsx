<<<<<<< HEAD
import EmployeeDashboard from "./pages/Employee/Dashboard";
import EmployeeApplication from "./pages/Employee/Applications";
import EmployeeProfile from "./pages/Employee/EmployeeProfile";
import EmployeeJobs from "./pages/Employee/jobs";
import EmployeePostjobs from "./pages/Employee/Postjob";
import EmployeeSettings from "./pages/Employee/Setting";
import Home from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import EmployeeLayout from "./components/employee/Layout";

import { useState } from "react";

function App() {
  const [jobs, setJobs] = useState([
    {
      id: '1',
      title: 'Senior React Developer',
      company: 'TechCorp Solutions',
      location: 'Mumbai, India',
      type: 'Full-time',
      salary: '₹15-25 LPA',
      description: 'We are looking for a Senior React Developer to join our dynamic team.',
      requirements: ['5+ years React experience', 'TypeScript', 'Node.js', 'Team leadership'],
      postedDate: '2024-01-15',
      applications: 24,
      status: 'Active'
    },
    {
      id: '2',
      title: 'UI/UX Designer',
      company: 'TechCorp Solutions',
      location: 'Bangalore, India',
      type: 'Full-time',
      salary: '₹8-15 LPA',
      description: 'Creative UI/UX Designer needed for innovative projects.',
      requirements: ['Figma/Adobe XD', 'User Research', 'Prototyping', '3+ years experience'],
      postedDate: '2024-01-10',
      applications: 18,
      status: 'Active'
    }
  ]);

  const [applications, setApplications] = useState([
    {
      id: '1',
      jobId: '1',
      jobTitle: 'Senior React Developer',
      candidateName: 'Arjun Sharma',
      candidateEmail: 'arjun.sharma@email.com',
      candidatePhone: '+91 9876543210',
      experience: '6 years',
      appliedDate: '2024-01-18',
      status: 'Pending',
      resume: 'arjun_sharma_resume.pdf'
    },
    {
      id: '2',
      jobId: '1',
      jobTitle: 'Senior React Developer',
      candidateName: 'Priya Patel',
      candidateEmail: 'priya.patel@email.com',
      candidatePhone: '+91 9876543211',
      experience: '7 years',
      appliedDate: '2024-01-17',
      status: 'Reviewed',
      resume: 'priya_patel_resume.pdf'
    },
    {
      id: '3',
      jobId: '2',
      jobTitle: 'UI/UX Designer',
      candidateName: 'Rahul Kumar',
      candidateEmail: 'rahul.kumar@email.com',
      candidatePhone: '+91 9876543212',
      experience: '4 years',
      appliedDate: '2024-01-16',
      status: 'Accepted',
      resume: 'rahul_kumar_resume.pdf'
    }
  ]);

  const [newJob, setNewJob] = useState({
    title: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
    requirements: ''
  });

  const [companyProfile, setCompanyProfile] = useState({
    name: 'TechCorp Solutions',
    email: 'hr@techcorp.com',
    phone: '+91 9876543210',
    location: 'Mumbai, India',
    website: 'www.techcorp.com',
    description: 'Leading technology solutions provider focused on innovation and excellence.',
    founded: '2015',
    employees: '500-1000'
  });

  const [settings, setSettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    emailNotifications: true,
    pushNotifications: true,
    applicationAlerts: true,
    weeklyReports: false,
    marketingEmails: false,
    profileVisible: true,
    showCompanyInfo: true,
    allowDirectMessages: true,
    language: 'en',
    timezone: 'Asia/Kolkata',
    currency: 'INR',
    dateFormat: 'DD/MM/YYYY',
    darkMode: false
  });

  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleJobSubmit = (e) => {
    e.preventDefault();
    const job = {
      id: (jobs.length + 1).toString(),
      title: newJob.title,
      company: companyProfile.name,
      location: newJob.location,
      type: newJob.type,
      salary: newJob.salary,
      description: newJob.description,
      requirements: newJob.requirements.split(',').map(req => req.trim()),
      postedDate: new Date().toISOString().split('T')[0],
      applications: 0,
      status: 'Active'
    };
    setJobs([...jobs, job]);
    setNewJob({ title: '', location: '', type: 'Full-time', salary: '', description: '', requirements: '' });
    setActiveTab('jobs');
  };


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />


          <Route path="/employee" element={<EmployeeLayout applications={applications} settings={settings} companyProfile={companyProfile} />}>
            <Route path="dashboard" element={<EmployeeDashboard jobs={jobs} applications={applications} setActiveTab={activeTab} />} />
            <Route path="applications" element={<EmployeeApplication applications={applications} jobs={jobs} />} />

            <Route path="profile" element={<EmployeeProfile companyProfile={companyProfile} setCompanyProfile={setCompanyProfile} />} />

            <Route path="jobs" element={<EmployeeJobs jobs={jobs} setActiveTab={setActiveTab} />} />

            <Route path="postjob" element={<EmployeePostjobs newJob={newJob} setNewJob={setNewJob} setActiveTab={setActiveTab} handleJobSubmit={handleJobSubmit} />} />

            <Route path="setting" element={<EmployeeSettings settings={settings} setSettings={setSettings} />} />

          </Route>

        </Routes>
      </BrowserRouter>

    </>)
}
