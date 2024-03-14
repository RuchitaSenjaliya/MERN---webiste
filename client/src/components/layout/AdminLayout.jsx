import { NavLink, Navigate, Outlet } from "react-router-dom";
import "./AdminLayout.css";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import { FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";

export default function AdminLayout() {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <h1 className="text-center my-5 text-white">Loading...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <div className="admin">
      <div className="sidebar">
        <div className="logo-brand">
          <a href="/" className="hide-sidebar-link">
            <span>Code</span>With<span>Ruchi</span>
          </a>
          <a href="/" className="sm-logo">
            <span>C</span>W<span>R</span>
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/admin"
                end
                className={({ isActive }) => (isActive ? "text-yellow" : "")}>
                <MdDashboard />
                <span className="ms-2 hide-sidebar-link">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) => (isActive ? "text-yellow" : "")}>
                <FaUsers />
                <span className="ms-2 hide-sidebar-link">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/contacts"
                className={({ isActive }) => (isActive ? "text-yellow" : "")}>
                <BiSolidContact />
                <span className="ms-2 hide-sidebar-link">Contacts</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/services"
                className={({ isActive }) => (isActive ? "text-yellow" : "")}>
                <MdDesignServices />
                <span className="ms-2 hide-sidebar-link">Services</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
