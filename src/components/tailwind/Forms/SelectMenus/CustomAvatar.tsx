import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "../../util/classNames";

const people = [
  {
    id: 1,
    name: "Wade Cooper",
    avatar: "/src/assets/tailwind/profile-photo-6.png",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
    avatar: "/src/assets/tailwind/profile-photo-3.png",
  },
  {
    id: 3,
    name: "Devon Webb",
    avatar: "/src/assets/tailwind/profile-photo-2.png",
  },
  {
    id: 4,
    name: "Tom Cook",
    avatar: "/src/assets/tailwind/profile-photo.png",
  },
  {
    id: 5,
    name: "Tanya Fox",
    avatar: "/src/assets/tailwind/profile-photo-4.png",
  },
  {
    id: 6,
    name: "Hellen Schmidt",
    avatar: "/src/assets/tailwind/profile-photo-5.png",
  },
  {
    id: 7,
    name: "Caroline Schultz",
    avatar: "/src/assets/tailwind/profile-photo-9.png",
  },
  {
    id: 8,
    name: "Mason Heaney",
    avatar: "/src/assets/tailwind/profile-photo-7.png",
  },
  {
    id: 9,
    name: "Claudie Smitham",
    avatar: "/src/assets/tailwind/profile-photo-8.png",
  },
  {
    id: 10,
    name: "Emil Schaefer",
    avatar: "/src/assets/tailwind/profile-photo-6.png",
  },
];

export default function Example() {
  const [selected, setSelected] = useState(people[3]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
            Assigned to
          </Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img
                  src={selected.avatar}
                  alt=""
                  className="flex-shrink-0 w-5 h-5 rounded-full"
                />
                <span className="block ml-3 truncate">{selected.name}</span>
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                <ChevronUpDownIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={person.avatar}
                            alt=""
                            className="flex-shrink-0 w-5 h-5 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
