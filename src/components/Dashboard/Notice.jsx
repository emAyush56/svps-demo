import { PaperClipIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import RightPannel from "../RightPannel";
import data from "../../noticedata.json";
import SingleAttachment from "./SingleAttachment";

function Notice() {
  const [isPannelOpen, setIsPannelOpen] = useState(false);
  const [isEditPannelOpen, setIsEditPannelOpen] = useState(false);
  // const [noticeTitle, setNoticeTitle] = useState("");
  // const [noticeBody, setNoticeBody] = useState("");
  // const [noticeAttachment, setNoticeAttachment] = useState(null);
  // const [noticeDate, setNoitceDate] = useState("");

  const [newNotice, setNewNotice] = useState({
    noticeDate: "",
    noticeTitle: "",
    noticeBody: "",
    noticeAttachment: null,
  });

  const handleNewNoticeInput = (event) => {
    setNewNotice((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleAttachmentUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    console.log(file);

    setNewNotice((prev) => {
      return { ...prev, noticeAttachment: file };
    });
  };

  const pannelToggler = () => setIsPannelOpen((prev) => !prev);
  const editPannelToggler = () => setIsEditPannelOpen((prev) => !prev);

  const handleCancel = () => {
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
            <div className="noticeDate">
              <label htmlFor="noticeDate" className="text-sm font-medium">
                Date
              </label>
              <input
                required
                type="date"
                id="noticeDate"
                name="noticeDate"
                value={newNotice.noticeDate}
                onChange={handleNewNoticeInput}
                className="mt-2 w-full rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
              />
            </div>

            <div className="noticeTitle">
              <label htmlFor="noticeTitle" className="text-sm font-medium">
                Title
              </label>
              <input
                required
                value={newNotice.noticeTitle}
                onChange={handleNewNoticeInput}
                placeholder="Title of the notice"
                type="text"
                id="noticeTitle"
                name="noticeTitle"
                className="mt-2 w-full rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
              />
            </div>

            <div className="noticeBody flex-1 pb-8">
              <label htmlFor="noticeBody" className="text-sm font-medium">
                Body
              </label>
              <textarea
                required
                value={newNotice.noticeBody}
                onChange={handleNewNoticeInput}
                placeholder="Body of the notice"
                name="noticeBody"
                id="noticeBody"
                className="mt-2 h-full w-full resize-none rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
              ></textarea>
            </div>
            <div className="noticeAttachment">
              <span className="text-sm font-medium">Add an attachment</span>
              {newNotice.noticeAttachment ? (
                <SingleAttachment
                  fileName={newNotice.noticeAttachment.name}
                  setNewNotice={setNewNotice}
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

      <div className="notice__body mt-6 w-full overflow-x-auto rounded-lg bg-white py-3 px-4">
        <table className="w-full overflow-x-auto">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data
              .slice()
              .reverse()
              .map((notice, idx) => (
                <tr className={idx !== data.length - 1 && "border-b"} key={idx}>
                  <td className="min-w-[144px] px-4 py-3.5">{notice.date}</td>
                  <td className="px-4 py-3.5">{notice.title}</td>
                  <td className="flex gap-3 px-4 py-3.5">
                    {/* <button className="flex items-center gap-1.5 rounded-full border border-gray-300 px-3 py-0.5 text-sm text-gray-600 transition-all hover:bg-gray-100">
                      <EyeIcon className="h-3.5 w-3.5" />
                      View
                    </button> */}
                    <button
                      onClick={editPannelToggler}
                      className="flex items-center gap-1.5 rounded-full border border-blue-600 px-3 py-0.5 text-sm text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
                    >
                      <PencilIcon className="h-3 w-3" />
                      Edit
                    </button>
                    <RightPannelEdit
                      isEditPannelOpen={isEditPannelOpen}
                      editPannelToggler={editPannelToggler}
                      singleNotice={notice}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RightPannelEdit({
  isEditPannelOpen,
  editPannelToggler,
  singleNotice,
}) {
  const [newNoticeHere, setNewNoticeHere] = useState({
    noticeDate: singleNotice.date,
    noticeTitle: singleNotice.title,
    noticeBody: singleNotice.body,
    noticeAttachment: singleNotice.attachment,
  });

  const handleNewNoticeInput = (event) => {
    setNewNoticeHere((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleAttachmentUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setNewNoticeHere((prev) => {
      return { ...prev, noticeAttachment: file };
    });
  };

  return (
    <RightPannel
      isPannelOpen={isEditPannelOpen}
      pannelToggler={editPannelToggler}
    >
      <div className="new-notice flex h-full flex-col">
        <div className="new-notice__header flex justify-between">
          <span className="text-lg font-medium sm:text-xl">Edit Notice</span>
          <XMarkIcon
            onClick={editPannelToggler}
            className="h-5 w-5 cursor-pointer stroke-current stroke-1 text-gray-400 transition-all hover:stroke-2 hover:text-gray-600"
          />
        </div>

        <form className="new-notice__form mt-6 flex flex-1 flex-col justify-between space-y-3">
          <div className="noticeDate">
            <label htmlFor="noticeDate" className="text-sm font-medium">
              Date
            </label>
            <input
              required
              type="date"
              id="noticeDate"
              name="noticeDate"
              value={newNoticeHere.noticeDate}
              onChange={handleNewNoticeInput}
              className="mt-2 w-full rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
            />
          </div>

          <div className="noticeTitle">
            <label htmlFor="noticeTitle" className="text-sm font-medium">
              Title
            </label>
            <input
              required
              value={newNoticeHere.noticeTitle}
              onChange={handleNewNoticeInput}
              placeholder="Title of the notice"
              type="text"
              id="noticeTitle"
              name="noticeTitle"
              className="mt-2 w-full rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
            />
          </div>

          <div className="noticeBody flex-1 pb-8">
            <label htmlFor="noticeBody" className="text-sm font-medium">
              Body
            </label>
            <textarea
              required
              value={newNoticeHere.noticeBody}
              onChange={handleNewNoticeInput}
              placeholder="Body of the notice"
              name="noticeBody"
              id="noticeBody"
              className="mt-2 h-full w-full resize-none rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
            ></textarea>
          </div>

          <div className="noticeAttachment">
            <span className="text-sm font-medium">Update attachment</span>
            {newNoticeHere.noticeAttachment ? (
              <SingleAttachment
                fileName={newNoticeHere.noticeAttachment.filename}
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
          </div>

          <div className="actions flex gap-4">
            <button className="w-full rounded border border-blue-700 bg-blue-700 px-4 py-1 text-white transition-all hover:border-blue-800 hover:bg-blue-800 sm:px-8 sm:text-base sm:font-medium">
              Update
            </button>

            <button
              onClick={editPannelToggler}
              className="w-full rounded border border-gray-300 bg-white px-4 py-1 text-gray-600 transition-all hover:bg-gray-100 sm:px-8 sm:text-base sm:font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </RightPannel>
  );
}

export default Notice;
