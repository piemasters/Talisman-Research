import { PropsWithChildren } from "react";

export default function Example({ children }: PropsWithChildren) {
  return (
    <div className="overflow-hidden bg-gray-200 rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        {/* Content goes here */}
        {children}
      </div>
    </div>
  );
}
