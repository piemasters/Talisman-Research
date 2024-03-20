export default function Example() {
  return (
    <span className="inline-flex rounded-md shadow-sm isolate">
      <button
        type="button"
        className="relative inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Years
      </button>
      <button
        type="button"
        className="relative inline-flex items-center px-3 py-2 -ml-px text-sm font-semibold text-gray-900 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Months
      </button>
      <button
        type="button"
        className="relative inline-flex items-center px-3 py-2 -ml-px text-sm font-semibold text-gray-900 bg-white rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Days
      </button>
    </span>
  );
}
