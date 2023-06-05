import React from "react";
import TopBar from "../../molecules/TopBar";
import Tab from "../../Courses/tabs/Tab";
import { useState } from "react";
import CourseMaterials from "../../Courses/tabs/CourseMaterials";
import Grades from "../../Courses/tabs/Grades";

const Course = () => {
  const [activeTab, setActiveTab] = useState("CourseMaterials");

  return (
    <>
      <TopBar />

      <div className="bg-Bggradient py-20 bg-opacity-75 backdrop-blur-sm px-10">
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="min-h-screen flex w-full justify-center  backdrop-blur-sm">
          {activeTab === "CourseMaterials" && <CourseMaterials />}
          {activeTab === "Grades" && <Grades />}
        </div>
      </div>
    </>
  );
};

export default Course;
