import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

function BackDrop(props) {
  return <div className={classes.backdrop} onClick={props.onCloseModal}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlay");

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onCloseModal={props.onCloseModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
