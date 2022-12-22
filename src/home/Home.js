import { Container } from "react-bootstrap";
import ButtonComponent from "../button";
import Pricing from "./Pricing";
import About from "./About";
function HomeComponent() {
  return (
    <div>
      <div>
        <About />
      </div>
      <div>
        <ButtonComponent />
      </div>
      <div>
        <p>
          <Pricing />
        </p>
      </div>
    </div>
  );
}

export default HomeComponent;
