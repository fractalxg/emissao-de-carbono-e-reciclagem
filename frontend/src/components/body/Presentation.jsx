import "./Presentation.css";
import es_01 from "../../images/es-01.png";
import es_02 from "../../images/es-02.png";
import ec_01 from "../../images/ec-01.png";
import ec_02 from "../../images/ec-02.png";
import rc_01 from "../../images/rc-01.png";
import rc_02 from "../../images/rc-02.png";
import ec_01_sm from "../../images/ec-01-sm.png";
import es_01_sm from "../../images/es-01-sm.png";
import rc_01_sm from "../../images/rc-01-sm.png";

const Presentation = () => {
  return (
    <div className="presentation-container">
      <div className="presentation-image-content">
        <img className="es_01" src={es_01} />
        <img className="es_02" src={es_02} />
        <img className="ec_01" src={ec_01} />
        <img className="ec_02" src={ec_02} />
        <img className="rc_02" src={rc_02} />
        <img className="rc_01" src={rc_01} />
        <div className="presentation-image-content-mobile">
		<img className="es_01_sm" src={es_01_sm} />
          <img className="ec_01_sm" src={ec_01_sm} />
          
          <img className="rc_01_sm" src={rc_01_sm} />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
