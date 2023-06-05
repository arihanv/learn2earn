import React from "react";

const AccordionLayout = ({
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

  const isActive = activeIndex === index;
  const accordionClassName = `flex justify-start p-2 mt-2 mb-2 gap-3 h-20  items-center rounded ${
    isActive ? "bg-slate-800" : "bg-transparent"
  } border-2 w-full`;

  return (
    <>
      <div onClick={() => handleSetIndex(index)} className={accordionClassName}>
        <div className="flex items-center justify-center">
          <svg
            className="-mr-1 h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex">
          <div className="text-white font-bold">{title}</div>
        </div>
      </div>

      {isActive && <div className="p-4 mb-2 bg-transparent">{children}</div>}
    </>
  );
};

export default AccordionLayout;
