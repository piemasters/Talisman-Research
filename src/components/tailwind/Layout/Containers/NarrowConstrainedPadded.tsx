import { PropsWithChildren } from "react";

export default function Example({ children }: PropsWithChildren) {
  return (
    <div className="px-4 mx-auto bg-pink-100 max-w-7xl sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="max-w-3xl mx-auto">
        {/* Content goes here */}
        {children}
      </div>
    </div>
  );
}
