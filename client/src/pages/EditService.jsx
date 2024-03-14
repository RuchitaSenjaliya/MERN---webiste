import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../store/auth-context";
import { toast } from "react-toastify";

export default function EditService() {
  const [data, setData] = useState({
    service: "",
    description: "",
    price: "",
    provider: "",
  });
  const params = useParams();
  console.log(params.id);
  const { authorizationToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const getSingleServiceData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/services/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const serviceData = await response.json();
      console.log(serviceData);
      setData(serviceData);
    } catch (error) {
      console.log("Edit service form error: ", error.message);
    }
  };

  useEffect(() => {
    getSingleServiceData();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/services/edit/${params.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: authorizationToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("Updated successfully");
        setData({ service: "", description: "", price: "", provider: "" });
        navigate("/admin/services");
      } else {
        toast.error("Update failed");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="edit-service-section w-50">
      <div className="container">
        <h3>Update Service Data</h3>
        <div className="update-user">
          <form action="" className="mt-5" onSubmit={submitHandler}>
            <label htmlFor="service">Service Name</label>
            <input
              type="text"
              name="service"
              id="service"
              onChange={inputChangeHandler}
              value={data.service}
            />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows="4"
              onChange={inputChangeHandler}
              value={data.description}></textarea>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              onChange={inputChangeHandler}
              value={data.price}
            />
            <label htmlFor="provider">Provider</label>
            <input
              type="text"
              name="provider"
              id="provider"
              onChange={inputChangeHandler}
              value={data.provider}
            />
            <button className="btn-primary w-100">Update</button>
          </form>
        </div>
      </div>
    </section>
  );
}
