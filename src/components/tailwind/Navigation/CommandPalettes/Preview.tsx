import { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { UsersIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { PeopleType, people } from "./items";
import { classNames } from "../../util/classNames";

const recent = [people[5], people[4], people[2], people[10], people[16]];

export default function Example() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);

  const filteredPeople =
    query === ""
      ? []
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen p-4 overflow-y-auto sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="max-w-3xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
              <Combobox
                onChange={(person: PeopleType) =>
                  (window.location.href = person.profileUrl)
                }
              >
                {({ activeOption }) => (
                  <>
                    <div className="relative">
                      <MagnifyingGlassIcon
                        className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <Combobox.Input
                        className="w-full h-12 pr-4 text-gray-900 bg-transparent border-0 pl-11 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                        placeholder="Search..."
                        onChange={(event) => setQuery(event.target.value)}
                      />
                    </div>

                    {(query === "" || filteredPeople.length > 0) && (
                      <Combobox.Options
                        as="div"
                        static
                        hold
                        className="flex divide-x divide-gray-100 transform-gpu"
                      >
                        <div
                          className={classNames(
                            "max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4",
                            activeOption ? "sm:h-96" : ""
                          )}
                        >
                          {query === "" && (
                            <h2 className="mt-2 mb-4 text-xs font-semibold text-gray-500">
                              Recent searches
                            </h2>
                          )}
                          <div className="-mx-2 text-sm text-gray-700">
                            {(query === "" ? recent : filteredPeople).map(
                              (person) => (
                                <Combobox.Option
                                  as="div"
                                  key={person.id}
                                  value={person}
                                  className={({ active }) =>
                                    classNames(
                                      "flex cursor-default select-none items-center rounded-md p-2",
                                      active && "bg-gray-100 text-gray-900"
                                    )
                                  }
                                >
                                  {({ active }) => (
                                    <>
                                      <img
                                        src={person.imageUrl}
                                        alt=""
                                        className="flex-none w-6 h-6 rounded-full"
                                      />
                                      <span className="flex-auto ml-3 truncate">
                                        {person.name}
                                      </span>
                                      {active && (
                                        <ChevronRightIcon
                                          className="flex-none w-5 h-5 ml-3 text-gray-400"
                                          aria-hidden="true"
                                        />
                                      )}
                                    </>
                                  )}
                                </Combobox.Option>
                              )
                            )}
                          </div>
                        </div>

                        {activeOption && (
                          <div className="flex-col flex-none hidden w-1/2 overflow-y-auto divide-y divide-gray-100 h-96 sm:flex">
                            <div className="flex-none p-6 text-center">
                              <img
                                src={activeOption.imageUrl}
                                alt=""
                                className="w-16 h-16 mx-auto rounded-full"
                              />
                              <h2 className="mt-3 font-semibold text-gray-900">
                                {activeOption.name}
                              </h2>
                              <p className="text-sm leading-6 text-gray-500">
                                {activeOption.role}
                              </p>
                            </div>
                            <div className="flex flex-col justify-between flex-auto p-6">
                              <dl className="grid grid-cols-1 text-sm text-gray-700 gap-x-6 gap-y-3">
                                <dt className="col-end-1 font-semibold text-gray-900">
                                  Phone
                                </dt>
                                <dd>{activeOption.phone}</dd>
                                <dt className="col-end-1 font-semibold text-gray-900">
                                  URL
                                </dt>
                                <dd className="truncate">
                                  <a
                                    href={activeOption.profileUrl}
                                    className="text-indigo-600 underline"
                                  >
                                    {activeOption.profileUrl}
                                  </a>
                                </dd>
                                <dt className="col-end-1 font-semibold text-gray-900">
                                  Email
                                </dt>
                                <dd className="truncate">
                                  <a
                                    href={`mailto:${activeOption.email}`}
                                    className="text-indigo-600 underline"
                                  >
                                    {activeOption.email}
                                  </a>
                                </dd>
                              </dl>
                              <button
                                type="button"
                                className="w-full px-3 py-2 mt-6 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                Send message
                              </button>
                            </div>
                          </div>
                        )}
                      </Combobox.Options>
                    )}

                    {query !== "" && filteredPeople.length === 0 && (
                      <div className="px-6 text-sm text-center py-14 sm:px-14">
                        <UsersIcon
                          className="w-6 h-6 mx-auto text-gray-400"
                          aria-hidden="true"
                        />
                        <p className="mt-4 font-semibold text-gray-900">
                          No people found
                        </p>
                        <p className="mt-2 text-gray-500">
                          We couldn’t find anything with that term. Please try
                          again.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
