import "./Presentation.css";
import es_01 from "../../images/es-01.png"
import es_02 from "../../images/es-02.png"
import ec_01 from "../../images/ec-01.png"
import ec_02 from "../../images/ec-02.png"
import rc_01 from "../../images/rc-01.png"
import rc_02 from "../../images/rc-02.png"

const Presentation = () => {
  return (
    <div className="presentation-container">
			<div className="presentation-image-content">
				<img src={es_01} style={{paddingBottom:"100px"}}/>
				<img src={es_02} style={{paddingTop:"100px"}}/>
				<img src={ec_01} style={{paddingBottom:"100px"}}/>
				<img src={ec_02} style={{paddingTop:"100px"}}/>
				<img src={rc_02} style={{paddingBottom:"100px"}}/>
				<img src={rc_01} style={{paddingTop:"100px"}}/>
			</div>
    </div>
  );
};

export default Presentation;
