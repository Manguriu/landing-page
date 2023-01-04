// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import About from "./home/About";

function ButtonComponent() {
  const [show, setshow] = useState(false);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  // const PopupNotify = () => toast("Welcome {Name}");

  return (
    <>
      <Button
        style={{
          marginTop: "-70px",
          right: "0",
          position: "absolute",
          display: "flex",
          justifyContent: "right",
          marginRight: "20px",
        }}
        className="btn btn-info"
        onClick={handleShow}
      >
        About
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p> {<About />}</p>
        </Modal.Body>
      </Modal>
      {/* <div>
        <button className="btn btn-primary" onClick={PopupNotify}>
          Getting Started ->
        </button>
        <ToastContainer />
      </div> */}
    </>
  );
}
export default ButtonComponent;
