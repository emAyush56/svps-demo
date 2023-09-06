import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function Notice() {
  const [isPannelOpen, setIsPannelOpen] = useState(false);
  const pannelToggler = () => setIsPannelOpen((prev) => !prev);

  return (
    <div className="notice">
      <div className="notice__header flex justify-between">
        <h2 className="text-lg font-medium sm:text-xl">All Notices</h2>
        <button
          onClick={pannelToggler}
          className="rounded border border-blue-700 bg-blue-700 py-0.5 px-4 text-sm text-white transition-all hover:border-blue-800 hover:bg-blue-800 sm:py-1 sm:px-8 sm:text-base sm:font-medium"
        >
          Create New
        </button>
        <NewNoticePannel
          isPannelOpen={isPannelOpen}
          pannelToggler={pannelToggler}
        />
      </div>
    </div>
  );
}

function NewNoticePannel({ isPannelOpen, pannelToggler }) {
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeBody, setNoticeBody] = useState("");
  return (
    <div
      onClick={pannelToggler}
      className={`pannel-wrapper fixed inset-0 ${
        isPannelOpen ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`new-notice fixed top-0 right-0 flex h-full w-full flex-col bg-white p-6 shadow-lg transition-all sm:w-[512px] ${
          isPannelOpen
            ? "translate-x-0"
            : "translate-x-full sm:translate-x-[512px]"
        }`}
      >
        <div
          onClick={pannelToggler}
          className="new-notice__header flex justify-between"
        >
          <span className="text-lg font-medium sm:text-xl">
            Create New Notice
          </span>
          <XMarkIcon className="h-5 w-5 cursor-pointer rounded-md stroke-current stroke-1 text-gray-400 transition-all hover:stroke-2 hover:text-gray-600" />
        </div>

        <div className="new-notice__content mt-6 h-full">
          <form className="space-y-3">
            <div className="content_notice-title">
              <label htmlFor="notice-title" className="text-sm font-medium">
                Title
              </label>
              <input
                required
                value={noticeTitle}
                onChange={(e) => setNoticeTitle(e.target.value)}
                placeholder="Title of the notice"
                type="text"
                id="notice-title"
                className="mt-2 w-full rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
              />
            </div>

            <div className="content_notice-body">
              <label htmlFor="notice-body" className="text-sm font-medium">
                Body
              </label>
              <textarea
                required
                value={noticeBody}
                onChange={(e) => setNoticeBody(e.target.value)}
                placeholder="Body of the notice"
                name="notice-body"
                id="notice-body"
                className="mt-2 h-[512px] w-full resize-none rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
              ></textarea>
            </div>

            <div className="actions flex gap-4">
              <button className="w-full rounded border border-blue-700 bg-blue-700 px-4 py-1 text-white transition-all hover:border-blue-800 hover:bg-blue-800 sm:px-8 sm:text-base sm:font-medium">
                Publish
              </button>

              <button
                onClick={pannelToggler}
                className="w-full rounded border border-gray-300 px-4 py-1 text-gray-600 transition-all hover:bg-gray-100 sm:px-8 sm:text-base sm:font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Notice;
