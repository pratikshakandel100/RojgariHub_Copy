import React, { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import SidebarComponent from "./SidebarComponent";
import OverviewComponent from "./OverviewComponent";
import JobsManagement from "./JobsManagement";
import Companies from "./Companies";
import Users from "./Users";
import Analytics from "./Analytics";
import Settings from "./Settings";
import BoostPage from "./BoostPage";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewComponent />;
      case "jobs":
        return <JobsManagement />;
      case "companies":
        return <Companies />;
      case "users":
        return <Users />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <Settings />;
      case "boost":
        return <BoostPage />;
      default:
        return <OverviewComponent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SidebarComponent activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col">
        <NavbarComponent
          activeTab={activeTab}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <main className="flex-1 p-6">{renderActiveComponent()}</main>
      </div>
    </div>
  );
};

export default AdminDashboard;
