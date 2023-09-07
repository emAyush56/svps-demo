import { PaperClipIcon, TrashIcon } from "@heroicons/react/24/solid";

function SingleAttachment({ fileName, setNewNotice }) {
  const handleAttachmentChange = () => {
    setNewNotice((prev) => {
      return { ...prev, noticeAttachment: null };
    });
  };
  return (
    <div className="mt-2 flex items-center justify-between rounded bg-gray-50 p-3">
      <div className="icon-filename flex items-center gap-3">
        <PaperClipIcon className="h-5 w-5 text-gray-700" />
        <span>
          {fileName?.length > 21 ? fileName.slice(0, 21) + "..." : fileName}
        </span>
      </div>
      <TrashIcon
        onClick={handleAttachmentChange}
        className="h-5 w-5 cursor-pointer text-gray-500 transition-all hover:scale-110 hover:text-red-500"
      />
    </div>
  );
}

export default SingleAttachment;
