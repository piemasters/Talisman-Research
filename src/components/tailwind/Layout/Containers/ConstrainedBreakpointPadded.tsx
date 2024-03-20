import { PropsWithChildren } from "react";

export default function Example({ children }: PropsWithChildren) {
  return (
    <div className="container px-4 mx-auto bg-pink-100 sm:px-6 lg:px-8">
      {/* Content goes here */}
      {children}
    </div>
  );
}
