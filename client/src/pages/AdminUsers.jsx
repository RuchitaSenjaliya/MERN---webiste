import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/auth-context";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useContext(AuthContext);

  const getAllUserData = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data);
      // console.log(data);
    } catch (error) {
      console.log("admin user error ", error);
    }
  }, [authorizationToken]);

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log("user after delete: ", data);

      if (response.ok) {
        getAllUserData();
        toast.success("Delete successfull");
      } else {
        toast.error("Delete Failed!!");
      }
    } catch (error) {
      console.log("admin user error ", error);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, [getAllUserData]);

  // console.log(users);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h3>All Users Data</h3>
          <div className="admin-users table-responsive">
            <table className="table table-bordered table-hover table-striped ">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Admin</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {user.username[0].toUpperCase() +
                          user.username.slice(1)}
                      </td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      {console.log(user.isAdmin)}
                      <td className="text-black">
                        {user.isAdmin.toString()[0].toUpperCase() +
                          user.isAdmin.toString().slice(1)}
                      </td>
                      <td>
                        <Link
                          to={`/admin/users/${user._id}`}
                          className="edit-btn">
                          Edit
                        </Link>
                        {/* <button className="edit-btn">Edit</button> */}
                      </td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => deleteUser(user._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
