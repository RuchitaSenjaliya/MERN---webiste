import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/auth-context";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SkeletonLoader from "../components/SkeletonLoader";
import ServiceCard from "../components/ServiceCard";

export default function AdminServices() {
  const { authorizationToken } = useContext(AuthContext);
  const [adminServiceData, setAdminServiceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllServiceData = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/services`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log("contact", data);
      setAdminServiceData(data);
      // setIsLoading(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      console.log("admin contact error: ", error);
    }
  }, [authorizationToken]);

  const deleteServiceData = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/services/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log("service after delete: ", data);
      if (response.ok) {
        getAllServiceData();
        toast.success("Delete successfull");
      } else {
        toast.error("Delete Failed!!");
      }
    } catch (error) {
      console.error("delete service error ", error);
    }
  };

  useEffect(() => {
    getAllServiceData();
  }, [getAllServiceData]);

  return (
    <>
      <div className="admin-services">
        <div className="container">
          <div className="d-flex align-items-start justify-content-between">
            <h3>List of Services</h3>
            <Link to="/admin/services/service-form">
              <button className="btn-primary">Add Service +</button>
            </Link>
          </div>
          {isLoading ? (
            <SkeletonLoader />
          ) : (
            <div className="container">
              <div className="row">
                {adminServiceData.map((item) => (
                  <div className="col-12 col-sm-6 col-lg-4" key={item._id}>
                    <ServiceCard
                      id={item.id}
                      _id={item._id}
                      provider={item.provider}
                      service={item.service}
                      price={item.price}
                      description={item.description}
                      onDelete={() => {
                        deleteServiceData(item._id);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
