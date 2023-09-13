import { useState } from "react";
import RightPannel from "../RightPannel";
import { XMarkIcon } from "@heroicons/react/24/solid";
import SingleAttachment from "./SingleAttachment";
import { PaperClipIcon } from "@heroicons/react/24/outline";

function RightPannelEdit({
  isEditPannelOpen,
  editPannelToggler,
  singleNotice,
}) {
  console.log(singleNotice);
  return (
    <RightPannel
    //   isPannelOpen={isEditPannelOpen}
    //   pannelToggler={editPannelToggler}
    >
      <div className="new-notice flex h-full flex-col">
        <div className="new-notice__header flex justify-between">
          <span className="text-lg font-medium sm:text-xl">Edit Notice</span>
          <XMarkIcon
            // onClick={editPannelToggler}
            className="h-5 w-5 cursor-pointer stroke-current stroke-1 text-gray-400 transition-all hover:stroke-2 hover:text-gray-600"
          />
        </div>

        <form className="new-notice__form mt-6 flex flex-1 flex-col justify-between space-y-3">
          <div className="noticeDate">
            <div className="flex justify-between text-sm font-medium">
              <span>Dated</span>
              <span className="text-blue-600">
                {/* {newNoticeHere.noticeDate.split("T")[0]} */}
                2023-09-10
              </span>
            </div>
          </div>

          <div className="title">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <input
              required
              //   value={newNoticeHere.title}
              //   onChange={handleNewNoticeInput}
              placeholder="Title of the notice"
              type="text"
              id="title"
              name="title"
              className="mt-2 w-full rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
            />
          </div>

          <div className="description flex-1 pb-8">
            <label htmlFor="description" className="text-sm font-medium">
              Body
            </label>
            <textarea
              required
              //   value={newNoticeHere.description}
              //   onChange={handleNewNoticeInput}
              placeholder="Body of the notice"
              name="description"
              id="description"
              className="mt-2 h-full w-full resize-none rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
            ></textarea>
          </div>

          {/* <div className="noticeAttachment">
            <span className="text-sm font-medium">Update attachment</span>
            {newNoticeHere.noticeAttachment ? (
              <SingleAttachment
                fileName={newNoticeHere.noticeAttachment.attachmentTitle}
                setNewNotice={setNewNoticeHere}
              />
            ) : (
              <label
                htmlFor="noticeAttachment"
                className="mt-2 flex w-full cursor-pointer flex-col items-center rounded border border-dashed border-gray-300 py-6"
              >
                <PaperClipIcon className="h-6 w-6 text-gray-500" />

                <span className="mt-2 text-center text-sm text-gray-500">
                  PDF, PNG or JPG upto 500 KB
                </span>
                <input
                  type="file"
                  accept=".pdf, .png, .jpg,"
                  name="noticeAttachment"
                  id="noticeAttachment"
                  className="sr-only"
                  onChange={handleAttachmentUpload}
                />
              </label>
            )}
          </div> */}

          <div className="actions flex gap-4">
            <button className="w-full rounded border border-blue-700 bg-blue-700 px-4 py-1 text-white transition-all hover:border-blue-800 hover:bg-blue-800 sm:px-8 sm:text-base sm:font-medium">
              Update
            </button>

            {/* <button
              onClick={editPannelToggler}
              className="w-full rounded border border-gray-300 bg-white px-4 py-1 text-gray-600 transition-all hover:bg-gray-100 sm:px-8 sm:text-base sm:font-medium"
            >
              Cancel
            </button> */}
          </div>
        </form>
      </div>
    </RightPannel>
  );
}

export default RightPannelEdit;
