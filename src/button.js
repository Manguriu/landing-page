import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import About from "./home/About";

function ButtonComponent() {
  const [show, setshow] = useState(false);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);
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
    </>
  );
}
export default ButtonComponent;
