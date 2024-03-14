/* eslint-disable react/prop-types */
import { Fragment } from "react";
import ReactDOM from "react-dom";

import "./ConfirmationModel.css";
const Backdrop = (props) => {
  return <div onClick={props.onClick} className="backdrop " />;
};

const ModalOverlay = ({ onClose, onProceed }) => {
  return (
    <div className={`overlay`}>
      <div className="content d-flex flex-column justify-content-between">
        <p className="text-black">Are you sure you want to delete?</p>
        <div className="d-flex gap-2 justify-content-end">
          <button className="btn btn-danger" onClick={onProceed}>
            Delete
          </button>
          <button className="btn btn-secondary rounded-lg" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

export default function ConfirmationModel({ onClick, onClose, onProceed }) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={onClick} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={onClose} onProceed={onProceed} />,
        portalElement
      )}
    </Fragment>
  );
}
