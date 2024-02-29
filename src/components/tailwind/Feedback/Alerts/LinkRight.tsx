import { InformationCircleIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="p-4 rounded-md bg-blue-50">
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon
            className="w-5 h-5 text-blue-400"
            aria-hidden="true"
          />
        </div>
        <div className="flex-1 ml-3 md:flex md:justify-between">
          <p className="text-sm text-blue-700">
            A new software update is available. See what’s new in version 2.0.4.
          </p>
          <p className="mt-3 text-sm md:ml-6 md:mt-0">
            <a
              href="#"
              className="font-medium text-blue-700 whitespace-nowrap hover:text-blue-600"
            >
              Details
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
