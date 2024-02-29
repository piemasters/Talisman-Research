export default function Example() {
  return (
    <fieldset className="border-t border-b border-gray-200">
      <legend className="sr-only">Notifications</legend>
      <div className="divide-y divide-gray-200">
        <div className="relative flex items-start pb-4 pt-3.5">
          <div className="flex-1 min-w-0 text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
              Comments
            </label>
            <p id="comments-description" className="text-gray-500">
              Get notified when someones posts a comment on a posting.
            </p>
          </div>
          <div className="flex items-center h-6 ml-3">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
            />
          </div>
        </div>
        <div className="relative flex items-start pb-4 pt-3.5">
          <div className="flex-1 min-w-0 text-sm leading-6">
            <label htmlFor="candidates" className="font-medium text-gray-900">
              Candidates
            </label>
            <p id="candidates-description" className="text-gray-500">
              Get notified when a candidate applies for a job.
            </p>
          </div>
          <div className="flex items-center h-6 ml-3">
            <input
              id="candidates"
              aria-describedby="candidates-description"
              name="candidates"
              type="checkbox"
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
            />
          </div>
        </div>
        <div className="relative flex items-start pb-4 pt-3.5">
          <div className="flex-1 min-w-0 text-sm leading-6">
            <label htmlFor="offers" className="font-medium text-gray-900">
              Offers
            </label>
            <p id="offers-description" className="text-gray-500">
              Get notified when a candidate accepts or rejects an offer.
            </p>
          </div>
          <div className="flex items-center h-6 ml-3">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
}
