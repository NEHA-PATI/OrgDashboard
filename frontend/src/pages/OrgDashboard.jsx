import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger, Button, Badge } from "../components/basic-ui";

import Overview from "../components/Overview";
import AssetManagement from "../components/AssetManagement";
import CreditEarnings from "../components/CreditEarnings";
import FleetManagement from "../components/FleetManagement";
import ComplianceReports from "../components/ComplianceReports";
import TeamManagement from "../components/TeamManagement";
import QuickActions from "../components/QuickActions";
import "../components/global.css";








// SVG Icons
const BellIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const SunIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const ActivityIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const FileCheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6M9 15l2 2 4-4" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 6l6 6-6 6M0 12h18" />
  </svg>
);


const TruckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M3 13h1l3 5h13v-5h-2.5L17 9H5z" />
    <circle cx="7.5" cy="18.5" r="1.5" />
    <circle cx="17.5" cy="18.5" r="1.5" />
  </svg>
);

const FileTextIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);

const UsersIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const ZapIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

// Notification Dropdown Component
const NotificationDropdown = ({ notifications, isOpen, onToggle }) => (
  <motion.div
    className="notification-dropdown"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <Button className="button-ghost p-2 relative" onClick={onToggle}>
      <BellIcon className="w-5 h-5" />
      {notifications.length > 0 && (
        <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs bg-red-600 text-white">
          {notifications.length}
        </Badge>
      )}
    </Button>
    {isOpen && (
      <>
        <div className="fixed inset-0 z-40" onClick={onToggle} />
        <motion.div
          className="dropdown-content dropdown-content-end w-80"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="notification-header">Notifications</div>
          {notifications.map((notification) => (
            <div key={notification.id} className="dropdown-item">
              <div className="flex items-start space-x-2">
                <div
                  className={`notification-dot ${
                    notification.type === "alert"
                      ? "bg-red-500"
                      : notification.type === "success"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                  }`}
                />
                <p className="text-sm">{notification.message}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </>
    )}
  </motion.div>
);

// Dashboard tabs configuration
const DASHBOARD_TABS = [
  {
    id: "overview",
    label: "Overview",
    icon: ActivityIcon,
    component: Overview,
  },
  {
    id: "assets",
    label: "Assets",
    icon: FileCheckIcon,
    component: AssetManagement,
  },
  {
    id: "earnings",
    label: "Earnings",
    icon: TrendingUpIcon,
    component: CreditEarnings,
  },
  { id: "fleet", label: "Fleet", icon: TruckIcon, component: FleetManagement },
  {
    id: "compliance",
    label: "Compliance",
    icon: FileTextIcon,
    component: ComplianceReports,
  },
  { id: "team", label: "Team", icon: UsersIcon, component: TeamManagement },
  {
    id: "actions",
    label: "Quick Actions",
    icon: ZapIcon,
    component: QuickActions,
  },
];

const OrgDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const [notifications] = useState([
    { id: 1, type: "alert", message: "Compliance report due in 3 days" },
    { id: 2, type: "success", message: "EV-001 credits verified" },
    { id: 3, type: "warning", message: "Solar panel maintenance overdue" },
  ]);

  // const ActiveComponent = DASHBOARD_TABS.find((tab) => tab.id === activeTab)?.component || Overview;

  const handleTabChange = (tabId) => {
    setIsLoading(true);
    setActiveTab(tabId);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.div
      className={`min-h-screen bg-gray-50 ${isDarkMode ? "dark" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
     <motion.header
        className="header"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center space-x-3">
          {/* <div className="logo-container">
            <ActivityIcon className="w-6 h-6 text-white" />
          </div> */}
          <div>
            <h1 className="text-2xl font-bold text-gray-dark">
              Organization Dashboard
            </h1>
            <p className="text-sm text-gray-600">
              Manage your carbon initiatives
            </p>
          </div>
        </div>
        {/* <div className="flex items-center space-x-4">
          <Button className="button-ghost p-2" title="Calendar">
            <CalendarIcon className="w-5 h-5" />
          </Button>
          <NotificationDropdown
            notifications={notifications}
            isOpen={showNotifications}
            onToggle={() => setShowNotifications(!showNotifications)}
          />
          <Button
            className="button-ghost p-2"
            onClick={toggleDarkMode}
            title="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </Button>
        </div> */}
      </motion.header>

      {/* Main Content */}





      {/* <div className="p-6">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >``
          <TabsList className="tabs-list">
            {DASHBOARD_TABS.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="tabs-trigger"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-medium">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {DASHBOARD_TABS.map((tab) => {
            const TabComponent = tab.component;
            return (
              <TabsContent key={tab.id} value={tab.id}>
                {isLoading ? (
                  <div className="spinner">
                    <div className="flex items-center space-x-2">
                      <div className="spinner-circle" />
                      <span className="text-gray-600">
                        Loading dashboard section...
                      </span>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TabComponent />
                  </motion.div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div> */}



<div className="p-6">
  <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
    
    {/* Tabs List */}
    <TabsList className="newtab-header">
      {DASHBOARD_TABS.map((tab) => {
        const Icon = tab.icon;
        const isActive = tab.id === activeTab;
        return (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className={`newtab-button ${isActive ? "active" : ""}`}
          >
            <Icon className={`icon ${tab.color}`} />
            <span>{tab.label}</span>
          </TabsTrigger>
        );
      })}
    </TabsList>

    {/* Tabs Content */}
    {DASHBOARD_TABS.map((tab) => {
      const TabComponent = tab.component;
      return (
        <TabsContent key={tab.id} value={tab.id}>
          {isLoading ? (
            <div className="spinner">
              <div className="flex items-center space-x-2">
                <div className="spinner-circle" />
                <span className="text-gray-600">Loading dashboard section...</span>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TabComponent />
            </motion.div>
          )}
        </TabsContent>
      );
    })}
  </Tabs>
</div>











    </motion.div>
  );
};

export default OrgDashboard;


