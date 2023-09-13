import React, { useEffect } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import NotFound from "../../components/NotFound";
import PublicNotices from "./PublicNotices";

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "SVPS Dashboard";
    if (!localStorage.getItem("accessToken"))
      navigate("/login", { replace: true });
  }, []);

  return (
    <div className="flex text-gray-800">
      <aside className="max-w-[64px] xl:w-full xl:max-w-[280px]">
        <Sidebar />
      </aside>
      <div className="flex-1 overflow-auto py-6 px-4 sm:px-20">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route exact path="/public-notices" element={<PublicNotices />} />
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
