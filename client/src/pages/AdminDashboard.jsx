import { useContext, useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { MdDesignServices, MdPermContactCalendar } from "react-icons/md";
import { AuthContext } from "../store/auth-context";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);

  const { authorizationToken, serviceData } = useContext(AuthContext);
  const fetchAllUsers = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllContacts = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
    getAllContacts();
  }, []);
  return (
    <>
      <div className="dashboard">
        <div className="container">
          <h3>Dashboard</h3>
          <div className="user-info">
            <div className="row g-5">
              <div className="col-lg-4">
                <div className="info-card ">
                  <div className="icon">
                    <FaUsers color="#d8a854" />
                  </div>
                  <div className="">
                    <div className="number">{users.length}</div>
                    <div className="desc">Total users</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info-card ">
                  <div className="icon">
                    <MdPermContactCalendar color="#d8a854" />
                  </div>
                  <div className="">
                    <div className="number">{contacts.length}</div>
                    <div className="desc">Total Contacts</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info-card ">
                  <div className="icon">
                    <MdDesignServices color="#d8a854" />
                  </div>
                  <div className="">
                    <div className="number">{serviceData.length}</div>
                    <div className="desc">Total Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <SkeletonLoader /> */}
      </div>
    </>
  );
}
