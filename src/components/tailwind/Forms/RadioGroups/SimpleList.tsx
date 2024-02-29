const notificationMethods = [
  { id: "email", title: "Email" },
  { id: "sms", title: "Phone (SMS)" },
  { id: "push", title: "Push notification" },
];

export default function Example() {
  return (
    <div>
      <label className="text-base font-semibold text-gray-900">
        Notifications
      </label>
      <p className="text-sm text-gray-500">
        How do you prefer to receive notifications?
      </p>
      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4">
          {notificationMethods.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                defaultChecked={notificationMethod.id === "email"}
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
              />
              <label
                htmlFor={notificationMethod.id}
                className="block ml-3 text-sm font-medium leading-6 text-gray-900"
              >
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
