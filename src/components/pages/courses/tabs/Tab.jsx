import React from "react";

const Tab = ({ setActiveTab, activeTab }) => {
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500   dark:border-gray-700 dark:text-gray-400">
      <li className="mr-2">
        <p
          className={`inline-block p-2 rounded-t-lg ${
            activeTab === "Profile"
              ? "text-white bg-gray-100 active dark:bg-gray-800 dark:text-white"
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }`}
          onClick={() => handleTabClick("Profile")}
        >
          Course Materials
        </p>
      </li>
      <li className="mr-2">
        <p
          className={`inline-block p-2 rounded-t-lg ${
            activeTab === "Dashboard"
              ? "text-white bg-gray-100 active dark:bg-gray-800 dark:text-white"
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }`}
          onClick={() => handleTabClick("Dashboard")}
        >
          Grades
        </p>
      </li>
      <li className="mr-2">
        <p
          className={`inline-block p-2 rounded-t-lg ${
            activeTab === "Settings"
              ? "text-white bg-gray-100 active dark:bg-gray-800 dark:text-white"
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }`}
          onClick={() => handleTabClick("Settings")}
        >
          Attachments
        </p>
      </li>
      <li className="mr-2">
        <p
          className={`inline-block p-2 rounded-t-lg ${
            activeTab === "Contacts"
              ? "text-white bg-gray-100 active dark:bg-gray-800 dark:text-white"
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }`}
          onClick={() => handleTabClick("Contacts")}
        >
          Certificate
        </p>
      </li>
    </ul>
  );
};

export default Tab;
