import "./SkeletonLoader.css";

export default function SkeletonLoader() {
  return (
    <div className="container">
      <div className="skeleton-loader">
        <div className="row">
          <div className="col-lg-4">
            <div className="skeleton-card">
              <div className="img"></div>
              <div className="provider"></div>
              <div className="price"></div>
              <div className="title"></div>
              <div className="desc"></div>
              <button></button>
              <button></button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="skeleton-card">
              <div className="img"></div>
              <div className="provider"></div>
              <div className="price"></div>
              <div className="title"></div>
              <div className="desc"></div>
              <button></button>
              <button></button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="skeleton-card">
              <div className="img"></div>
              <div className="provider"></div>
              <div className="price"></div>
              <div className="title"></div>
              <div className="desc"></div>
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
