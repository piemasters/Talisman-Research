const people = [
  { id: 1, name: "Annette Black" },
  { id: 2, name: "Cody Fisher" },
  { id: 3, name: "Courtney Henry" },
  { id: 4, name: "Kathryn Murphy" },
  { id: 5, name: "Theresa Webb" },
];

export default function Example() {
  return (
    <fieldset>
      <legend className="text-base font-semibold leading-6 text-gray-900">
        Members
      </legend>
      <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
        {people.map((person, personIdx) => (
          <div key={personIdx} className="relative flex items-start py-4">
            <div className="flex-1 min-w-0 text-sm leading-6">
              <label
                htmlFor={`person-${person.id}`}
                className="font-medium text-gray-900 select-none"
              >
                {person.name}
              </label>
            </div>
            <div className="flex items-center h-6 ml-3">
              <input
                id={`person-${person.id}`}
                name={`person-${person.id}`}
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
