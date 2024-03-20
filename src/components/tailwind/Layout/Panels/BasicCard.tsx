import { PropsWithChildren } from "react";

export default function Example({ children }: PropsWithChildren) {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:p-6">
        {/* Content goes here */}
        {children}
      </div>
    </div>
  );
}
