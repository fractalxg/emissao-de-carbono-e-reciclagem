import "./Footer.css";
import { scrollToSection, scrollToTop } from "../utils/Scroll";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p className="footer-content-title">
          Sustentabilidade<span>.</span>
        </p>
        <div className="footer-content-options">
          <p onClick={() => scrollToSection("sustainableEnergy")}>
            Energia Sustentável<span>.</span>
          </p>
          <p onClick={() => scrollToSection("carbonEmission")}>
            Emissão de Carbono<span>.</span>
          </p>
          <div className="footer-content-last-option">
            <p onClick={() => scrollToSection("recycle")}>
              Reciclagem<span>.</span>
            </p>
            <p className="back-to-top" onClick={() => scrollToTop()}>
              Voltar ao Topo<span>.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
