import React from "react";

const Tab = ({ setActiveTab, activeTab }) => {
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 !p-0  dark:text-gray-400 w-full md:w-[80%] m-auto">
      <li className="mr-2">
        <p
          className={`inline-block p-3  rounded-t-lg ${
            activeTab === "CourseMaterials"
              ? "text-white active bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600"
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }`}
          onClick={() => handleTabClick("CourseMaterials")}
        >
          Course Materials
        </p>
      </li>
      <li className="mr-2">
        <p
          className={`inline-block p-3  rounded-t-lg ${
            activeTab === "Grades"
              ? "text-white active bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }`}
          onClick={() => handleTabClick("Grades")}
        >
          Grades
        </p>
      </li>
      <li className="mr-2">
        <p
          className={`inline-block p-3  rounded-t-lg ${
            activeTab === "Attachments"
              ? "text-white active bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }`}
          onClick={() => handleTabClick("Attachments")}
        >
          Attachments
        </p>
      </li>
      <li className="mr-2">
        <p
          className={`inline-block p-3  rounded-t-lg ${
            activeTab === "Certificate"
              ? "text-white active bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }`}
          onClick={() => handleTabClick("Certificate")}
        >
          Certificate
        </p>
      </li>
    </ul>
  );
};

export default Tab;
