import { Link } from "react-router-dom";
import Analytics from "../components/Analytics";
// import ConfirmationModel from "../components/UI/ConfirmationModel";

export default function Home() {
  return (
    <section>
      <main>
        {/* <ConfirmationModel /> */}
        <div className="container">
          <div className="home">
            <div className="row">
              <div className="col-12 col-lg-6 mx-auto order-1 order-lg-0">
                <div className="left">
                  <div className="sub-title">
                    We are the worlds best IT Company
                  </div>
                  <div className="title">
                    Welcome to <span>CodeWithRuchi</span>
                  </div>
                  <div className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sed, dolorem modi ratione quae autem, sint amet, quibusdam
                    totam ipsum perferendis cupiditate? Nemo minima illum rem
                    commodi, quisquam id earum eligendi.
                  </div>
                  <div className="btn-grp">
                    <Link to="/contact">
                      <button className="btn-primary">Connect Now</button>
                    </Link>
                    <Link to="/about">
                      <button className="btn-outline">Learn More</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="right">
                  <img
                    src="https://png.pngtree.com/png-vector/20220615/ourmid/pngtree-content-writer-or-journalist-background-vector-illustration-for-copy-writing-png-image_5085570.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Analytics />
        </div>
        <div className="container">
          <div className="help">
            <div className="row">
              <div className="col-12 col-lg-6 mx-auto">
                <div className="left">
                  <img
                    src="https://png.pngtree.com/png-vector/20220615/ourmid/pngtree-content-writer-or-journalist-background-vector-illustration-for-copy-writing-png-image_5085570.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="right">
                  <div className="sub-title">We are here to help you</div>
                  <div className="title">Get Started Today</div>
                  <div className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sed, dolorem modi ratione quae autem, sint amet, quibusdam
                    totam ipsum perferendis cupiditate? Nemo minima illum rem
                    commodi, quisquam id earum eligendi.
                  </div>
                  <div className="btn-grp">
                    <Link to="/contact">
                      <button className="btn-primary">Connect Now</button>
                    </Link>
                    <button className="btn-outline">Learn More</button>
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
