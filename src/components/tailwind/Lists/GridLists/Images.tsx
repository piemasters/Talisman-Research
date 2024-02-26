const files = [
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: "/src/assets/tailwind/background-1.png",
  },
  {
    title: "IMG_5214.HEIC",
    size: "4 MB",
    source: "/src/assets/tailwind/background-2.png",
  },
  {
    title: "IMG_3851.HEIC",
    size: "3.8 MB",
    source: "/src/assets/tailwind/background-3.png",
  },
  {
    title: "IMG_4278.HEIC",
    size: "4.1 MB",
    source: "/src/assets/tailwind/background-4.png",
  },
  {
    title: "IMG_6842.HEIC",
    size: "4 MB",
    source: "/src/assets/tailwind/background-5.png",
  },
  {
    title: "IMG_3284.HEIC",
    size: "3.9 MB",
    source: "/src/assets/tailwind/background-6.png",
  },
  {
    title: "IMG_4841.HEIC",
    size: "3.8 MB",
    source: "/src/assets/tailwind/background-7.png",
  },
  {
    title: "IMG_5644.HEIC",
    size: "4 MB",
    source: "/src/assets/tailwind/background-8.png",
  },
];

export default function Example() {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-h-7 aspect-w-10 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              src={file.source}
              alt=""
              className="object-cover pointer-events-none group-hover:opacity-75"
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
            {file.title}
          </p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">
            {file.size}
          </p>
        </li>
      ))}
    </ul>
  );
}
