export const DemoContents = () => {
  return (
    <div className="relative h-64 overflow-hidden border border-gray-400 border-dashed opacity-75">
      <svg
        className="absolute inset-0 w-full h-full bg-white stroke-gray-900/10"
        fill="none"
      >
        <defs>
          <pattern
            id="pattern-2e2e2dfb-58b7-4019-82fc-58ca045f95ff"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-2e2e2dfb-58b7-4019-82fc-58ca045f95ff)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
    </div>
  );
};
