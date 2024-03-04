import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HeartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PencilIcon, PlusIcon } from "@heroicons/react/20/solid";

export default function Example() {
  const [open, setOpen] = useState(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative pointer-events-auto w-96">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-full p-8 overflow-y-auto bg-white">
                    <div className="pb-16 space-y-6">
                      <div>
                        <div className="block w-full overflow-hidden rounded-lg aspect-h-7 aspect-w-10">
                          <img
                            src="/src/assets/tailwind/background-1.png"
                            alt=""
                            className="object-cover"
                          />
                        </div>
                        <div className="flex items-start justify-between mt-4">
                          <div>
                            <h2 className="text-base font-semibold leading-6 text-gray-900">
                              <span className="sr-only">Details for </span>
                              IMG_4985.HEIC
                            </h2>
                            <p className="text-sm font-medium text-gray-500">
                              3.9 MB
                            </p>
                          </div>
                          <button
                            type="button"
                            className="relative flex items-center justify-center w-8 h-8 ml-4 text-gray-400 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            <span className="absolute -inset-1.5" />
                            <HeartIcon className="w-6 h-6" aria-hidden="true" />
                            <span className="sr-only">Favorite</span>
                          </button>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Information
                        </h3>
                        <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-gray-500">Uploaded by</dt>
                            <dd className="text-gray-900">Marie Culver</dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-gray-500">Created</dt>
                            <dd className="text-gray-900">June 8, 2020</dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-gray-500">Last modified</dt>
                            <dd className="text-gray-900">June 8, 2020</dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-gray-500">Dimensions</dt>
                            <dd className="text-gray-900">4032 x 3024</dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-gray-500">Resolution</dt>
                            <dd className="text-gray-900">72 x 72</dd>
                          </div>
                        </dl>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Description
                        </h3>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-sm italic text-gray-500">
                            Add a description to this image.
                          </p>
                          <button
                            type="button"
                            className="relative flex items-center justify-center w-8 h-8 -mr-2 text-gray-400 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            <span className="absolute -inset-1.5" />
                            <PencilIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Add description</span>
                          </button>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Shared with
                        </h3>
                        <ul
                          role="list"
                          className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
                        >
                          <li className="flex items-center justify-between py-3">
                            <div className="flex items-center">
                              <img
                                src="/src/assets/tailwind/profile-photo-3.png"
                                alt=""
                                className="w-8 h-8 rounded-full"
                              />
                              <p className="ml-4 text-sm font-medium text-gray-900">
                                Aimee Douglas
                              </p>
                            </div>
                            <button
                              type="button"
                              className="ml-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              Remove
                              <span className="sr-only"> Aimee Douglas</span>
                            </button>
                          </li>
                          <li className="flex items-center justify-between py-3">
                            <div className="flex items-center">
                              <img
                                src="/src/assets/tailwind/profile-photo-5.png"
                                alt=""
                                className="w-8 h-8 rounded-full"
                              />
                              <p className="ml-4 text-sm font-medium text-gray-900">
                                Andrea McMillan
                              </p>
                            </div>
                            <button
                              type="button"
                              className="ml-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              Remove
                              <span className="sr-only"> Andrea McMillan</span>
                            </button>
                          </li>
                          <li className="flex items-center justify-between py-2">
                            <button
                              type="button"
                              className="flex items-center p-1 -ml-1 bg-white rounded-md group focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                              <span className="flex items-center justify-center w-8 h-8 text-gray-400 border-2 border-gray-300 border-dashed rounded-full">
                                <PlusIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                                Share
                              </span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="flex">
                        <button
                          type="button"
                          className="flex-1 px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Download
                        </button>
                        <button
                          type="button"
                          className="flex-1 px-3 py-2 ml-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
