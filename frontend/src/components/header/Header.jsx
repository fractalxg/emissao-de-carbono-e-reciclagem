import "./Header.css";
import ellipse from "../../images/ellipse-lg-03.png"


const Header = () => {
  return (
    <div className="header-container">
			<div className="header-logo">
				<img src={ellipse}/>
			</div>
      <div className="inner-header-container">
        <p>Energia Sustentável</p>
        <p>Emissão de Carbono</p>
        <p>Reciclagem</p>
      </div>
    </div>
  );
};

export default Header;
