import { BellIcon } from "@heroicons/react/24/outline";
import { DemoContent } from "./DemoContent";
import { Mark } from "../../images/Mark";

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-col">
        <header className="shrink-0 bg-gray-900">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Mark className="h-8 w-auto" color="#6366f1" />
            <div className="flex items-center gap-x-8">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your profile</span>
                <img
                  className="h-8 w-8 rounded-full bg-gray-800"
                  src="/src/assets/tailwind/profile-photo.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </header>

        {/* 3 column wrapper */}
        <div className="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 xl:flex">
            <div className="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-b-0 xl:border-r xl:pl-6">
              {/* Left column area */}
              <div className="relative h-[192px] overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75 xl:h-[608px]">
                <DemoContent />
              </div>
            </div>

            <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
              {/* Main area */}
              <div className="relative h-[367px] overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75 xl:h-[608px]">
                <DemoContent />
              </div>
            </div>
          </div>

          <div className="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6">
            {/* Right column area */}
            <div className="relative h-[256px] overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75 lg:h-full xl:h-[608px]">
              <DemoContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
