const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo-5.png",
    href: "#",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    href: "#",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo-7.png",
    href: "#",
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo-8.png",
    href: "#",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    href: "#",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo.png",
    href: "#",
  },
];

export default function Example() {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li
            key={person.email}
            className="flex items-center justify-between py-5 gap-x-6"
          >
            <div className="flex min-w-0 gap-x-4">
              <img
                className="flex-none w-12 h-12 rounded-full bg-gray-50"
                src={person.imageUrl}
                alt=""
              />
              <div className="flex-auto min-w-0">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.name}
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                  {person.email}
                </p>
              </div>
            </div>
            <a
              href={person.href}
              className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              View
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="flex items-center justify-center w-full px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
      >
        View all
      </a>
    </div>
  );
}
