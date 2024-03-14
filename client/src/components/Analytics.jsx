import React from "react";
import "./Analytics.css";

export default function Analytics() {
  return (
    <>
      <div className="analytics">
        <div className="row gy-5">
          {/* <div className="col-12 col-sm-6 col-lg-3">
            <div className="analytic-box">
              <div className="num">50+</div>
              <div className="desc">Registered Companies</div>
            </div>
          </div> */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="analytic-box">
              <div className="num">30+</div>
              <div className="desc">Projects Completed</div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="analytic-box">
              <div className="num">10+</div>
              <div className="desc">Happy Clients</div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="analytic-box">
              <div className="num">24/7</div>
              <div className="desc">Services</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
