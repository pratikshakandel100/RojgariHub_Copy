import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import RojgarHubHomepage from './pages/Homepage';
import Dashboard from './pages/user/Dashboard';
import Overview from './pages/user/Overview';
import JobSearch from './pages/user/Jobsearch';
import Applications from './pages/user/Applications';
import Profile from './pages/user/Profile';
import SavedJobs from './pages/user/Savedjobs';
import Signout from './pages/user/Signout';
import Settings from './pages/user/Settings';
import ViewDetails from './pages/user/viewdetails';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RojgarHubHomepage />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="jobs" element={<JobSearch />} />
          <Route path="applications" element={<Applications />} />
          <Route path="profile" element={<Profile />} />
          <Route path="saved" element={<SavedJobs />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/viewdetails" element={<ViewDetails />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
