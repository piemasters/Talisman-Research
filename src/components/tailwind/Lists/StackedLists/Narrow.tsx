const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo-5.png",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo-6.png",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo-7.png",
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo-8.png",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo-9.png",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo.png",
  },
];

export default function Example() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex py-5 gap-x-4">
          <img
            className="flex-none w-12 h-12 rounded-full bg-gray-50"
            src={person.imageUrl}
            alt=""
          />
          <div className="min-w-0">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {person.name}
            </p>
            <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
              {person.email}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
