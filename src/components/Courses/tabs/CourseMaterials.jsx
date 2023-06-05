import Accordion from "../accordion/Accordion";

const CourseMaterials = () => {
  return (
    <div className="h-fit border text-white p-8 rounded-lg mb-4 w-full md:w-[80%] bg-gray-900">
      <div className="mb-4">
        <div className="border-b">
          <h1>Machine Learning</h1>

          <div className="flex flex-wrap justify-between py-2">
            <div className="flex justify-between items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 h-4 w-4"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <h4 className="whitespace-nowrap m-0 p-0 text-[16px]">
                41 min of videos left
              </h4>
            </div>
            <div className="flex justify-between items-cente break-words">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-1"
              >
                <polygon points="12 2 16.73 8.23 23 9.26 18 14.14 19.46 21 12 17.81 4.54 21 6 14.14 1 9.26 7.27 8.23 12 2" />
              </svg>
              <h4 className="whitespace-nowrap m-0 p-0 text-[16px]">
                <span className="overflow-ellipsis">
                  1 graded assessment left
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center cursor-pointer hover:bg-slate-400 px-4 rounded-lg py-2">
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </div>
          <div>
            <h4 className="text-[16px] font-medium mb-1">Course Promo</h4>
            <p className="p-0 m-0">Video . 20 min</p>
          </div>
        </div>
        <Accordion />
      </div>
    </div>
  );
};

export default CourseMaterials;
