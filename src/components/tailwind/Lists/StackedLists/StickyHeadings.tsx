type User = {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
};

const directory: { [key: string]: User[] } = {
  A: [
    {
      id: 1,
      name: "Leslie Abbott",
      email: "leslie.abbott@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo.png",
    },
    {
      id: 2,
      name: "Hector Adams",
      email: "hector.adams@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-2.png",
    },
    {
      id: 3,
      name: "Blake Alexander",
      email: "blake.alexander@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-3.png",
    },
    {
      id: 4,
      name: "Fabricio Andrews",
      email: "fabricio.andrews@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-4.png",
    },
  ],
  B: [
    {
      id: 5,
      name: "Angela Beaver",
      email: "angela.beaver@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-5.png",
    },
    {
      id: 6,
      name: "Yvette Blanchard",
      email: "yvette.blanchard@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    },
    {
      id: 7,
      name: "Lawrence Brooks",
      email: "lawrence.brooks@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-7.png",
    },
  ],
  C: [
    {
      id: 8,
      name: "Jeffrey Clark",
      email: "jeffrey.clark@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-8.png",
    },
    {
      id: 9,
      name: "Kathryn Cooper",
      email: "kathryn.cooper@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    },
  ],
  E: [
    {
      id: 10,
      name: "Alicia Edwards",
      email: "alicia.edwards@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo.png",
    },
    {
      id: 11,
      name: "Benjamin Emerson",
      email: "benjamin.emerson@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-2.png",
    },
    {
      id: 12,
      name: "Jillian Erics",
      email: "jillian.erics@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-3.png",
    },
    {
      id: 13,
      name: "Chelsea Evans",
      email: "chelsea.evans@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-4.png",
    },
  ],
  G: [
    {
      id: 14,
      name: "Michael Gillard",
      email: "micheal.gillard@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-5.png",
    },
    {
      id: 15,
      name: "Dries Giuessepe",
      email: "dries.giuessepe@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    },
  ],
  M: [
    {
      id: 16,
      name: "Jenny Harrison",
      email: "jenny.harrison@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-7.png",
    },
    {
      id: 17,
      name: "Lindsay Hatley",
      email: "lindsay.hatley@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-8.png",
    },
    {
      id: 18,
      name: "Anna Hill",
      email: "anna.hill@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    },
  ],
  S: [
    {
      id: 19,
      name: "Courtney Samuels",
      email: "courtney.samuels@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo.png",
    },
    {
      id: 20,
      name: "Tom Simpson",
      email: "tom.simpson@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-2.png",
    },
  ],
  T: [
    {
      id: 21,
      name: "Floyd Thompson",
      email: "floyd.thompson@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-3.png",
    },
    {
      id: 22,
      name: "Leonard Timmons",
      email: "leonard.timmons@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-4.png",
    },
    {
      id: 23,
      name: "Whitney Trudeau",
      email: "whitney.trudeau@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-5.png",
    },
  ],
  W: [
    {
      id: 24,
      name: "Kristin Watson",
      email: "kristin.watson@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    },
    {
      id: 25,
      name: "Emily Wilson",
      email: "emily.wilson@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-7.png",
    },
  ],
  Y: [
    {
      id: 26,
      name: "Emma Young",
      email: "emma.young@example.com",
      imageUrl: "/src/assets/tailwind/profile-photo-8.png",
    },
  ],
};

export default function Example() {
  return (
    <nav className="h-full overflow-y-auto" aria-label="Directory">
      {Object.keys(directory).map((letter) => (
        <div key={letter} className="relative">
          <div className="sticky top-0 z-10 border-y border-b-gray-200 border-t-gray-100 bg-gray-50 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900">
            <h3>{letter}</h3>
          </div>
          <ul role="list" className="divide-y divide-gray-100">
            {directory[letter].map((person) => (
              <li key={person.email} className="flex px-3 py-5 gap-x-4">
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
        </div>
      ))}
    </nav>
  );
}
