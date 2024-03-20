import { PropsWithChildren } from "react";
import { DemoContents } from "./DemoContents";

export default function Example({ children }: PropsWithChildren) {
  return (
    <div className="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
      <div className="px-4 py-5 sm:px-6">
        {/* Content goes here */}
        <DemoContents height="h-8" />

        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="px-4 py-5 sm:p-6">
        {/* Content goes here */}
        {children}
      </div>
      <div className="px-4 py-4 sm:px-6">
        {/* Content goes here */}
        <DemoContents height="h-8" />

        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  );
}
