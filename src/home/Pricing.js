/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Pricing.css";

function Pricing() {
  return (
    <div
      style={{
        backgroundColor: "#161f6d",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <h3 style={{ color: "white" }}> Pricing </h3>
      <div className="row">
        <div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h3 className="tText"> Pricing 1 </h3>
                <p className="tText">When a random word or a random</p>
                <div>
                  <a
                    href="#"
                    className="inside-page__btn inside-page__btn--camping"
                  >
                    View deals
                  </a>
                </div>
              </div>
            </div>
            <div
              className="face face2"
              style={{
                background:
                  "linear-gradient(40deg,black 0%, blue 45%, black 100%)",
                borderRadius: "15px",
              }}
            >
              <h2>Pricing</h2>
            </div>
          </div>
        </div>
        {/* //card2 */}
        <div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h3 className="tText"> Pricing 2</h3>
                <p className="tText">
                  When a random word or a random sentence isn't quite enough,
                  the next logical step is to find a random paragraph. We
                  created the Random Paragraph Generator with you in min.
                </p>
              </div>
            </div>
            <div
              className="face face2"
              style={{
                background:
                  "linear-gradient(40deg,black 0%, blue 45%, black 100%)",
                borderRadius: "15px",
              }}
            >
              <h2>Pricing</h2>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h3 className="tText"> Pricing 3 </h3>
                <p className="tText">
                  When a random word or a random sentence isn't quite enough,
                  the next logical step is to find a random paragraph. We
                  created the Random Paragraph Generator with you in min.
                </p>
              </div>
            </div>
            <div
              className="face face2"
              style={{
                background:
                  "linear-gradient(40deg,black 0%, blue 45%, black 100%)",
                borderRadius: "15px",
              }}
            >
              <h2>Pricing</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
