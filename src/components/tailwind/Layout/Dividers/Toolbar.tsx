import {
  ChatBubbleBottomCenterTextIcon,
  PaperClipIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="inline-flex -space-x-px rounded-md shadow-sm isolate">
          <button
            type="button"
            className="relative inline-flex items-center px-3 py-2 text-gray-400 bg-white rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Edit</span>
            <PencilIcon className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center px-3 py-2 text-gray-400 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Attachment</span>
            <PaperClipIcon className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center px-3 py-2 text-gray-400 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Annotate</span>
            <ChatBubbleBottomCenterTextIcon
              className="w-5 h-5"
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center px-3 py-2 text-gray-400 bg-white rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </span>
      </div>
    </div>
  );
}
