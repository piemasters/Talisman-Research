const sides = [
  { id: null, name: "None" },
  { id: 1, name: "Baked beans" },
  { id: 2, name: "Coleslaw" },
  { id: 3, name: "French fries" },
  { id: 4, name: "Garden salad" },
  { id: 5, name: "Mashed potatoes" },
];

export default function Example() {
  return (
    <fieldset>
      <legend className="text-base font-semibold text-gray-900">
        Select a side
      </legend>
      <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
        {sides.map((side, sideIdx) => (
          <div key={sideIdx} className="relative flex items-start py-4">
            <div className="flex-1 min-w-0 text-sm leading-6">
              <label
                htmlFor={`side-${side.id}`}
                className="font-medium text-gray-900 select-none"
              >
                {side.name}
              </label>
            </div>
            <div className="flex items-center h-6 ml-3">
              <input
                id={`side-${side.id}`}
                name="plan"
                type="radio"
                defaultChecked={side.id === null}
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
