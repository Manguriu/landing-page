// import ButtonComponent from "../button";
import Pricing from "./Pricing";
import About from "./About";
// import "./home.css";
function HomeComponent() {
  return (
    <div className="Hhome">
      <div>
        <About />
      </div>
      {/* <div>
        <ButtonComponent />
      </div> */}
      <div>
        <p>
          <Pricing />
        </p>
      </div>
    </div>
  );
}

export default HomeComponent;
