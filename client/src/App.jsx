import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RootLayout from "./components/layout/RootLayout";
import Logout from "./pages/Logout";
import AdminLayout from "./components/layout/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import EditUser from "./pages/EditUser";
import AdminDashboard from "./pages/AdminDashboard";
// import AdminServices from "./pages/AdminServices";
import { Suspense, lazy } from "react";
import AdminServiceForm from "./pages/AdminServiceForm";
import EditService from "./pages/EditService";
import SkeletonLoader from "./components/SkeletonLoader";

// const Services = lazy(() => import("./pages/Services"));
const AdminServices = lazy(() => import("./pages/AdminServices"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        path: "services",
        element: (
          // <Suspense fallback={<SkeletonLoader />}>
          <Services />
          // </Suspense>
        ),
      },
      { path: "logout", element: <Logout /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "users",
        element: <AdminUsers />,
      },
      {
        path: "users/:id",
        element: <EditUser />,
      },
      {
        path: "contacts",
        element: <AdminContacts />,
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<SkeletonLoader />}>
            <AdminServices />
          </Suspense>
        ),
      },
      {
        path: "services/service-form",
        element: <AdminServiceForm />,
      },
      {
        path: "services/:id",
        element: <EditService />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
