export default function Example() {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <span className="inline-flex items-center px-2 py-2 bg-white border border-gray-300 rounded-l-md">
        <label htmlFor="select-all" className="sr-only">
          Select all
        </label>
        <input
          id="select-all"
          type="checkbox"
          name="select-all"
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
        />
      </span>
      <label htmlFor="message-type" className="sr-only">
        Select message type
      </label>
      <select
        id="message-type"
        name="message-type"
        className="-ml-px block w-full rounded-l-none rounded-r-md border-0 bg-white py-1.5 pl-3 pr-9 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option>Unread messages</option>
        <option>Sent messages</option>
        <option>All messages</option>
      </select>
    </span>
  );
}
