export default function Example() {
  return (
    <div className="-space-y-px rounded-md shadow-sm isolate">
      <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
        <label
          htmlFor="name"
          className="block text-xs font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full p-0 text-gray-900 border-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Jane Smith"
        />
      </div>
      <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
        <label
          htmlFor="job-title"
          className="block text-xs font-medium text-gray-900"
        >
          Job Title
        </label>
        <input
          type="text"
          name="job-title"
          id="job-title"
          className="block w-full p-0 text-gray-900 border-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Head of Tomfoolery"
        />
      </div>
    </div>
  );
}
