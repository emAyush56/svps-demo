import React, { useEffect } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Notice from "../../components/Dashboard/Notice";
import { Route, Routes } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import NotFound from "../../components/NotFound";

function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return (
    <div className="flex text-gray-800">
      <aside className="max-w-[64px] xl:w-full xl:max-w-[280px]">
        <Sidebar />
      </aside>
      <div className="flex-1 overflow-auto py-6 px-4 sm:px-20">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route exact path="/new-notice" element={<Notice />} />
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
