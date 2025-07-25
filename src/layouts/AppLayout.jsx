// src/layouts/AppLayout.jsx
import { Outlet } from "react-router-dom";
import SideNavbar from "../components/Sidebar";
import TopNavbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <div className="flex h-screen">
      <SideNavbar />
      <div className="flex-1 flex flex-col">
        <TopNavbar />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
