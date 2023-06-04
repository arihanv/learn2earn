import React from "react";
import TopBar from "../../molecules/TopBar";
import Tab from "./tabs/Tab";
import { useState } from "react";
import CourseMaterials from "./tabs/CourseMaterials";

function Course() {
  const [activeTab, setActiveTab] = useState("Profile");

  // const [openAccordion, setOpenAccordion] = useState(false);

  // const toggleAccordion = () => {
  //   setOpenAccordion(!openAccordion);
  // };

  return (
    <>
      <TopBar />

      <div className="bg-Bggradient py-20  w-full px-10 bg-opacity-75 backdrop-blur-sm">
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="min-h-screen flex w-full justify-center  backdrop-blur-sm">
          {/* <div className="flex w-full h-full justify-between gap-4"> */}
          {/* <div className="w-[20%]">
              <div className="text-white p-8 rounded-lg mb-4 w-full h-full">
                <div className="my-3">
                  <div
                    className={`flex items-center justify-between ${
                      !openAccordion
                        ? "rounded-b-lg"
                        : " px-4 py-2 bg-gray-700 "
                    } rounded-t-lg  cursor-pointer`}
                    onClick={toggleAccordion}
                  >
                    <h2 className="text-lg m-0 font-medium">
                      Course Materials
                    </h2>
                    <svg
                      className={`w-6 h-6 transform ${
                        openAccordion ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {openAccordion && (
                    <div className="bg-gray-500 rounded-b-lg p-4">
                      <p>Lesson 1</p>
                      <p>Lesson 2</p>
                      <p>Lesson 3</p>
                      <p>etc.</p>
                    </div>
                  )}
                </div>
                <h2 className="text-lg text-[18px] my-2 font-semibold">
                  Grades
                </h2>
                <h2 className="text-lg text-[18px] my-2 font-semibold">
                  Notes
                </h2>
                <h2 className="text-lg text-[18px] my-2 font-semibold">
                  Resources
                </h2>
                <h2 className="text-lg text-[18px] my-2 font-semibold">
                  Threads
                </h2>
                <h2 className="text-lg text-[18px] my-2 font-semibold">
                  Course Info
                </h2>
                <h2 className="text-lg text-[18px] my-2 font-semibold">
                  Notes
                </h2>
              </div>
            </div> */}
          {activeTab === "Profile" && <CourseMaterials />}

          {/* <div className="w-[25%] bg-slate-500 rounded-lg"></div> */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Course;
