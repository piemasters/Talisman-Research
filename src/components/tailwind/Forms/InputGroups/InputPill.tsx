export default function Example() {
  return (
    <div>
      <label
        htmlFor="name"
        className="block pl-4 ml-px text-sm font-medium leading-6 text-gray-900"
      >
        Name
      </label>
      <div className="mt-2">
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Jane Smith"
        />
      </div>
    </div>
  );
}
