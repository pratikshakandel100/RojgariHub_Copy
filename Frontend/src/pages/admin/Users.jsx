import React, { useState } from 'react';
import { Filter, Download, Eye, Edit, Trash2, UserCheck, UserX } from 'lucide-react';

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      type: 'Job Seeker',
      status: 'Active',
      joined: '2024-01-10',
      applications: 15,
      location: 'New York, US'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      type: 'Employer',
      status: 'Active',
      joined: '2024-01-12',
      applications: 0,
      location: 'London, UK'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.j@email.com',
      type: 'Job Seeker',
      status: 'Inactive',
      joined: '2024-01-08',
      applications: 8,
      location: 'Toronto, Canada'
    }
  ]);

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Active': 'bg-green-100 text-green-700',
      'Inactive': 'bg-red-100 text-red-700',
      'Suspended': 'bg-yellow-100 text-yellow-700'
    };
    return statusConfig[status] || 'bg-gray-100 text-gray-700';
  };

  const getTypeBadge = (type) => {
    const typeConfig = {
      'Job Seeker': 'bg-blue-100 text-blue-700',
      'Employer': 'bg-purple-100 text-purple-700'
    };
    return typeConfig[type] || 'bg-gray-100 text-gray-700';
  };

  const handleSuspendUser = (userId) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: 'Suspended' }
        : user
    ));
  };

  const handleActivateUser = (userId) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: 'Active' }
        : user
    ));
  };

  return (
    <div className="space-y-6">
      {/* Users Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Users Management</h2>
          <p className="text-gray-600">Manage job seekers and employer accounts</p>
        </div>
        <div className="flex space-x-3">

        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Applications</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeBadge(user.type)}`}>
                      {user.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBadge(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{user.location}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{user.applications}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{user.joined}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      {user.status === 'Active' ? (
                        <button 
                          onClick={() => handleSuspendUser(user.id)}
                          className="p-1 text-gray-400 hover:text-red-600"
                        >
                          <UserX className="w-4 h-4" />
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleActivateUser(user.id)}
                          className="p-1 text-gray-400 hover:text-green-600"
                        >
                          <UserCheck className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
