import { PaperClipIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import RightPannel from "../RightPannel";

function Notice() {
  const [isPannelOpen, setIsPannelOpen] = useState(false);
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeBody, setNoticeBody] = useState("");
  const [noticeAttachment, setNoticeAttachment] = useState(null);

  const pannelToggler = () => setIsPannelOpen((prev) => !prev);

  const handleAttachmentUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setNoticeAttachment(file);
  };

  const handleCancel = () => {
    setNoticeTitle("");
    setNoticeBody("");
    setNoticeAttachment(null);
    pannelToggler();
  };

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
      </div>
      <RightPannel isPannelOpen={isPannelOpen} pannelToggler={pannelToggler}>
        <div className="new-notice flex h-full flex-col">
          <div className="new-notice__header flex justify-between">
            <span className="text-lg font-medium sm:text-xl">
              Create New Notice
            </span>
            <XMarkIcon
              onClick={pannelToggler}
              className="h-5 w-5 cursor-pointer stroke-current stroke-1 text-gray-400 transition-all hover:stroke-2 hover:text-gray-600"
            />
          </div>

          <form className="new-notice__form mt-6 flex flex-1 flex-col justify-between space-y-3">
            <div className="notice-title">
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

            <div className="notice-body flex-1 pb-8">
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
                className="mt-2 h-full w-full resize-none rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
              ></textarea>
            </div>

            <div className="notice-attachment">
              <span className="text-sm font-medium">Add an attachment</span>
              {noticeAttachment ? (
                <SingleAttachmentFile
                  fileName={noticeAttachment.name}
                  setNoticeAttachment={setNoticeAttachment}
                />
              ) : (
                <label
                  htmlFor="notice-attachment"
                  className="mt-2 flex w-full cursor-pointer flex-col items-center rounded border border-dashed border-gray-300 py-6"
                >
                  <PaperClipIcon className="h-6 w-6 text-gray-500" />

                  <span className="mt-2 text-center text-sm text-gray-500">
                    PDF, PNG or JPG upto 500 KB
                  </span>
                  <input
                    type="file"
                    accept=".pdf, .png, .jpg,"
                    name="notice-attachment"
                    id="notice-attachment"
                    className="sr-only"
                    onChange={handleAttachmentUpload}
                  />
                </label>
              )}
            </div>

            <div className="actions flex gap-4">
              <button className="w-full rounded border border-blue-700 bg-blue-700 px-4 py-1 text-white transition-all hover:border-blue-800 hover:bg-blue-800 sm:px-8 sm:text-base sm:font-medium">
                Publish
              </button>

              <button
                onClick={handleCancel}
                className="w-full rounded border border-gray-300 bg-white px-4 py-1 text-gray-600 transition-all hover:bg-gray-100 sm:px-8 sm:text-base sm:font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </RightPannel>
    </div>
  );
}

function SingleAttachmentFile({ fileName, setNoticeAttachment }) {
  return (
    <div className="mt-2 flex items-center justify-between rounded bg-gray-50 p-3">
      <div className="icon-filename flex items-center gap-3">
        <PaperClipIcon className="h-5 w-5 text-gray-700" />
        <span>
          {fileName.length > 21 ? fileName.slice(0, 21) + "..." : fileName}
        </span>
      </div>
      <TrashIcon
        onClick={() => setNoticeAttachment(null)}
        className="h-5 w-5 cursor-pointer text-gray-500 transition-all hover:scale-110 hover:text-red-500"
      />
    </div>
  );
}

export default Notice;
