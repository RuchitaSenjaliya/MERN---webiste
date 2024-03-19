import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/auth-context";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditUser() {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    isAdmin: "",
  });
  const params = useParams();
  const { authorizationToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const getSingleUserData = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      setData(data);
      console.log(data.isAdmin.toString());
    } catch (error) {
      console.log("edit user error ", error);
    }
  }, [authorizationToken, params.id]);

  useEffect(() => {
    getSingleUserData();
  }, [getSingleUserData]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const updateUserHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("Updated successfully");
        navigate("/admin/users");
      } else {
        toast.error("Update failed");
      }
      console.log("edit user response", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="edit-user-section">
      <div className="container">
        <h3>Update User Data</h3>
        <div className="update-user">
          <form action="" onSubmit={updateUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleInput}
              value={data.username}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleInput}
              value={data.email}
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={handleInput}
              value={data.phone}
            />
            <label htmlFor="isAdmin">Is Admin ?</label>
            <select
              name="isAdmin"
              id="isAdmin"
              defaultValue={data.isAdmin}
              onChange={handleInput}
              value={data.isAdmin.toString()}>
              <option value="">Choose</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
            <button className="btn-primary w-100">Update</button>
          </form>
        </div>
      </div>
    </section>
  );
}
