import { PropsWithChildren } from "react";

const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function Example({ children }: PropsWithChildren) {
  return (
    <div className="overflow-hidden bg-white rounded-md shadow">
      <ul role="list" className="divide-y divide-gray-200">
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
