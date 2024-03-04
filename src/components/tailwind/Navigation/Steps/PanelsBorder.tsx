import { CheckIcon } from "@heroicons/react/24/solid";
import { classNames } from "../../util/classNames";

const steps = [
  {
    id: "01",
    name: "Job Details",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "complete",
  },
  {
    id: "02",
    name: "Application form",
    description: "Cursus semper viverra.",
    href: "#",
    status: "current",
  },
  {
    id: "03",
    name: "Preview",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
];

export default function Example() {
  return (
    <div className="lg:border-b lg:border-t lg:border-gray-200">
      <nav
        className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        aria-label="Progress"
      >
        <ol
          role="list"
          className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.id} className="relative overflow-hidden lg:flex-1">
              <div
                className={classNames(
                  stepIdx === 0 ? "rounded-t-md border-b-0" : "",
                  stepIdx === steps.length - 1 ? "rounded-b-md border-t-0" : "",
                  "overflow-hidden border border-gray-200 lg:border-0"
                )}
              >
                {step.status === "complete" ? (
                  <a href={step.href} className="group">
                    <span
                      className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? "lg:pl-9" : "",
                        "flex items-start px-6 py-5 text-sm font-medium"
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full">
                          <CheckIcon
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </span>
                      <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                        <span className="text-sm font-medium">{step.name}</span>
                        <span className="text-sm font-medium text-gray-500">
                          {step.description}
                        </span>
                      </span>
                    </span>
                  </a>
                ) : step.status === "current" ? (
                  <a href={step.href} aria-current="step">
                    <span
                      className="absolute top-0 left-0 w-1 h-full bg-indigo-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? "lg:pl-9" : "",
                        "flex items-start px-6 py-5 text-sm font-medium"
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="flex items-center justify-center w-10 h-10 border-2 border-indigo-600 rounded-full">
                          <span className="text-indigo-600">{step.id}</span>
                        </span>
                      </span>
                      <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                        <span className="text-sm font-medium text-indigo-600">
                          {step.name}
                        </span>
                        <span className="text-sm font-medium text-gray-500">
                          {step.description}
                        </span>
                      </span>
                    </span>
                  </a>
                ) : (
                  <a href={step.href} className="group">
                    <span
                      className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? "lg:pl-9" : "",
                        "flex items-start px-6 py-5 text-sm font-medium"
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full">
                          <span className="text-gray-500">{step.id}</span>
                        </span>
                      </span>
                      <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                        <span className="text-sm font-medium text-gray-500">
                          {step.name}
                        </span>
                        <span className="text-sm font-medium text-gray-500">
                          {step.description}
                        </span>
                      </span>
                    </span>
                  </a>
                )}

                {stepIdx !== 0 ? (
                  <>
                    {/* Separator */}
                    <div
                      className="absolute inset-0 top-0 left-0 hidden w-3 lg:block"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-full h-full text-gray-300"
                        viewBox="0 0 12 82"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0.5 0V31L10.5 41L0.5 51V82"
                          stroke="currentcolor"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </div>
                  </>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
