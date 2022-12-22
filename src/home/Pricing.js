function Pricing() {
  const cardStyle1 = {
    width: 9 + 9 + "rem",
  };
  return (
    <div
      className="row"
      style={{ justifyContent: "space-evenly", marginTop: "20px" }}
    >
      <h3> Pricing </h3>
      <div className="card" style={cardStyle1}>
        <div className="card-body">
          <h5 className="card-title"> Pricing 1 </h5>
          <p className="card-text">
            When a random word or a random sentence isn't quite enough, the next
            logical step is to find a random paragraph. We created the Random
            Paragraph Generator with you in min.
          </p>
        </div>
      </div>
      <div className="card" style={cardStyle1}>
        <div className="card-body">
          <h5 className="card-title"> Pricing 2 </h5>
          <p className="card-text">
            When a random word or a random sentence isn't quite enough, the next
            logical step is to find a random paragraph. We created the Random
            Paragraph Generator with you in min.
          </p>
        </div>
      </div>
      <div className="card" style={cardStyle1}>
        <div className="card-body">
          <h5 className="card-title"> Pricing 3 </h5>
          <p className="card-text">
            When a random word or a random sentence isn't quite enough, the next
            logical step is to find a random paragraph. We created the Random
            Paragraph Generator with you in min.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
