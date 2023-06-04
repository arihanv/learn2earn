import React from "react";

const SubAccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const handleSetIndex = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    }
    activeIndex !== index && setActiveIndex(index);
  };

  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className="flex justify-start p-1 mt-1 mb-1 gap-1 h-fit items-center rounded bg-transparent w-full"
      >
        <div className="flex items-center justify-center">
          {activeIndex === index ? (
            <svg
              class="-mr-1 h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              class="-mr-1 h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="flex">
          <div className="text-white font-bold">{title}</div>
        </div>
      </div>

      {activeIndex === index && (
        <div className=" p-2 mb-2 bg-transparent">{children}</div>
      )}
    </>
  );
};

export default SubAccordionLayout;
