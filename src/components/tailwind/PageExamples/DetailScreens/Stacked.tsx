import { Fragment, useState } from "react";
import { Dialog, Listbox, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarDaysIcon,
  CreditCardIcon,
  EllipsisVerticalIcon,
  FaceSmileIcon,
  PaperClipIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import {
  BellIcon,
  XMarkIcon as XMarkIconOutline,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { classNames } from "../../util/classNames";
import { activity, invoice, moods, navigation } from "./data-stacked";
import { Mark } from "../../images/Mark";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState(moods[5]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
        <div className="flex items-center justify-between w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center flex-1 gap-x-6">
            <button
              type="button"
              className="p-3 -m-3 md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-5 h-5 text-gray-900" aria-hidden="true" />
            </button>
            <Mark className="w-auto h-8" />
          </div>
          <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-700">
            {navigation.map((item, itemIdx) => (
              <a key={itemIdx} href={item.href}>
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-end flex-1 gap-x-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="w-6 h-6" aria-hidden="true" />
            </button>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your profile</span>
              <img
                className="w-8 h-8 bg-gray-800 rounded-full"
                src="/src/assets/tailwind/profile-photo.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full px-4 pb-6 overflow-y-auto bg-white sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="-ml-0.5 flex h-16 items-center gap-x-6">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIconOutline className="w-6 h-6" aria-hidden="true" />
              </button>
              <div className="-ml-0.5">
                <a href="#" className="-m-1.5 block p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Mark className="w-auto h-8" />
                </a>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main>
        <header className="relative pt-16 isolate">
          <div
            className="absolute inset-0 overflow-hidden -z-10"
            aria-hidden="true"
          >
            <div className="absolute -mt-16 opacity-50 left-16 top-full transform-gpu blur-3xl xl:left-1/2 xl:-ml-80">
              <div
                className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
                style={{
                  clipPath:
                    "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
                }}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
          </div>

          <div className="px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between max-w-2xl mx-auto gap-x-8 lg:mx-0 lg:max-w-none">
              <div className="flex items-center gap-x-6">
                <img
                  src="/src/assets/tailwind/tuple.svg"
                  alt=""
                  className="flex-none w-16 h-16 rounded-full ring-1 ring-gray-900/10"
                />
                <h1>
                  <div className="text-sm leading-6 text-gray-500">
                    Invoice <span className="text-gray-700">#00011</span>
                  </div>
                  <div className="mt-1 text-base font-semibold leading-6 text-gray-900">
                    Tuple, Inc
                  </div>
                </h1>
              </div>
              <div className="flex items-center gap-x-4 sm:gap-x-6">
                <button
                  type="button"
                  className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block"
                >
                  Copy URL
                </button>
                <a
                  href="#"
                  className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send
                </a>

                <Menu as="div" className="relative sm:hidden">
                  <Menu.Button className="block p-3 -m-3">
                    <span className="sr-only">More</span>
                    <EllipsisVerticalIcon
                      className="w-5 h-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="button"
                            className={classNames(
                              active ? "bg-gray-50" : "",
                              "block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900"
                            )}
                          >
                            Copy URL
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            )}
                          >
                            Edit
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </header>

        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-start max-w-2xl grid-cols-1 grid-rows-1 mx-auto gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Invoice summary */}
            <div className="lg:col-start-3 lg:row-end-1">
              <h2 className="sr-only">Summary</h2>
              <div className="rounded-lg shadow-sm bg-gray-50 ring-1 ring-gray-900/5">
                <dl className="flex flex-wrap">
                  <div className="flex-auto pt-6 pl-6">
                    <dt className="text-sm font-semibold leading-6 text-gray-900">
                      Amount
                    </dt>
                    <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
                      $10,560.00
                    </dd>
                  </div>
                  <div className="self-end flex-none px-6 pt-4">
                    <dt className="sr-only">Status</dt>
                    <dd className="px-2 py-1 text-xs font-medium text-green-600 rounded-md bg-green-50 ring-1 ring-inset ring-green-600/20">
                      Paid
                    </dd>
                  </div>
                  <div className="flex flex-none w-full px-6 pt-6 mt-6 border-t gap-x-4 border-gray-900/5">
                    <dt className="flex-none">
                      <span className="sr-only">Client</span>
                      <UserCircleIcon
                        className="w-5 h-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-sm font-medium leading-6 text-gray-900">
                      Alex Curren
                    </dd>
                  </div>
                  <div className="flex flex-none w-full px-6 mt-4 gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Due date</span>
                      <CalendarDaysIcon
                        className="w-5 h-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-sm leading-6 text-gray-500">
                      <time dateTime="2023-01-31">January 31, 2023</time>
                    </dd>
                  </div>
                  <div className="flex flex-none w-full px-6 mt-4 gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Status</span>
                      <CreditCardIcon
                        className="w-5 h-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-sm leading-6 text-gray-500">
                      Paid with MasterCard
                    </dd>
                  </div>
                </dl>
                <div className="px-6 py-6 mt-6 border-t border-gray-900/5">
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Download receipt <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Invoice */}
            <div className="px-4 py-8 -mx-4 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
              <h2 className="text-base font-semibold leading-6 text-gray-900">
                Invoice
              </h2>
              <dl className="grid grid-cols-1 mt-6 text-sm leading-6 sm:grid-cols-2">
                <div className="sm:pr-4">
                  <dt className="inline text-gray-500">Issued on</dt>{" "}
                  <dd className="inline text-gray-700">
                    <time dateTime="2023-23-01">January 23, 2023</time>
                  </dd>
                </div>
                <div className="mt-2 sm:mt-0 sm:pl-4">
                  <dt className="inline text-gray-500">Due on</dt>{" "}
                  <dd className="inline text-gray-700">
                    <time dateTime="2023-31-01">January 31, 2023</time>
                  </dd>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-900/5 sm:pr-4">
                  <dt className="font-semibold text-gray-900">From</dt>
                  <dd className="mt-2 text-gray-500">
                    <span className="font-medium text-gray-900">
                      Acme, Inc.
                    </span>
                    <br />
                    7363 Cynthia Pass
                    <br />
                    Toronto, ON N3Y 4H8
                  </dd>
                </div>
                <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6">
                  <dt className="font-semibold text-gray-900">To</dt>
                  <dd className="mt-2 text-gray-500">
                    <span className="font-medium text-gray-900">
                      Tuple, Inc
                    </span>
                    <br />
                    886 Walter Street
                    <br />
                    New York, NY 12345
                  </dd>
                </div>
              </dl>
              <table className="w-full mt-16 text-sm leading-6 text-left whitespace-nowrap">
                <colgroup>
                  <col className="w-full" />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead className="text-gray-900 border-b border-gray-200">
                  <tr>
                    <th scope="col" className="px-0 py-3 font-semibold">
                      Projects
                    </th>
                    <th
                      scope="col"
                      className="hidden py-3 pl-8 pr-0 font-semibold text-right sm:table-cell"
                    >
                      Hours
                    </th>
                    <th
                      scope="col"
                      className="hidden py-3 pl-8 pr-0 font-semibold text-right sm:table-cell"
                    >
                      Rate
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-8 pr-0 font-semibold text-right"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100">
                      <td className="px-0 py-5 align-top max-w-0">
                        <div className="font-medium text-gray-900 truncate">
                          {item.title}
                        </div>
                        <div className="text-gray-500 truncate">
                          {item.description}
                        </div>
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right text-gray-700 align-top tabular-nums sm:table-cell">
                        {item.hours}
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right text-gray-700 align-top tabular-nums sm:table-cell">
                        {item.rate}
                      </td>
                      <td className="py-5 pl-8 pr-0 text-right text-gray-700 align-top tabular-nums">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      scope="row"
                      className="px-0 pt-6 pb-0 font-normal text-gray-700 sm:hidden"
                    >
                      Subtotal
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden px-0 pt-6 pb-0 font-normal text-right text-gray-700 sm:table-cell"
                    >
                      Subtotal
                    </th>
                    <td className="pt-6 pb-0 pl-8 pr-0 text-right text-gray-900 tabular-nums">
                      {invoice.subTotal}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="pt-4 font-normal text-gray-700 sm:hidden"
                    >
                      Tax
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden pt-4 font-normal text-right text-gray-700 sm:table-cell"
                    >
                      Tax
                    </th>
                    <td className="pt-4 pb-0 pl-8 pr-0 text-right text-gray-900 tabular-nums">
                      {invoice.tax}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="pt-4 font-semibold text-gray-900 sm:hidden"
                    >
                      Total
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden pt-4 font-semibold text-right text-gray-900 sm:table-cell"
                    >
                      Total
                    </th>
                    <td className="pt-4 pb-0 pl-8 pr-0 font-semibold text-right text-gray-900 tabular-nums">
                      {invoice.total}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="lg:col-start-3">
              {/* Activity feed */}
              <h2 className="text-sm font-semibold leading-6 text-gray-900">
                Activity
              </h2>
              <ul role="list" className="mt-6 space-y-6">
                {activity.map((activityItem, activityItemIdx) => (
                  <li key={activityItem.id} className="relative flex gap-x-4">
                    <div
                      className={classNames(
                        activityItemIdx === activity.length - 1
                          ? "h-6"
                          : "-bottom-6",
                        "absolute left-0 top-0 flex w-6 justify-center"
                      )}
                    >
                      <div className="w-px bg-gray-200" />
                    </div>
                    {activityItem.type === "commented" ? (
                      <>
                        <img
                          src={activityItem.person.imageUrl}
                          alt=""
                          className="relative flex-none w-6 h-6 mt-3 rounded-full bg-gray-50"
                        />
                        <div className="flex-auto p-3 rounded-md ring-1 ring-inset ring-gray-200">
                          <div className="flex justify-between gap-x-4">
                            <div className="py-0.5 text-xs leading-5 text-gray-500">
                              <span className="font-medium text-gray-900">
                                {activityItem.person.name}
                              </span>{" "}
                              commented
                            </div>
                            <time
                              dateTime={activityItem.dateTime}
                              className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                            >
                              {activityItem.date}
                            </time>
                          </div>
                          <p className="text-sm leading-6 text-gray-500">
                            {activityItem.comment}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative flex items-center justify-center flex-none w-6 h-6 bg-white">
                          {activityItem.type === "paid" ? (
                            <CheckCircleIcon
                              className="w-6 h-6 text-indigo-600"
                              aria-hidden="true"
                            />
                          ) : (
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                          )}
                        </div>
                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                          <span className="font-medium text-gray-900">
                            {activityItem.person.name}
                          </span>{" "}
                          {activityItem.type} the invoice.
                        </p>
                        <time
                          dateTime={activityItem.dateTime}
                          className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                        >
                          {activityItem.date}
                        </time>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              {/* New comment form */}
              <div className="flex mt-6 gap-x-3">
                <img
                  src="/src/assets/tailwind/profile-photo.png"
                  alt=""
                  className="flex-none w-6 h-6 rounded-full bg-gray-50"
                />
                <form action="#" className="relative flex-auto">
                  <div className="pb-12 overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                    <label htmlFor="comment" className="sr-only">
                      Add your comment
                    </label>
                    <textarea
                      rows={2}
                      name="comment"
                      id="comment"
                      className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Add your comment..."
                      defaultValue={""}
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                    <div className="flex items-center space-x-5">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                        >
                          <PaperClipIcon
                            className="w-5 h-5"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Attach a file</span>
                        </button>
                      </div>
                      <div className="flex items-center">
                        <Listbox value={selected} onChange={setSelected}>
                          {({ open }) => (
                            <>
                              <Listbox.Label className="sr-only">
                                Your mood
                              </Listbox.Label>
                              <div className="relative">
                                <Listbox.Button className="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                                  <span className="flex items-center justify-center">
                                    {selected.value === null ? (
                                      <span>
                                        <FaceSmileIcon
                                          className="flex-shrink-0 w-5 h-5"
                                          aria-hidden="true"
                                        />
                                        <span className="sr-only">
                                          Add your mood
                                        </span>
                                      </span>
                                    ) : (
                                      <span>
                                        <span
                                          className={classNames(
                                            selected.bgColor,
                                            "flex h-8 w-8 items-center justify-center rounded-full"
                                          )}
                                        >
                                          <selected.icon
                                            className="flex-shrink-0 w-5 h-5 text-white"
                                            aria-hidden="true"
                                          />
                                        </span>
                                        <span className="sr-only">
                                          {selected.name}
                                        </span>
                                      </span>
                                    )}
                                  </span>
                                </Listbox.Button>

                                <Transition
                                  show={open}
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute z-10 py-3 mt-1 -ml-6 text-base bg-white rounded-lg shadow w-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                                    {moods.map((mood) => (
                                      <Listbox.Option
                                        key={mood.value}
                                        className={({ active }) =>
                                          classNames(
                                            active ? "bg-gray-100" : "bg-white",
                                            "relative cursor-default select-none px-3 py-2"
                                          )
                                        }
                                        value={mood}
                                      >
                                        <div className="flex items-center">
                                          <div
                                            className={classNames(
                                              mood.bgColor,
                                              "flex h-8 w-8 items-center justify-center rounded-full"
                                            )}
                                          >
                                            <mood.icon
                                              className={classNames(
                                                mood.iconColor,
                                                "h-5 w-5 flex-shrink-0"
                                              )}
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <span className="block ml-3 font-medium truncate">
                                            {mood.name}
                                          </span>
                                        </div>
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </>
                          )}
                        </Listbox>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
