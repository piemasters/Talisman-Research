export const people = [
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    email: "lindsay.walton@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo-8.png",
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    email: "courtney.henry@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo-9.png",
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    email: "tom.cook@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo.png",
  },
  {
    name: "Whitney Francis",
    role: "Copywriter",
    email: "whitney.francis@example.com",
    imageUrl: "/src/assets/tailwind/profile-photo-4.png",
  },
];

export default function Example() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {people.map((person) => (
        <div
          key={person.email}
          className="relative flex items-center px-6 py-5 space-x-3 bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="flex-shrink-0">
            <img
              className="w-10 h-10 rounded-full"
              src={person.imageUrl}
              alt=""
            />
          </div>
          <div className="flex-1 min-w-0">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-500 truncate">{person.role}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
