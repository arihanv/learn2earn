import React, { useState } from "react";
import SubAccordionLayout from "./SubAccordionLayout";
import AccordionLayout from "./AccordionLayout";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [subActiveIndex, setSubActiveIndex] = useState(0);

  return (
    <div className="flex flex-col w-full">
      <AccordionLayout
        title="Lesson 1. Machine Learning 101"
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <SubAccordionLayout
          title="What is Machine Learning?"
          index={1}
          activeIndex={subActiveIndex}
          setActiveIndex={setSubActiveIndex}
        >
          <div className="flex gap-2 items-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            ZTM Resources
          </div>
          <div className="flex gap-2 items-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            Recommended Reading
          </div>
          <div className="flex gap-2 items-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Overview of Machine Learning
          </div>
        </SubAccordionLayout>

        <SubAccordionLayout
          title="What's Next?"
          index={2}
          activeIndex={subActiveIndex}
          setActiveIndex={setSubActiveIndex}
        ></SubAccordionLayout>
      </AccordionLayout>

      <AccordionLayout
        title="Lesson 2. Applying ML Fundamentals"
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        This is Accordion 2 Content
      </AccordionLayout>
    </div>
  );
};

export default Accordion;
