import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/auth-context";
import { toast } from "react-toastify";

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const { storeTokenInLS } = useContext(AuthContext);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      console.log(res_data);
      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success("Register successfull");
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/");
      } else {
        toast.error(res_data.extraDetails);
        alert("Invalid input");
      }
    } catch (error) {
      console.log("Error occur");
    }
  };
  return (
    <section className="">
      <main>
        <div className="container">
          <div className="signup">
            <div className="signup-form">
              <h1>Registration Form</h1>
              <form action="" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={handleInput}
                  value={user.username}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleInput}
                  value={user.email}
                />
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={handleInput}
                  value={user.phone}
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleInput}
                  value={user.password}
                />
                <button className="btn-primary">Register Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
