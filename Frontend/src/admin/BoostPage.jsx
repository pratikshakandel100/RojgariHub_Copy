import React, { useState } from 'react';
import { 
  Zap, 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Filter,
  Download,
  CheckCircle,
  XCircle,
  Clock,
  BarChart3,
  CreditCard,
  Receipt,
  AlertTriangle,
  RefreshCw,
  FileText,
  Wallet
} from 'lucide-react';

const BoostPage = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [boostPosts, setBoostPosts] = useState([
    {
      id: 1,
      jobTitle: 'Senior React Developer',
      company: 'TechCorp',
      employerEmail: 'hr@techcorp.com',
      boostType: 'Premium',
      duration: '7 days',
      price: 99,
      status: 'Pending',
      submittedDate: '2024-01-20',
      paymentStatus: 'Paid',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN_001234',
      platformFee: 9.9,
      netRevenue: 89.1,
      jobDescription: 'Looking for an experienced React developer to join our growing team...',
      companySize: '500-1000',
      location: 'San Francisco, US'
    },
    {
      id: 2,
      jobTitle: 'UX Designer',
      company: 'DesignHub',
      employerEmail: 'jobs@designhub.com',
      boostType: 'Standard',
      duration: '3 days',
      price: 49,
      status: 'Pending',
      submittedDate: '2024-01-21',
      paymentStatus: 'Paid',
      paymentMethod: 'PayPal',
      transactionId: 'TXN_001235',
      platformFee: 4.9,
      netRevenue: 44.1,
      jobDescription: 'Seeking a creative UX designer to enhance user experiences...',
      companySize: '50-100',
      location: 'London, UK'
    },
    {
      id: 3,
      jobTitle: 'Product Manager',
      company: 'StartupXYZ',
      employerEmail: 'hiring@startupxyz.com',
      boostType: 'Basic',
      duration: '1 day',
      price: 19,
      status: 'Active',
      submittedDate: '2024-01-18',
      approvedDate: '2024-01-18',
      paymentStatus: 'Paid',
      paymentMethod: 'Stripe',
      transactionId: 'TXN_001236',
      platformFee: 1.9,
      netRevenue: 17.1,
      views: 423,
      applications: 18,
      clickRate: '4.1%',
      remainingDays: 0,
      jobDescription: 'Join our dynamic team as a Product Manager...',
      companySize: '10-50',
      location: 'Berlin, Germany'
    },
    {
      id: 4,
      jobTitle: 'Data Scientist',
      company: 'DataFlow',
      employerEmail: 'recruit@dataflow.com',
      boostType: 'Premium',
      duration: '7 days',
      price: 99,
      status: 'Rejected',
      submittedDate: '2024-01-19',
      rejectedDate: '2024-01-19',
      rejectionReason: 'Job description does not meet quality standards',
      paymentStatus: 'Refunded',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN_001237',
      platformFee: 0,
      netRevenue: 0,
      jobDescription: 'Data scientist needed...',
      companySize: '100-500',
      location: 'Toronto, Canada'
    }
  ]);

  const [financialData, setFinancialData] = useState({
    totalRevenue: 2847,
    monthlyRevenue: 1250,
    pendingPayments: 148,
    refundedAmount: 99,
    platformFees: 284.7,
    netProfit: 2562.3,
    averageBoostPrice: 55.6,
    conversionRate: 78.5
  });

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Active': 'bg-green-100 text-green-700',
      'Expired': 'bg-red-100 text-red-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Rejected': 'bg-red-100 text-red-700',
      'Approved': 'bg-green-100 text-green-700'
    };
    return statusConfig[status] || 'bg-gray-100 text-gray-700';
  };

  const getPaymentStatusBadge = (status) => {
    const statusConfig = {
      'Paid': 'bg-green-100 text-green-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Failed': 'bg-red-100 text-red-700',
      'Refunded': 'bg-gray-100 text-gray-700'
    };
    return statusConfig[status] || 'bg-gray-100 text-gray-700';
  };

  const getBoostTypeBadge = (type) => {
    const typeConfig = {
      'Basic': 'bg-gray-100 text-gray-700',
      'Standard': 'bg-blue-100 text-blue-700',
      'Premium': 'bg-purple-100 text-purple-700'
    };
    return typeConfig[type] || 'bg-gray-100 text-gray-700';
  };

  const handleApproveBoost = (boostId) => {
    setBoostPosts(boostPosts.map(boost => 
      boost.id === boostId 
        ? { 
            ...boost, 
            status: 'Active',
            approvedDate: new Date().toISOString().split('T')[0]
          }
        : boost
    ));
  };

  const handleRejectBoost = (boostId, reason = '') => {
    setBoostPosts(boostPosts.map(boost => 
      boost.id === boostId 
        ? { 
            ...boost, 
            status: 'Rejected',
            rejectedDate: new Date().toISOString().split('T')[0],
            rejectionReason: reason,
            paymentStatus: 'Refunded'
          }
        : boost
    ));
  };

  const handleRefund = (boostId) => {
    setBoostPosts(boostPosts.map(boost => 
      boost.id === boostId 
        ? { 
            ...boost, 
            paymentStatus: 'Refunded',
            netRevenue: 0,
            platformFee: 0
          }
        : boost
    ));
  };

  // Financial Overview Component
  const renderFinancialOverview = () => (
    <div className="space-y-6">
      {/* Financial Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${financialData.totalRevenue}</p>
              <p className="text-sm text-green-600 mt-1">+12% from last month</p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Monthly Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${financialData.monthlyRevenue}</p>
              <p className="text-sm text-green-600 mt-1">+8% from last month</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Platform Fees</p>
              <p className="text-2xl font-bold text-gray-900">${financialData.platformFees}</p>
              <p className="text-sm text-gray-600 mt-1">10% commission</p>
            </div>
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Net Profit</p>
              <p className="text-2xl font-bold text-gray-900">${financialData.netProfit}</p>
              <p className="text-sm text-green-600 mt-1">After fees & refunds</p>
            </div>
            <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods & Transaction Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-900">Credit Card</span>
                </div>
                <span className="font-semibold text-gray-900">65%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Wallet className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-900">PayPal</span>
                </div>
                <span className="font-semibold text-gray-900">25%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Receipt className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-900">Stripe</span>
                </div>
                <span className="font-semibold text-gray-900">10%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Financial Summary</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Pending Payments</span>
                <span className="font-semibold text-yellow-600">${financialData.pendingPayments}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Refunded Amount</span>
                <span className="font-semibold text-red-600">${financialData.refundedAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Average Boost Price</span>
                <span className="font-semibold text-gray-900">${financialData.averageBoostPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Approval Rate</span>
                <span className="font-semibold text-green-600">{financialData.conversionRate}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Pending Boosts for Admin Approval
  const renderPendingBoosts = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Pending Boost Requests</h3>
          <p className="text-gray-600">Review and approve employer boost requests</p>
        </div>
        <div className="flex space-x-3">
        
        </div>
      </div>

      <div className="space-y-4">
        {boostPosts.filter(boost => boost.status === 'Pending').map((boost) => (
          <div key={boost.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Job Details */}
              <div className="lg:col-span-2">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{boost.jobTitle}</h4>
                    <p className="text-gray-600">{boost.company}</p>
                    <p className="text-sm text-gray-500">{boost.employerEmail}</p>
                  </div>
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getBoostTypeBadge(boost.boostType)}`}>
                      {boost.boostType}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBadge(boost.status)}`}>
                      {boost.status}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Job Description:</p>
                  <p className="text-gray-800">{boost.jobDescription}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Location:</span>
                    <span className="ml-2 text-gray-900">{boost.location}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Company Size:</span>
                    <span className="ml-2 text-gray-900">{boost.companySize}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Duration:</span>
                    <span className="ml-2 text-gray-900">{boost.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Submitted:</span>
                    <span className="ml-2 text-gray-900">{boost.submittedDate}</span>
                  </div>
                </div>
              </div>

              {/* Payment & Action Details */}
              <div className="border-l border-gray-200 pl-6">
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Payment Details</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Price:</span>
                      <span className="font-semibold text-gray-900">${boost.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Platform Fee:</span>
                      <span className="text-gray-900">${boost.platformFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Net Revenue:</span>
                      <span className="font-semibold text-green-600">${boost.netRevenue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Payment:</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getPaymentStatusBadge(boost.paymentStatus)}`}>
                        {boost.paymentStatus}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Method:</span>
                      <span className="text-gray-900">{boost.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Transaction:</span>
                      <span className="text-gray-900 text-xs">{boost.transactionId}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => handleApproveBoost(boost.id)}
                    className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve Boost
                  </button>
                  <button 
                    onClick={() => handleRejectBoost(boost.id, 'Quality standards not met')}
                    className="w-full flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject & Refund
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // All Boosts with Financial Data
  const renderAllBoosts = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">All Boost Campaigns</h3>
          <p className="text-gray-600">Complete history with financial tracking</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Job Details</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Boost Type</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {boostPosts.map((boost) => (
                <tr key={boost.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{boost.jobTitle}</div>
                      <div className="text-sm text-gray-500">{boost.submittedDate}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm text-gray-900">{boost.company}</div>
                      <div className="text-xs text-gray-500">{boost.employerEmail}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getBoostTypeBadge(boost.boostType)}`}>
                      {boost.boostType}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBadge(boost.status)}`}>
                      {boost.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">${boost.price}</div>
                      <span className={`px-1 py-0.5 rounded text-xs font-medium ${getPaymentStatusBadge(boost.paymentStatus)}`}>
                        {boost.paymentStatus}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-green-600">${boost.netRevenue}</div>
                      <div className="text-xs text-gray-500">Fee: ${boost.platformFee}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {boost.views ? (
                      <div>
                        <div className="text-sm text-gray-900">{boost.views} views</div>
                        <div className="text-xs text-gray-500">{boost.applications} apps</div>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">No data</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      {boost.status === 'Pending' && (
                        <>
                          <button 
                            onClick={() => handleApproveBoost(boost.id)}
                            className="p-1 text-gray-400 hover:text-green-600"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleRejectBoost(boost.id)}
                            className="p-1 text-gray-400 hover:text-red-600"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      {boost.paymentStatus === 'Paid' && boost.status !== 'Active' && (
                        <button 
                          onClick={() => handleRefund(boost.id)}
                          className="p-1 text-gray-400 hover:text-yellow-600"
                        >
                          <RefreshCw className="w-4 h-4" />
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Boost Management & Financial Overview</h2>
          <p className="text-gray-600">Manage employer boost requests and track financial performance</p>
        </div>
        <div className="flex space-x-3">

        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('financial')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'financial'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Financial Overview
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'pending'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Pending Requests
            <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
              {boostPosts.filter(boost => boost.status === 'Pending').length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'all'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            All Boosts
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'financial' && renderFinancialOverview()}
      {activeTab === 'pending' && renderPendingBoosts()}
      {activeTab === 'all' && renderAllBoosts()}
    </div>
  );
};

export default BoostPage;
