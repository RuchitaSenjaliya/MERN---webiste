import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import SkeletonLoader from "../components/SkeletonLoader";
// `https://picsum.photos/id/${post.id * 2}/500/300`
// https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg&ga=GA1.1.1497508824.1702978474&semt=ais
export default function Services() {
  const { serviceData, isLoading } = useContext(AuthContext);
  return (
    <section>
      <main>
        <div className="container">
          <div className="services">
            <div className="main-title">Services</div>
            {isLoading && <SkeletonLoader />}
            <div className="row">
              {serviceData.map((item) => {
                return (
                  <div className="col-12 col-sm-6 col-lg-4" key={item._id}>
                    <div className="service-card shadow">
                      <img
                        src={`${
                          item.id
                            ? `https://picsum.photos/id/${item.id * 5}/500/300`
                            : `https://picsum.photos/id/50/500/300`
                        }`}
                        alt=""
                        srcSet=""
                      />
                      <div className="card-body">
                        <div className="info">
                          <div className="provider">{item.provider}</div>
                          <div className="price">${item.price}/-</div>
                        </div>
                        <div className="title">{item.service}</div>
                        <div className="desc">{item.description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
