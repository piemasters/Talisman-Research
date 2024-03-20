import { PropsWithChildren } from "react";

const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function Example({ children }: PropsWithChildren) {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="px-4 py-4 overflow-hidden bg-white shadow sm:rounded-md sm:px-6"
        >
          {/* Your content */}
          {children}
        </li>
      ))}
    </ul>
  );
}
