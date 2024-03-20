export default function Example() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start">
        <span className="pr-3 text-base font-semibold leading-6 text-gray-900 bg-white">
          Projects
        </span>
      </div>
    </div>
  );
}
