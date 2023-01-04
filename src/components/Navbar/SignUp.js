import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUpComponent() {
  const [show, setshow] = useState(false);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  //   const PopupNotify = () => toast.success("SignUp success");
  const SignInNotify = () =>
    toast.success("succesfully Signed up Welcome {Name}");

  return (
    <div>
      <Container>
        <li className="nav-item">
          <button
            style={{ color: "white" }}
            onClick={handleShow}
            type="button"
            className="btn btn-outline-primary "
          >
            SignUp
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>SignUp</Modal.Header>
            <Modal.Body>
              <p>
                <div>
                  <button
                    className="btn btn-outline-primary"
                    onClick={SignInNotify}
                  >
                    SignUP
                  </button>
                  <ToastContainer />
                </div>
              </p>
            </Modal.Body>
          </Modal>
        </li>
      </Container>
    </div>
  );
}

export default SignUpComponent;
