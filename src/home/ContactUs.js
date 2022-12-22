// import Popup from "reactjs-popup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const cardStyle1 = {
    width: 15 + 15 + "rem",
  };

  const PopupNotify = () => toast.success("Succesfully sent");

  return (
    <>
      <div className="card" style={cardStyle1}>
        <div className="card-body">
          <h5 className="card-title"> Contact Us </h5>
          <p className="card-text"></p>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">
              {" "}
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEnail"
                placeholder="Email"
              />
            </div>
            <div className="form-group row">
              <label for="Subject" className="col-sm-5 col-form-label">
                Subject
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  id="Subject"
                  placeholder="Subject"
                />
              </div>
              <form className="was-validated">
                <div className="mb-3">
                  <label for="validationTextarea"> Textarea</label>
                  <textarea
                    className="form-control is-invalid"
                    id="validationTextarea"
                    placeholder="Enter text"
                    required
                  ></textarea>
                  <div className="invalid-feedback">Please Enter text</div>
                </div>
              </form>
              {/* <button type="button" className="btn btn-outline-primary">
                Send
              </button> */}
              {/* <Popup trigger={<button> Send </button>} position="right center">
                <div>Success</div>
              </Popup> */}
              <div>
                <button
                  className="btn btn-outline-primary"
                  onClick={PopupNotify}
                >
                  Send
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
