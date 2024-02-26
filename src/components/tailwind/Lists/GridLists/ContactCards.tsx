import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

export const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    department: "Optimization",
    imageUrl: "/src/assets/tailwind/profile-photo-8.png",
    telephone: "+1-202-555-0170",
  },
  {
    name: "Courtney Henry",
    title: "Designer",
    email: "courtney.henry@example.com",
    role: "Admin",
    department: "Optimization",
    imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    telephone: "+1-202-555-0114",
  },
  {
    name: "Tom Cook",
    title: "Director of Product",
    email: "tom.cook@example.com",
    role: "Member",
    department: "Optimization",
    imageUrl: "/src/assets/tailwind/profile-photo.png",
    telephone: "+1-202-555-0143",
  },
  {
    name: "Whitney Francis",
    title: "Copywriter",
    email: "whitney.francis@example.com",
    role: "Admin",
    department: "Optimization",
    imageUrl: "/src/assets/tailwind/profile-photo-4.png",
    telephone: "+1-202-555-0184",
  },
  {
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com",
    role: "Owner",
    department: "Optimization",
    imageUrl: "/src/assets/tailwind/profile-photo-7.png",
    telephone: "+1-202-555-0191",
  },
  {
    name: "Floyd Miles",
    title: "Principal Designer",
    email: "floyd.miles@example.com",
    role: "Member",
    department: "Optimization",
    imageUrl: "/src/assets/tailwind/profile-photo-2.png",
    telephone: "+1-202-555-0108",
  },
  {
    name: "Kristin Watson",
    title: "VP, Human Resources",
    email: "emily.selman@example.com",
    role: "Admin",
    department: "Optimization",
    imageUrl: "/src/assets/tailwind/profile-photo-5.png",
    telephone: "+1-202-555-0174",
  },
  {
    name: "Emma Dorsey",
    title: "Senior Developer",
    email: "emma.dorsey@example.com",
    role: "Member",
    department: "Optimization",
    imageUrl: "/src/assets/tailwind/profile-photo-4.png",
    telephone: "+1-202-555-0199",
  },
];

export default function Example() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {people.map((person) => (
        <li
          key={person.email}
          className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow"
        >
          <div className="flex flex-col flex-1 p-8">
            <img
              className="flex-shrink-0 w-32 h-32 mx-auto rounded-full"
              src={person.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {person.name}
            </h3>
            <dl className="flex flex-col justify-between flex-grow mt-1">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 rounded-full bg-green-50 ring-1 ring-inset ring-green-600/20">
                  {person.role}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="flex -mt-px divide-x divide-gray-200">
              <div className="flex flex-1 w-0">
                <a
                  href={`mailto:${person.email}`}
                  className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-semibold text-gray-900 border border-transparent rounded-bl-lg gap-x-3"
                >
                  <EnvelopeIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Email
                </a>
              </div>
              <div className="flex flex-1 w-0 -ml-px">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-semibold text-gray-900 border border-transparent rounded-br-lg gap-x-3"
                >
                  <PhoneIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Call
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
