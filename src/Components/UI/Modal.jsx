import React from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";
const ModalOverlay = ({ errorMessage, setErrorMsg }) => {
  return (
    <div className={`${classes.card_wrappper}`}>
      <div className="Error_Message text-center">{errorMessage.errorTitle}</div>
      <div className="Error_Message text-center">{errorMessage.errorMsg}</div>
      <button
        className="btn_yes border-2 border-slate-900 rounded bg-white text-black pl-3 pr-3"
        onClick={() => setErrorMsg()}
      >
        Yes
      </button>
      <button className="btn_no border-2 border-slate-900 rounded bg-white text-black pl-3 pr-3">
        NO
      </button>
    </div>
  );
};

const Modal = ({ errorMessage, setErrorMsg }) => {
  return (
    <>
      {ReactDom.createPortal(
        <ModalOverlay errorMessage={errorMessage} setErrorMsg={setErrorMsg} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
