import { PaperClipIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import RightPannel from "../../components/Dashboard/RightPannel";
import SingleAttachment from "../../components/Dashboard/SingleAttachment";
import axios from "../../_api/axios";
import { getDecryptedAccessToken } from "../../_utils/authUtils";
import LoadingSpinner from "../../components/LoadingSpinner";

const URL_POST_CREATE_NOTICE = "/notice/add";
const URL_GET_ALL_NOTICES = "/notice/find";
const URL_PUT_UPDATE_NOTICE = "/notice/update";
const URL_DELETE_NOTICE = "/notice/delete";

function PublicNotices() {
  const today = new Date();
  const todayFormatted = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  const [isPannelOpen, setIsPannelOpen] = useState(false);
  const [newNotice, setNewNotice] = useState({
    title: "",
    description: "",
  });
  const [noticeAttachment, setNoticeAttachment] = useState(null);
  const [allNoticeData, setAllNoticeData] = useState([]);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [noticeLoader, setNoticeLoader] = useState(true);
  const [deleteLoaders, setDeleteLoaders] = useState({});

  const handleNewNoticeInput = (event) => {
    setNewNotice((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleAttachmentUpload = (event) => {
    const attachment = event.target.files[0];
    if (!attachment) return;
    setNoticeAttachment(attachment);
  };

  const handleCancel = () => {
    pannelToggler();
  };

  const getAllNotices = async () => {
    setNoticeLoader(true);
    try {
      const res = await axios.get(URL_GET_ALL_NOTICES, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setAllNoticeData(res.data);
      // console.log(res.data);
      setNoticeLoader(false);
    } catch (error) {
      setNoticeLoader(false);
      console.log(error);
    }
  };

  const handleAttachmentDelete = (attachmentId) => {
    setNoticeAttachment(null);
  };

  const handleSubmitCreateNotice = async (event) => {
    event.preventDefault();
    setButtonLoader(true);

    try {
      const decryptedAccessToken = getDecryptedAccessToken();
      const noticeFormData = new FormData();
      noticeFormData.append("attachments", noticeAttachment);
      noticeFormData.append("body", JSON.stringify(newNotice));

      const res = await axios.post(URL_POST_CREATE_NOTICE, noticeFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          token: `Bearer ${decryptedAccessToken}`,
        },
      });
      getAllNotices();
      setIsPannelOpen(false);
      setButtonLoader(false);

      setNewNotice({
        title: "",
        description: "",
      });
      setNoticeAttachment(null);
    } catch (error) {
      setButtonLoader(false);
      console.log(error);
    }
  };

  const handleNoticeDelete = async (noticeId) => {
    setDeleteLoaders((prevLoaders) => ({
      ...prevLoaders,
      [noticeId]: true,
    }));

    const deleteConfirmation = window.confirm(
      "Permamnently delete this notice?"
    );

    if (deleteConfirmation) {
      try {
        const decryptedAccessToken = getDecryptedAccessToken();

        const noticeToBeDeleted = {
          noticeIds: [{ noticeId: noticeId }],
        };

        const res = await axios.delete(URL_DELETE_NOTICE, {
          headers: {
            "Content-Type": "application/json",
            token: `Bearer ${decryptedAccessToken}`,
          },
          data: noticeToBeDeleted,
        });

        // setDeleteLoaders((prevLoaders) => ({
        //   ...prevLoaders,
        //   [noticeId]: false,
        // }));
        getAllNotices();
      } catch (error) {
        setDeleteLoaders((prevLoaders) => ({
          ...prevLoaders,
          [noticeId]: false,
        }));
        console.log(error);
      }
    } else {
      setDeleteLoaders((prevLoaders) => ({
        ...prevLoaders,
        [noticeId]: false,
      }));
    }
  };

  useEffect(() => {
    getAllNotices();
  }, []);

  if (noticeLoader) {
    return (
      <div className="flex h-full items-center justify-center">
        <LoadingSpinner
          colorLight="text-blue-600/20"
          colorDark="text-blue-primary"
          h="h-8"
          w="w-8"
        />
      </div>
    );
  }

  return (
    <div className="notice">
      <div className="notice__header flex justify-between">
        <h2 className="text-lg font-medium sm:text-xl">All Notices</h2>
        <button
          onClick={() => setIsPannelOpen(true)}
          className="rounded border border-blue-700 bg-blue-700 py-0.5 px-4 text-sm text-white transition-all hover:border-blue-800 hover:bg-blue-800 sm:py-1 sm:px-8 sm:text-base"
        >
          Create New
        </button>
      </div>
      <RightPannel isOpen={isPannelOpen} onClose={() => setIsPannelOpen(false)}>
        <div className="new-notice flex h-full flex-col">
          <div className="new-notice__header flex justify-between">
            <span className="text-lg font-medium sm:text-xl">
              Create New Notice
            </span>
            <XMarkIcon
              onClick={() => setIsPannelOpen(false)}
              className="h-5 w-5 cursor-pointer stroke-current stroke-1 text-gray-400 transition-all hover:stroke-2 hover:text-gray-600"
            />
          </div>

          <form
            onSubmit={handleSubmitCreateNotice}
            className="new-notice__form mt-6 flex flex-1 flex-col justify-between space-y-3"
          >
            <div className="noticeDate">
              <div className="flex justify-between text-sm font-medium">
                <span>Today</span>
                <span className="text-blue-600">{todayFormatted}</span>
              </div>
            </div>

            <div className="title">
              <label htmlFor="title" className="text-sm font-medium">
                Title
              </label>
              <input
                required
                value={newNotice.title}
                onChange={handleNewNoticeInput}
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
                value={newNotice.description}
                onChange={handleNewNoticeInput}
                placeholder="Body of the notice"
                name="description"
                id="description"
                className="mt-2 h-full w-full resize-none rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
              ></textarea>
            </div>
            <div className="noticeAttachment">
              <span className="text-sm font-medium">Add an attachment</span>
              {noticeAttachment ? (
                <SingleAttachment
                  attachmentId={"11"}
                  fileName={noticeAttachment.name}
                  handleAttachmentDelete={handleAttachmentDelete}
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
                    accept=".pdf, .png, .jpg, .jpeg"
                    name="noticeAttachment"
                    id="noticeAttachment"
                    className="sr-only"
                    onChange={handleAttachmentUpload}
                  />
                </label>
              )}
            </div>

            <div className="actions flex gap-4">
              <button className="w-full rounded border border-blue-700 bg-blue-700 px-4 py-1  text-white transition-all hover:border-blue-800 hover:bg-blue-800 sm:px-8 sm:text-base">
                {buttonLoader ? <LoadingSpinner /> : "Publish"}
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
              <th className="min-w-[200px] px-4 py-2">Date</th>
              <th className="w-full px-4 py-2">Title</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allNoticeData
              .slice()
              .reverse()
              .map((notice, idx) => (
                <tr
                  className={idx === allNoticeData.length - 1 ? "" : "border-b"}
                  key={notice.noticeId}
                >
                  <td className="px-4 py-3.5">
                    {notice.updatedAt?.split("T")[0]}
                  </td>
                  <td className="px-4 py-3.5">{notice.title}</td>
                  <td className="flex gap-4 px-4 py-3.5">
                    <EditNotice
                      notice={notice}
                      setAllNoticeData={setAllNoticeData}
                    />
                    <button
                      disabled={deleteLoaders[notice.noticeId]}
                      onClick={() => handleNoticeDelete(notice.noticeId)}
                      className={`delete-notice flex cursor-pointer items-center gap-1.5 rounded-full border py-0.5 px-2 transition-all hover:border-red-600 hover:bg-red-600 hover:text-white ${
                        deleteLoaders[notice.noticeId]
                          ? "cursor-not-allowed border-red-600 bg-red-600 text-white"
                          : "border-gray-400 text-gray-500"
                      }`}
                    >
                      <TrashIcon className="h-5 w-5" />
                      <span className="text-sm">
                        {deleteLoaders[notice.noticeId] ? "Deleting" : "Delete"}
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {allNoticeData.length === 0 && (
          <div className="px-3.5 pt-3 text-center">There are no notices.</div>
        )}
      </div>
    </div>
  );
}

function EditNotice({ notice, setAllNoticeData }) {
  const [isEditPannelOpen, setIsEditPannelOpen] = useState(false);
  const [noticeBody, setNoticeBody] = useState({
    title: notice.title,
    description: notice.description,
  });
  const [noticeAttachment, setNoticeAttachment] = useState(
    notice.attachments[0]
  );
  const [buttonLoader, setButtonLoader] = useState(false);
  const attachmentsToBeRemoved = [];

  const handleNoticeBodyInputs = (event) => {
    setNoticeBody((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleAttachmentUpload = (event) => {
    const attachment = event.target.files[0];
    setNoticeAttachment(attachment);
  };

  const getAllNotices = async () => {
    try {
      const res = await axios.get(URL_GET_ALL_NOTICES, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setAllNoticeData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAttachmentDelete = (attachmentId) => {
    attachmentsToBeRemoved.push(attachmentId);
    setNoticeAttachment(null);
    setNoticeBody({
      ...noticeBody,
      attachmentsToBeRemoved: [{ attachmentId: attachmentsToBeRemoved[0] }],
    });
  };

  const handleSubmitUpdateNotice = async (event) => {
    event.preventDefault();
    setButtonLoader(true);
    try {
      const decryptedAccessToken = getDecryptedAccessToken();
      const _noticeId = notice.noticeId;

      const noticeFormData = new FormData();
      noticeFormData.append("attachments", noticeAttachment);
      noticeFormData.append("body", JSON.stringify(noticeBody));

      const res = await axios.put(URL_PUT_UPDATE_NOTICE, noticeFormData, {
        params: {
          noticeId: _noticeId,
        },
        headers: {
          "Content-Type": "multipart/form-data",
          token: `Bearer ${decryptedAccessToken}`,
        },
      });
      getAllNotices();
      setButtonLoader(false);
      setIsEditPannelOpen(false);
    } catch (error) {
      setButtonLoader(false);
      console.log(error);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsEditPannelOpen(true)}
        className="flex items-center gap-1.5 rounded-full border border-blue-600 px-3 py-0.5 text-sm text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
      >
        <PencilIcon className="h-3 w-3" />
        Edit
      </button>
      <RightPannel
        isOpen={isEditPannelOpen}
        onClose={() => setIsEditPannelOpen(false)}
      >
        <div className="new-notice flex h-full flex-col">
          <div className="new-notice__header flex justify-between">
            <span className="text-lg font-medium sm:text-xl">
              Update Notice
            </span>
            <XMarkIcon
              onClick={() => setIsEditPannelOpen(false)}
              className="h-5 w-5 cursor-pointer stroke-current stroke-1 text-gray-400 transition-all hover:stroke-2 hover:text-gray-600"
            />
          </div>

          <form
            onSubmit={handleSubmitUpdateNotice}
            className="new-notice__form mt-6 flex flex-1 flex-col justify-between space-y-3"
          >
            <div className="noticeDate">
              <div className="flex justify-between text-sm font-medium">
                <span>Dated</span>
                <span className="text-blue-600">
                  {notice.updatedAt.split("T")[0]}
                </span>
              </div>
            </div>

            <div className="title">
              <label htmlFor="title" className="text-sm font-medium">
                Title
              </label>
              <input
                required
                value={noticeBody.title}
                onChange={handleNoticeBodyInputs}
                placeholder="Title of the notice"
                type="text"
                id="title"
                name="title"
                className="mt-2 w-full rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
              />
            </div>

            <div className="description flex-1 pb-8">
              <label htmlFor="description" className="text-sm font-medium">
                Short description
              </label>
              <textarea
                required
                value={noticeBody.description}
                onChange={handleNoticeBodyInputs}
                placeholder="Body of the notice"
                name="description"
                id="description"
                className="mt-2 h-full w-full resize-none rounded border border-gray-300 px-3 py-1.5 outline-none transition-all placeholder:text-gray-300 focus:border-gray-800"
              ></textarea>
            </div>
            <div className="noticeAttachment">
              <span className="text-sm font-medium">Update attachment</span>
              {noticeAttachment ? (
                <SingleAttachment
                  attachmentId={noticeAttachment.attachmentId}
                  fileName={noticeAttachment.attachmentTitle}
                  handleAttachmentDelete={handleAttachmentDelete}
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
                    required
                    type="file"
                    accept=".pdf, .png, .jpg, .jpeg"
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
                {buttonLoader ? <LoadingSpinner /> : "Update"}
              </button>

              <button
                // onClick={handleCancel}
                className="w-full rounded border border-gray-300 bg-white px-4 py-1 text-gray-600 transition-all hover:bg-gray-100 sm:px-8 sm:text-base sm:font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </RightPannel>
    </>
  );
}

export default PublicNotices;
