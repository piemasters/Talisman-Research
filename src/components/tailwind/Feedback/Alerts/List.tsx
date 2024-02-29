import { XCircleIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="p-4 rounded-md bg-red-50">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="w-5 h-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            There were 2 errors with your submission
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="pl-5 space-y-1 list-disc">
              <li>Your password must be at least 8 characters</li>
              <li>
                Your password must include at least one pro wrestling finishing
                move
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
