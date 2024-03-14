import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/auth-context";
import { toast } from "react-toastify";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
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
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);
      const res_data = await response.json();
      console.log("response from server", res_data);

      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success("Login successfull");
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        console.log("Invalid Credential");
      }
    } catch (error) {
      console.log("Login error", error);
    }
  };
  return (
    <section className="login-bg">
      <main>
        <div className="container">
          <div className="login">
            <div className="login-form">
              <h1>Login Form</h1>
              <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleInput}
                  value={user.email}
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleInput}
                  value={user.password}
                />

                <button className="btn-primary">Login Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
