export default function Example() {
  return (
    <>
      <span className="relative inline-block">
        <img
          className="w-6 h-6 rounded-full"
          src="/src/assets/tailwind/profile-photo.png"
          alt=""
        />
        <span className="absolute bottom-0 right-0 block h-1.5 w-1.5 rounded-full bg-gray-300 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          className="w-8 h-8 rounded-full"
          src="/src/assets/tailwind/profile-photo.png"
          alt=""
        />
        <span className="absolute bottom-0 right-0 block w-2 h-2 bg-red-400 rounded-full ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          className="w-10 h-10 rounded-full"
          src="/src/assets/tailwind/profile-photo.png"
          alt=""
        />
        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          className="w-12 h-12 rounded-full"
          src="/src/assets/tailwind/profile-photo.png"
          alt=""
        />
        <span className="absolute bottom-0 right-0 block w-3 h-3 bg-gray-300 rounded-full ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          className="rounded-full h-14 w-14"
          src="/src/assets/tailwind/profile-photo.png"
          alt=""
        />
        <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full bg-red-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          className="w-16 h-16 rounded-full"
          src="/src/assets/tailwind/profile-photo.png"
          alt=""
        />
        <span className="absolute bottom-0 right-0 block w-4 h-4 bg-green-400 rounded-full ring-2 ring-white" />
      </span>
    </>
  );
}
