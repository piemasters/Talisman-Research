import { PropsWithChildren } from "react";

const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function Example({ children }: PropsWithChildren) {
  return (
    <div className="overflow-hidden bg-white border border-gray-300 rounded-md">
      <ul role="list" className="divide-y divide-gray-300">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
            {children}
          </li>
        ))}
      </ul>
    </div>
  );
}
