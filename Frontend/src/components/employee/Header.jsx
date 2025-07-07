import React from 'react';
import { Briefcase, Bell } from 'lucide-react';

const Header = ({ companyProfile }) => (
  <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-4">
        <Briefcase className="h-8 w-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">RojgariHub</h1>
        <span className="text-sm text-gray-500 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">Employee</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">TC</span>
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">
            {companyProfile.name}
          </span>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
