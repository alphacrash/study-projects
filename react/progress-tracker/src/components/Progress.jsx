const Progress = ({ value }) => {
  return (
    <div className="flex items-center gap-x-3 whitespace-nowrap">
      <div
        className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <div className="w-10 text-end">
        <span className="text-sm text-gray-800 dark:text-white">{value}%</span>
      </div>
    </div>
  );
};

export default Progress;
