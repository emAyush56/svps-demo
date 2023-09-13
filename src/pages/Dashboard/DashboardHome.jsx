import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import axios from "../../_api/axios";

const URL_GET_ALL_NOTICES = "/notice/find";

function DashboardHome() {
  const [totalNotices, setTotalNotices] = useState([]);
  const [dashboardLoader, setDashboardLoader] = useState(false);

  const getAllNotices = async () => {
    setDashboardLoader(true);
    try {
      const res = await axios.get(URL_GET_ALL_NOTICES, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTotalNotices(res.data);
      setDashboardLoader(false);
    } catch (error) {
      setDashboardLoader(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotices();
  }, []);

  if (dashboardLoader) {
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
    <div className="dashboard-wrapper">
      <div className="header">
        <h2 className="text-lg font-medium sm:text-xl">Hello Admin!</h2>
      </div>
      <div className="body mt-6">
        <div className="stats__total-notices w-full space-y-1.5 rounded-lg border bg-white py-6 px-8 sm:w-[420px]">
          <div className="stats__title text-sm text-gray-500">
            Total Notices
          </div>
          <div className="stats__data text-2xl font-bold">
            {totalNotices?.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
