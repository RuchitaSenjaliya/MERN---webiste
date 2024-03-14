import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/auth-context";
import { toast } from "react-toastify";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const { authorizationToken } = useContext(AuthContext);
  const getAllContactData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("contact", data);
      setContacts(data);
    } catch (error) {
      console.log("admin contact error: ", error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log("contacts after delete: ", data);
      if (response.ok) {
        getAllContactData();
        toast.success("Delete successfull");
      } else {
        toast.error("Delete Failed!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContactData();
  }, []);
  return (
    <section className="admin-contact-section">
      <div className="container">
        <h3>All Contact Data</h3>
        <div className="admin-contact table-responsive">
          {contacts.length === 0 && <p>No Contacts Found.</p>}
          <table className="table table-bordered table-hover table-striped ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {contact.username[0].toUpperCase() +
                        contact.username.slice(1)}
                    </td>
                    <td>{contact.email}</td>
                    <td>{contact.message}</td>
                    <td className="text-center">
                      <button
                        className="delete-btn"
                        onClick={() => deleteContact(contact._id)}>
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
  );
}
