import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignInComponent() {
  const [show, setshow] = useState(false);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  const PopupNotify = () => toast.success("Successfully signed IN");
  // const SignInNotify = () => toast.success("Signed In succesfully");

  return (
    <div>
      <Container>
        <div>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <button
                style={{ color: "white" }}
                onClick={handleShow}
                type="button"
                className="btn btn-outline-primary "
              >
                SignIn
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>SignIn</Modal.Header>
                <Modal.Body>
                  <p>
                    <div>
                      <button
                        className="btn btn-outline-primary"
                        onClick={PopupNotify}
                      >
                        SignIn
                      </button>
                      <ToastContainer />
                    </div>
                  </p>
                </Modal.Body>
              </Modal>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
export default SignInComponent;
