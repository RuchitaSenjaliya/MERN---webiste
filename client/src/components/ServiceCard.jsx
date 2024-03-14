/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function ServiceCard({
  id,
  provider,
  price,
  service,
  description,
  _id,
  onDelete,
}) {
  return (
    <div className="service-card shadow">
      <img
        src={`${
          id
            ? `https://picsum.photos/id/${id * 5}/500/300`
            : `https://picsum.photos/id/50/500/300`
        }`}
        alt=""
        srcSet=""
        className="img-fluid"
      />
      {/* {modelOpen && (
      <ConfirmationModel
        onClose={closeModel}
        onClick={closeModel}
        onProceed={() => deleteServiceData(item._id)}
      />
    )} */}
      <div className="card-body">
        <div className="service-info">
          <div className="info">
            <div className="provider">{provider}</div>
            <div className="price">${price}/-</div>
          </div>
          <div className="title">{service}</div>
          <div className="desc">{description.trim().slice(0, 70) + "..."}</div>
        </div>
        <div className="btn-grp">
          <Link to={`/admin/services/${_id}`} className="edit-btn">
            Edit
          </Link>
          <button
            type="button"
            className="delete-btn"
            onClick={onDelete}
            // onClick={() => {
            //   deleteServiceData(item._id);
            // }}
          >
            {/* onClick={showModel}> */}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
