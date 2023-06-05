const Grades = () => {
  const lockedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );

  const unlockedIcon = (
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
        d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );

  return (
    <div className="h-fit border text-white p-8 rounded-lg mb-4 w-full md:w-[80%] bg-gray-900">
      <div className="mb-4">
        <div className="border-b mb-2">
          <h2 className="text-lg text-[18px] my-2 font-semibold">
            Graded Assignments
          </h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="h-10">
              <th>Item</th>
              <th>Status</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-800 h-10">
              <td className="text-blue-500  p-3 text-lg font-medium flex gap-2 ">
                {unlockedIcon} Lesson 1.
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="pt-3 pl-5">Machine Learning 101 - Quiz </td>
              <td>{unlockedIcon}</td>
              <td>96%</td>
            </tr>
            <tr className="bg-slate-800 h-10">
              <td className="text-blue-500  p-3 text-lg font-medium flex gap-2 ">
                {lockedIcon} Lesson 2.
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="pt-3 pl-5">Machine Learning 101 - Quiz </td>
              <td>{lockedIcon}</td>
              <td>N/A</td>
            </tr>{" "}
            <tr>
              <td className="pt-3 pl-5">Machine Learning 101 - Quiz </td>
              <td>{lockedIcon}</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;
