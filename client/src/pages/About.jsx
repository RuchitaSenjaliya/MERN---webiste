import { useContext } from "react";
import about from "../assets/about.png";
import { AuthContext } from "../store/auth-context";
import Analytics from "../components/Analytics";

export default function About() {
  const { user } = useContext(AuthContext);

  return (
    <section>
      <main>
        <div className="container">
          <div className="about">
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-0">
                <div className="left mt-3 mt-lg-0">
                  <div className="sub-title">
                    Welcome{" "}
                    {user
                      ? user?.username.split("")[0].toUpperCase() +
                        user?.username.slice(1) +
                        ", "
                      : ""}
                    to our website
                  </div>
                  <div className="title">Why choose us?</div>
                  <div className="para">
                    Expertise: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Maiores repellat earum debitis ullam
                    accusantium ipsum molestias, sit quas laudantium
                    exercitationem?
                  </div>
                  <div className="para">
                    Expertise: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Maiores repellat earum debitis ullam
                    accusantium ipsum molestias, sit quas laudantium
                    exercitationem?
                  </div>
                  <div className="para">
                    Expertise: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Maiores repellat earum debitis ullam
                    accusantium ipsum molestias, sit quas laudantium
                    exercitationem?
                  </div>
                  <div className="para">
                    Expertise: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Maiores repellat earum debitis ullam
                    accusantium ipsum molestias, sit quas laudantium
                    exercitationem?
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-0 order-lg-1">
                <div className="right">
                  <img src={about} alt="" srcSet="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <Analytics />
        </div>
      </main>
    </section>
  );
}
