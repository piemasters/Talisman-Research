import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { classNames } from "../../util/classNames";
import {
  navigation,
  teams,
  secondaryNavigation,
  stats,
  activityItems,
  statuses,
  StatusType,
} from "./data-sidebardark";
import { Mark } from "../../images/Mark";

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 xl:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex flex-1 w-full max-w-xs mr-16">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 flex justify-center w-16 pt-5 left-full">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex flex-col px-6 overflow-y-auto bg-gray-900 grow gap-y-5 ring-1 ring-white/10">
                    <div className="flex items-center h-16 shrink-0">
                      <Mark className="w-auto h-8" />
                    </div>
                    <nav className="flex flex-col flex-1">
                      <ul role="list" className="flex flex-col flex-1 gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:text-white hover:bg-gray-800",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className="w-6 h-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your teams
                          </div>
                          <ul role="list" className="mt-2 -mx-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:text-white hover:bg-gray-800",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto -mx-6">
                          <a
                            href="#"
                            className="flex items-center px-6 py-3 text-sm font-semibold leading-6 text-white gap-x-4 hover:bg-gray-800"
                          >
                            <img
                              className="w-8 h-8 bg-gray-800 rounded-full"
                              src="/src/assets/tailwind/profile-photo.png"
                              alt=""
                            />
                            <span className="sr-only">Your profile</span>
                            <span aria-hidden="true">Tom Cook</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col px-6 overflow-y-auto grow gap-y-5 bg-black/10 ring-1 ring-white/5">
            <div className="flex items-center h-16 shrink-0">
              <Mark className="w-auto h-8" />
            </div>
            <nav className="flex flex-col flex-1">
              <ul role="list" className="flex flex-col flex-1 gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:text-white hover:bg-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className="w-6 h-6 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">
                    Your teams
                  </div>
                  <ul role="list" className="mt-2 -mx-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:text-white hover:bg-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto -mx-6">
                  <a
                    href="#"
                    className="flex items-center px-6 py-3 text-sm font-semibold leading-6 text-white gap-x-4 hover:bg-gray-800"
                  >
                    <img
                      className="w-8 h-8 bg-gray-800 rounded-full"
                      src="/src/assets/tailwind/profile-photo.png"
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="xl:pl-72">
          {/* Sticky search header */}
          <div className="sticky top-0 z-40 flex items-center h-16 px-4 bg-gray-900 border-b shadow-sm shrink-0 gap-x-6 border-white/5 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-white xl:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="flex self-stretch flex-1 gap-x-4 lg:gap-x-6">
              <form className="flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <MagnifyingGlassIcon
                    className="absolute inset-y-0 left-0 w-5 h-full text-gray-500 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    id="search-field"
                    className="block w-full h-full py-0 pl-8 pr-0 text-white bg-transparent border-0 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="search"
                    name="search"
                  />
                </div>
              </form>
            </div>
          </div>

          <main>
            <header>
              {/* Secondary navigation */}
              <nav className="flex py-4 overflow-x-auto border-b border-white/10">
                <ul
                  role="list"
                  className="flex flex-none min-w-full px-4 text-sm font-semibold leading-6 text-gray-400 gap-x-6 sm:px-6 lg:px-8"
                >
                  {secondaryNavigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={item.current ? "text-indigo-400" : ""}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Heading */}
              <div className="flex flex-col items-start justify-between px-4 py-4 gap-x-8 gap-y-4 bg-gray-700/10 sm:flex-row sm:items-center sm:px-6 lg:px-8">
                <div>
                  <div className="flex items-center gap-x-3">
                    <div className="flex-none p-1 text-green-400 rounded-full bg-green-400/10">
                      <div className="w-2 h-2 bg-current rounded-full" />
                    </div>
                    <h1 className="flex text-base leading-7 gap-x-3">
                      <span className="font-semibold text-white">
                        Planetaria
                      </span>
                      <span className="text-gray-600">/</span>
                      <span className="font-semibold text-white">
                        mobile-api
                      </span>
                    </h1>
                  </div>
                  <p className="mt-2 text-xs leading-6 text-gray-400">
                    Deploys from GitHub via main branch
                  </p>
                </div>
                <div className="flex-none order-first px-2 py-1 text-xs font-medium text-indigo-400 rounded-full bg-indigo-400/10 ring-1 ring-inset ring-indigo-400/30 sm:order-none">
                  Production
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, statIdx) => (
                  <div
                    key={stat.name}
                    className={classNames(
                      statIdx % 2 === 1
                        ? "sm:border-l"
                        : statIdx === 2
                        ? "lg:border-l"
                        : "",
                      "border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8"
                    )}
                  >
                    <p className="text-sm font-medium leading-6 text-gray-400">
                      {stat.name}
                    </p>
                    <p className="flex items-baseline mt-2 gap-x-2">
                      <span className="text-4xl font-semibold tracking-tight text-white">
                        {stat.value}
                      </span>
                      {stat.unit ? (
                        <span className="text-sm text-gray-400">
                          {stat.unit}
                        </span>
                      ) : null}
                    </p>
                  </div>
                ))}
              </div>
            </header>

            {/* Activity list */}
            <div className="border-t border-white/10 pt-11">
              <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">
                Latest activity
              </h2>
              <table className="w-full mt-6 text-left whitespace-nowrap">
                <colgroup>
                  <col className="w-full sm:w-4/12" />
                  <col className="lg:w-4/12" />
                  <col className="lg:w-2/12" />
                  <col className="lg:w-1/12" />
                  <col className="lg:w-1/12" />
                </colgroup>
                <thead className="text-sm leading-6 text-white border-b border-white/10">
                  <tr>
                    <th
                      scope="col"
                      className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
                    >
                      Commit
                    </th>
                    <th
                      scope="col"
                      className="py-2 pl-0 pr-4 font-semibold text-right sm:pr-8 sm:text-left lg:pr-20"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
                    >
                      Duration
                    </th>
                    <th
                      scope="col"
                      className="hidden py-2 pl-0 pr-4 font-semibold text-right sm:table-cell sm:pr-6 lg:pr-8"
                    >
                      Deployed at
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {activityItems.map((item) => (
                    <tr key={item.commit}>
                      <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                        <div className="flex items-center gap-x-4">
                          <img
                            src={item.user.imageUrl}
                            alt=""
                            className="w-8 h-8 bg-gray-800 rounded-full"
                          />
                          <div className="text-sm font-medium leading-6 text-white truncate">
                            {item.user.name}
                          </div>
                        </div>
                      </td>
                      <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                        <div className="flex gap-x-3">
                          <div className="font-mono text-sm leading-6 text-gray-400">
                            {item.commit}
                          </div>
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-400 rounded-md bg-gray-400/10 ring-1 ring-inset ring-gray-400/20">
                            {item.branch}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                        <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                          <time
                            className="text-gray-400 sm:hidden"
                            dateTime={item.dateTime}
                          >
                            {item.date}
                          </time>
                          <div
                            className={classNames(
                              statuses[item.status as StatusType],
                              "flex-none rounded-full p-1"
                            )}
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-current" />
                          </div>
                          <div className="hidden text-white sm:block">
                            {item.status}
                          </div>
                        </div>
                      </td>
                      <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                        {item.duration}
                      </td>
                      <td className="hidden py-4 pl-0 pr-4 text-sm leading-6 text-right text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                        <time dateTime={item.dateTime}>{item.date}</time>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
