import { ChevronRightIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl: "/src/assets/tailwind/profile-photo-5.png",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl: "/src/assets/tailwind/profile-photo-7.png",
    href: "#",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl: "/src/assets/tailwind/profile-photo-8.png",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl: "/src/assets/tailwind/profile-photo.png",
    href: "#",
    lastSeen: null,
  },
];

export default function Example() {
  return (
    <ul
      role="list"
      className="overflow-hidden bg-white divide-y divide-gray-100 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
    >
      {people.map((person) => (
        <li
          key={person.email}
          className="relative flex justify-between px-4 py-5 gap-x-6 hover:bg-gray-50 sm:px-6"
        >
          <div className="flex min-w-0 gap-x-4">
            <img
              className="flex-none w-12 h-12 rounded-full bg-gray-50"
              src={person.imageUrl}
              alt=""
            />
            <div className="flex-auto min-w-0">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                <a href={person.href}>
                  <span className="absolute inset-x-0 bottom-0 -top-px" />
                  {person.name}
                </a>
              </p>
              <p className="flex mt-1 text-xs leading-5 text-gray-500">
                <a
                  href={`mailto:${person.email}`}
                  className="relative truncate hover:underline"
                >
                  {person.email}
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center shrink-0 gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
              {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen{" "}
                  <time dateTime={person.lastSeenDateTime}>
                    {person.lastSeen}
                  </time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none p-1 rounded-full bg-emerald-500/20">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
            <ChevronRightIcon
              className="flex-none w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
