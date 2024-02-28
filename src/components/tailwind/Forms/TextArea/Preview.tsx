import { Tab } from "@headlessui/react";
import {
  AtSymbolIcon,
  CodeBracketIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";
import { classNames } from "../../util/classNames";

export default function Example() {
  return (
    <form action="#">
      <Tab.Group>
        {({ selectedIndex }) => (
          <>
            <Tab.List className="flex items-center">
              <Tab
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900",
                    "rounded-md border border-transparent px-3 py-1.5 text-sm font-medium"
                  )
                }
              >
                Write
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900",
                    "ml-2 rounded-md border border-transparent px-3 py-1.5 text-sm font-medium"
                  )
                }
              >
                Preview
              </Tab>

              {/* These buttons are here simply as examples and don't actually do anything. */}
              {selectedIndex === 0 ? (
                <div className="flex items-center ml-auto space-x-5">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Insert link</span>
                      <LinkIcon className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Insert code</span>
                      <CodeBracketIcon className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Mention someone</span>
                      <AtSymbolIcon className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ) : null}
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                <label htmlFor="comment" className="sr-only">
                  Comment
                </label>
                <div>
                  <textarea
                    rows={5}
                    name="comment"
                    id="comment"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Add your comment..."
                    defaultValue={""}
                  />
                </div>
              </Tab.Panel>
              <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                <div className="border-b">
                  <div className="px-3 pt-2 pb-12 mx-px mt-px text-sm leading-5 text-gray-800">
                    Preview content will render here.
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </>
        )}
      </Tab.Group>
      <div className="flex justify-end mt-2">
        <button
          type="submit"
          className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Post
        </button>
      </div>
    </form>
  );
}
