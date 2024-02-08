const activityItems = [
  {
    user: {
      name: "Michael Foster",
      imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    },
    projectName: "ios-app",
    commit: "2d89f0c8",
    branch: "main",
    date: "1h",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Lindsay Walton",
      imageUrl: "/src/assets/tailwind/profile-photo-8.png",
    },
    projectName: "mobile-api",
    commit: "249df660",
    branch: "main",
    date: "3h",
    dateTime: "2023-01-23T09:00",
  },
  {
    user: {
      name: "Courtney Henry",
      imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    },
    projectName: "ios-app",
    commit: "11464223",
    branch: "main",
    date: "12h",
    dateTime: "2023-01-23T00:00",
  },
  {
    user: {
      name: "Courtney Henry",
      imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    },
    projectName: "tailwindui.com",
    commit: "dad28e95",
    branch: "main",
    date: "2d",
    dateTime: "2023-01-21T13:00",
  },
  {
    user: {
      name: "Michael Foster",
      imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    },
    projectName: "relay-service",
    commit: "624bc94c",
    branch: "main",
    date: "5d",
    dateTime: "2023-01-18T12:34",
  },
];

export default function Example() {
  return (
    <ul role="list" className="divide-y divide-white/5">
      {activityItems.map((item) => (
        <li key={item.commit} className="py-4">
          <div className="flex items-center gap-x-3">
            <img
              src={item.user.imageUrl}
              alt=""
              className="flex-none w-6 h-6 bg-gray-800 rounded-full"
            />
            <h3 className="flex-auto text-sm font-semibold leading-6 text-white truncate">
              {item.user.name}
            </h3>
            <time
              dateTime={item.dateTime}
              className="flex-none text-xs text-gray-500"
            >
              {item.date}
            </time>
          </div>
          <p className="mt-3 text-sm text-gray-500 truncate">
            Pushed to <span className="text-gray-400">{item.projectName}</span>{" "}
            (<span className="font-mono text-gray-400">{item.commit}</span> on{" "}
            <span className="text-gray-400">{item.branch}</span>)
          </p>
        </li>
      ))}
    </ul>
  );
}
