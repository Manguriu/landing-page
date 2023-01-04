function About() {
  return (
    <div
      style={{
        //marginTop: "10px",
        width: "100% !important",
        height: "200px",
        padding: "5px",
        margin: " 60px 10px ",
        backgroundColor: "#161f6d",
        borderRadius: "10px",
      }}
    >
      <div
        className="row"
        style={{ backgroundColor: "rgb(3, 1, 78);", color: "white" }}
      >
        <h3 style={{ fontSize: "80px" }}> About </h3>
        {/* <div className="hcard"> */}
        <div className="card-body">
          <p className="card-text">
            When a random word or a random sentence isn't quite enough, the next
            logical step is to find a random paragraph. We created the Random
            Paragraph Generator with you in min.
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default About;
