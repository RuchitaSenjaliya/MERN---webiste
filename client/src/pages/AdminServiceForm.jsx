import { useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";
// import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export default function AdminServiceForm() {
  const { authorizationToken, serviceData } = useContext(AuthContext);
  const navigate = useNavigate();
  const nextId =
    serviceData.length > 0
      ? Math.max(...serviceData.map((service) => service.id)) + 1
      : 1;
  const [formData, setFormData] = useState({
    uniqueId: nextId,
    service: "",
    description: "",
    price: "",
    provider: "",
    img: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "file") {
      const image = e.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(image);

      reader.addEventListener("load", () => {
        setFormData({
          ...formData,
          [name]: reader.result,
        });
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
        uniqueId: nextId,
      });
    }
    console.log(formData);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/services/service-form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        const errorMessage = await response.text();
        console.error("Server returned error:", errorMessage);
        // Throw an error or handle it appropriately
      }
      console.log(response);
      if (response.ok) {
        const nextId =
          serviceData.length > 0
            ? Math.max(...serviceData.map((service) => service.id)) + 1
            : 1;
        setFormData({
          service: "",
          description: "",
          price: "",
          provider: "",
          uniqueId: nextId,
        });
      }
      navigate("/admin/services");
    } catch (error) {
      console.log("Add service form error: ", error);
    }
  };
  return (
    <>
      <div className="admin-service-form w-50">
        <div className="container">
          <h2>Add New Service</h2>
          <form action="" className="mt-5" onSubmit={submitHandler}>
            <label htmlFor="service">Service Name</label>
            <input
              type="text"
              name="service"
              id="service"
              onChange={inputChangeHandler}
              value={formData.service}
            />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows="5"
              onChange={inputChangeHandler}
              value={formData.description}></textarea>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              onChange={inputChangeHandler}
              value={formData.price}
            />
            <label htmlFor="provider">Provider</label>
            <input
              type="text"
              name="provider"
              id="provider"
              onChange={inputChangeHandler}
              value={formData.provider}
            />
            {/* <input type="file" name="image" id="image" /> */}
            <button className="btn-primary">Add Service</button>
          </form>
        </div>
      </div>
    </>
  );
}
