import { PlusIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl: "/src/assets/tailwind/profile-photo-8.png",
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    imageUrl: "/src/assets/tailwind/profile-photo-9.png",
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    imageUrl: "/src/assets/tailwind/profile-photo.png",
  },
  {
    name: "Whitney Francis",
    role: "Copywriter",
    imageUrl: "/src/assets/tailwind/profile-photo-4.png",
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl: "/src/assets/tailwind/profile-photo-6.png",
  },
  {
    name: "Floyd Miles",
    role: "Principal Designer",
    imageUrl: "/src/assets/tailwind/profile-photo-2.png",
  },
];

export default function Example() {
  return (
    <div className="max-w-md mx-auto sm:max-w-3xl">
      <div>
        <div className="text-center">
          <svg
            className="w-12 h-12 mx-auto text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <h2 className="mt-2 text-base font-semibold leading-6 text-gray-900">
            Add team members
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            You haven’t added any team members to your project yet.
          </p>
        </div>
        <form className="mt-6 sm:flex sm:items-center" action="#">
          <label htmlFor="emails" className="sr-only">
            Email addresses
          </label>
          <div className="grid grid-cols-1 sm:flex-auto">
            <input
              type="text"
              name="emails"
              id="emails"
              className="peer relative col-start-1 row-start-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Enter an email"
            />
            <div
              className="col-start-1 col-end-3 row-start-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 peer-focus:ring-2 peer-focus:ring-indigo-600"
              aria-hidden="true"
            />
            <div className="flex items-center col-start-2 row-start-1">
              <span
                className="flex-none w-px h-4 bg-gray-200"
                aria-hidden="true"
              />
              <label htmlFor="role" className="sr-only">
                Role
              </label>
              <select
                id="role"
                name="role"
                className="rounded-md border-0 bg-transparent py-1.5 pl-4 pr-7 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option>Can edit</option>
                <option>Can view</option>
              </select>
            </div>
          </div>
          <div className="mt-3 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
            <button
              type="submit"
              className="block w-full px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send invite
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10">
        <h3 className="text-sm font-medium text-gray-500">
          Recommended team members
        </h3>
        <ul role="list" className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
          {people.map((person, personIdx) => (
            <li key={personIdx}>
              <button
                type="button"
                className="flex items-center justify-between w-full p-2 space-x-3 text-left border border-gray-300 rounded-full shadow-sm group hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="flex items-center flex-1 min-w-0 space-x-3">
                  <span className="flex-shrink-0 block">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={person.imageUrl}
                      alt=""
                    />
                  </span>
                  <span className="flex-1 block min-w-0">
                    <span className="block text-sm font-medium text-gray-900 truncate">
                      {person.name}
                    </span>
                    <span className="block text-sm font-medium text-gray-500 truncate">
                      {person.role}
                    </span>
                  </span>
                </span>
                <span className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10">
                  <PlusIcon
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
