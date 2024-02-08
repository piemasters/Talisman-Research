const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl: "/src/assets/tailwind/profile-photo-5.png",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl: "/src/assets/tailwind/profile-photo-7.png",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl: "/src/assets/tailwind/profile-photo-8.png",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl: "/src/assets/tailwind/profile-photo.png",
    lastSeen: null,
  },
];

export default function Example() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between py-5 gap-x-6">
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
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
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
        </li>
      ))}
    </ul>
  );
}
