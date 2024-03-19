import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../store/auth-context";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  // const [userData, setUserData] = useState({});
  const { isLoggedIn, user, token } = useContext(AuthContext);

  // useEffect(() => {
  //   setUserData(user);
  // }, [user]);
  console.log(user);

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand logo-brand" href="#">
            <span>Code</span>With<span>Ruchi</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              <IoMenu />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }>
                  Contact
                </NavLink>
              </li>

              {token && user?.isAdmin && (
                <li>
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      isActive ? "link active" : "link"
                    }>
                    Admin
                  </NavLink>
                </li>
              )}
              {isLoggedIn ? (
                <li>
                  <NavLink
                    to="/logout"
                    className={({ isActive }) =>
                      isActive ? "link active" : "link"
                    }>
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "link active" : "link"
                      }>
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/signup"
                      className={({ isActive }) =>
                        isActive ? "link active" : "link"
                      }>
                      Signup
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
