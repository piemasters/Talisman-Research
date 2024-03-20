import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <span className="inline-flex rounded-md shadow-sm isolate">
      <button
        type="button"
        className="relative inline-flex items-center px-2 py-2 text-gray-400 bg-white rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="relative inline-flex items-center px-2 py-2 -ml-px text-gray-400 bg-white rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
      </button>
    </span>
  );
}
