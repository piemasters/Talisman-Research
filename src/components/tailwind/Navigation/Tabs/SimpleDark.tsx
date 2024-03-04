const tabs = [
  { name: "Overview", href: "#", current: true },
  { name: "Activity", href: "#", current: false },
  { name: "Settings", href: "#", current: false },
  { name: "Collaborators", href: "#", current: false },
  { name: "Notifications", href: "#", current: false },
];

export default function Example() {
  return (
    <div className="px-4 py-6 bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full py-2 pl-3 pr-10 text-base text-white border-none rounded-md shadow-sm bg-white/5 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
            defaultValue={tabs.find((tab) => tab.current)?.name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="flex py-4 border-b border-white/10">
            <ul
              role="list"
              className="flex flex-none min-w-full px-2 text-sm font-semibold leading-6 text-gray-400 gap-x-6"
            >
              {tabs.map((tab) => (
                <li key={tab.name}>
                  <a
                    href={tab.href}
                    className={tab.current ? "text-indigo-400" : ""}
                  >
                    {tab.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
