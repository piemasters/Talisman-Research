import {
  Bars4Icon,
  CalendarIcon,
  ClockIcon,
  PhotoIcon,
  TableCellsIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";
import { classNames } from "../../util/classNames";

const items = [
  {
    title: "Create a List",
    description: "Another to-do system you'll try but eventually give up on.",
    icon: Bars4Icon,
    background: "bg-pink-500",
  },
  {
    title: "Create a Calendar",
    description: "Stay on top of your deadlines, or don't — it's up to you.",
    icon: CalendarIcon,
    background: "bg-yellow-500",
  },
  {
    title: "Create a Gallery",
    description: "Great for mood boards and inspiration.",
    icon: PhotoIcon,
    background: "bg-green-500",
  },
  {
    title: "Create a Board",
    description: "Track tasks in different stages of your project.",
    icon: ViewColumnsIcon,
    background: "bg-blue-500",
  },
  {
    title: "Create a Spreadsheet",
    description: "Lots of numbers and things — good for nerds.",
    icon: TableCellsIcon,
    background: "bg-indigo-500",
  },
  {
    title: "Create a Timeline",
    description: "Get a birds-eye-view of your procrastination.",
    icon: ClockIcon,
    background: "bg-purple-500",
  },
];

export default function Example() {
  return (
    <div>
      <h2 className="text-base font-semibold leading-6 text-gray-900">
        Projects
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        You haven’t created a project yet. Get started by selecting a template
        or start from an empty project.
      </p>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 py-6 mt-6 border-t border-b border-gray-200 sm:grid-cols-2"
      >
        {items.map((item, itemIdx) => (
          <li key={itemIdx} className="flow-root">
            <div className="relative flex items-center p-2 -m-2 space-x-4 rounded-xl focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
              <div
                className={classNames(
                  item.background,
                  "flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg"
                )}
              >
                <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <span>{item.title}</span>
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex mt-4">
        <a
          href="#"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Or start from an empty project
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  );
}
