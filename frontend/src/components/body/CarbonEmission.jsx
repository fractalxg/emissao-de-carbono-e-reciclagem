import "./CarbonEmission.css";
import ec_02_lg from "../../images/ec-02-lg.png";

const CarbonEmission = () => {
  return (
    <div className="carbon-emission-container" id="carbonEmission">
      <div className="carbon-emission-header">
        <div className="carbon-emission-bar">
          <div className="up-carbon-emission-bar"></div>
          <div className="bottom-carbon-emission-bar">
            <h2>Emissão de Carbono<span>.</span></h2>
          </div>
        </div>
        <div className="carbon-emission-image">
        <img src={ec_02_lg} />

        </div>
      </div>
      <div className="carbon-emission-calculator">
        <div className="carbon-emission-origin-container">
          <label>Origem:</label>

          <input type="text" placeholder="Digite um endereço"></input>
        </div>

        <div className="carbon-emission-destiny-container">
          <label>Destino:</label>
          <input type="text" placeholder="Digite um endereço"></input>
        </div>
      </div>
    </div>
  );
};

export default CarbonEmission;
