import { useState } from "react";
import RightPannel from "../RightPannel";

function RightPannelEdit({
  singleNotice,
  isEditPannelOpen,
  setIsEditPannelOpen,
}) {
  const [noticeBody, setNoticeBody] = useState({
    title: singleNotice.title,
    description: singleNotice.description,
  });

  return (
    <RightPannel
      isPannelOpen={isEditPannelOpen}
      pannelToggler={() => setIsEditPannelOpen(false)}
    >
      <input type="text" value={noticeBody.title} />
      <textarea value={noticeBody.description}></textarea>
    </RightPannel>
  );
}

export default RightPannelEdit;
