import "./Header.css";
import ellipse from "../../images/ellipse-lg-04.png"
import { scrollToSection, scrollToTop } from "../utils/Scroll";


const Header = () => {
  return (
    <div className="header-container">
			<div className="header-logo">
				<img src={ellipse} onClick={() => scrollToTop()}/>
			</div>
      <div className="inner-header-container">
        <p onClick={() => scrollToSection("sustainableEnergy")}>Energia Sustentável<span>.</span></p>
        <p onClick={() => scrollToSection("carbonEmission")}>Emissão de Carbono<span>.</span></p>
        <p onClick={() => scrollToSection("recycle")}>Reciclagem<span>.</span></p>
      </div>
    </div>
  );
};

export default Header;
