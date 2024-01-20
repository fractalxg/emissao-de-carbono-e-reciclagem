import "./Header.css";
import ellipse from "../../images/ellipse-lg-04.png"


const Header = () => {
  return (
    <div className="header-container">
			<div className="header-logo">
				<img src={ellipse}/>
			</div>
      <div className="inner-header-container">
        <p>Energia Sustentável<span>.</span></p>
        <p>Emissão de Carbono<span>.</span></p>
        <p>Reciclagem<span>.</span></p>
      </div>
    </div>
  );
};

export default Header;
