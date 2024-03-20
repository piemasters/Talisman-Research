import { classNames } from "../../util/classNames";

export const DemoContents = ({ height }: { height?: string }) => {
  return (
    <div
      className={classNames(
        height ? height : "h-64",
        "relative h-64 overflow-hidden border border-gray-400 border-dashed rounded opacity-75"
      )}
    >
      <svg
        className="absolute inset-0 w-full h-full stroke-gray-900/10"
        fill="none"
      >
        <defs>
          <pattern
            id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
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
          fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
    </div>
  );
};
