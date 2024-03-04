export default function Example() {
  return (
    <>
      <span className="relative inline-block">
        <img
          className="w-6 h-6 rounded-md"
          src="/src/assets/tailwind/profile-photo.png"
          alt=""
        />
        <span className="absolute right-0 top-0 block h-1.5 w-1.5 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-gray-300 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          className="w-8 h-8 rounded-md"
          src="/src/assets/tailwind/profile-photo.png"
          alt=""
        />
        <span className="absolute top-0 right-0 block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-400 rounded-full ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          className="w-10 h-10 rounded-md"
          src="/src/assets/tailwind/profile-photo.png"
          alt=""
        />
        <span className="absolute right-0 top-0 block h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-green-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          className="w-12 h-12 rounded-md"
          src="/src/assets/tailwind/profile-photo.png"
          alt=""
        />
        <span className="absolute top-0 right-0 block w-3 h-3 transform translate-x-1/2 -translate-y-1/2 bg-gray-300 rounded-full ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          className="rounded-md h-14 w-14"
          src="/src/assets/tailwind/profile-photo.png"
          alt=""
        />
        <span className="absolute right-0 top-0 block h-3.5 w-3.5 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-red-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          className="w-16 h-16 rounded-md"
          src="/src/assets/tailwind/profile-photo.png"
          alt=""
        />
        <span className="absolute top-0 right-0 block w-4 h-4 transform translate-x-1/2 -translate-y-1/2 bg-green-400 rounded-full ring-2 ring-white" />
      </span>
    </>
  );
}
