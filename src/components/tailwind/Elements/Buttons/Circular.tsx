import { PlusIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <>
      <button
        type="button"
        className="p-1 text-white bg-indigo-600 rounded-full shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon className="w-5 h-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="rounded-full bg-indigo-600 p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon className="w-5 h-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="p-2 text-white bg-indigo-600 rounded-full shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon className="w-5 h-5" aria-hidden="true" />
      </button>
    </>
  );
}
