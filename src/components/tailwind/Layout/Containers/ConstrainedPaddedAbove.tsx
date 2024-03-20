import { PropsWithChildren } from "react";

export default function Example({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto bg-pink-100 max-w-7xl sm:px-6 lg:px-8">
      {/* Content goes here */}
      {children}
    </div>
  );
}
