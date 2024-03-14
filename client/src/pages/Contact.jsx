import { useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";

export default function Contact() {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [contactData, setContactData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setContactData({ username: user.username, email: user.email, message: "" });
    setUserData(false);
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });
      console.log(response);
      if (response.ok) {
        setContactData({ username: "", email: "", message: "" });
        alert("Message sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <main>
        <div className="container">
          <div className="contact">
            <div className="main-title">Contact Us</div>
            <div className="content my-5">
              <div className="row ">
                <div className="col-lg-6 order-1 order-lg-0">
                  <div className="left">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7727158889447!2d72.52221287514075!3d23.032115979167084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e853ad2b4b1a5%3A0x3bd22dbb02757b3!2sMansi%20circle%20%7C%20girls%20pg%20in%20Ahmedabad!5e0!3m2!1sen!2sin!4v1706099559633!5m2!1sen!2sin"
                      // width="600"
                      // height="450"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right mb-5 mb-lg-0">
                    <form action="" onSubmit={handleSubmit}>
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleInput}
                        value={contactData.username}
                      />
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleInput}
                        value={contactData.email}
                      />
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        rows="5"
                        onChange={handleInput}
                        value={contactData.message}></textarea>
                      <button className="btn-primary mt-0">Send</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
