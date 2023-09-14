import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import noticedata from "../noticedata.json";
import axios from "../_api/axios";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const URL_GET_ALL_NOTICES = "/notice/find";
const URL_POST_DELETE_NOTICE = "/notice/find";

function Notices() {
  const [allNotices, setAllNotices] = useState([]);
  const [noticeLoader, setNoticeLoader] = useState(true);
  const [noticeError, setNoticeError] = useState(false);

  const getAllNotices = async () => {
    setNoticeLoader(true);
    try {
      const res = await axios.get(URL_GET_ALL_NOTICES, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setAllNotices(res.data);
      setNoticeLoader(false);
    } catch (error) {
      setNoticeLoader(false);
      setNoticeError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotices();
  }, []);

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-10 pt-10 pb-20 lg:px-0 lg:pb-36">
      {noticeLoader ? (
        <div className="h-full">
          <LoadingSpinner
            colorLight="text-blue-600/20"
            colorDark="text-blue-primary"
            h="h-8"
            w="w-8"
          />
        </div>
      ) : noticeError ? (
        <div>Something went wrong. Unable to fetch notices.</div>
      ) : (
        <div className="all-notices w-full space-y-12">
          {allNotices
            .slice()
            .reverse()
            .map((notice) => (
              <div key={notice?.noticeId} className="notice">
                <div className="notice__date pb-3 font-semibold text-blue-primary">
                  Dated, {notice?.updatedAt.split("T")[0]}
                </div>
                <div className="notice__title-download flex items-center gap-4 pb-3">
                  <div className="notice__title w-11/12 text-2xl font-bold text-gray-800 ">
                    {notice?.title}
                  </div>
                  <a
                    href={notice?.attachments[0]?.attachmentUrl}
                    target="_blank"
                    className="notice__download"
                    title="Download Notice"
                  >
                    <ArrowDownTrayIcon className="h-7 w-7 cursor-pointer rounded-md p-1 transition-all hover:bg-gray-200" />
                  </a>
                </div>
                <div className="notice__body">{notice?.description}</div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Notices;
