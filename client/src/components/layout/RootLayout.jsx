import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="full-page">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
