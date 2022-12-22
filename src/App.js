import NavbarComponent from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./home/About";
import Pricing from "./home/Pricing";
import Home from "./home/Home";
import FooterComponent from "./footer/Footer";
import "./main.css";

function App() {
  return (
    <div className="Page-Page">
      <div className="wrap-wrap">
        <NavbarComponent />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route Path="Pricing" element={<Pricing />} />
          </Routes>
        </BrowserRouter>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
