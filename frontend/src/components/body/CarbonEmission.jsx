import "./CarbonEmission.css";
import ec_02_lg from "../../images/ec-02-lg.png";
import CarbonEmissionMap from "./CarbonEmissionMap";
import { useState } from "react";
import axios from "axios";

const CarbonEmission = () => {
  const [coordinates, setCoordinates] = useState({
    lat: -23.5557714,
    lng: -46.6395571,
  });
  const [input, setInput] = useState()

  const handleChange = async () => {
    try {

      const response = await axios.post(import.meta.env.VITE_COORDINATES_API, {
        address: input,
      });

      setCoordinates({
        lat: response.data.lat,
        lng: response.data.lng,
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="carbon-emission-container" id="carbonEmission">
      <div className="carbon-emission-header">
        <div className="carbon-emission-bar">
          <div className="up-carbon-emission-bar"></div>
          <div className="bottom-carbon-emission-bar">
            <h2>
              Emissão de Carbono<span>.</span>
            </h2>
          </div>
        </div>
        <div className="carbon-emission-image">
          <img src={ec_02_lg} />
        </div>
      </div>
      <div className="carbon-emission-calculator">
        <div className="carbon-emission-origin-container">
          <label>Origem:</label>

          <input
            type="text"
            placeholder="Digite o endereço de origem"
            onChange={(e) => setInput(e.target.value)}
          ></input>
          {/* <button onClick={() => handleChange()}>pesquisar</button> */}
          {coordinates && (
            <CarbonEmissionMap lat={coordinates.lat} lng={coordinates.lng} />
          )}
        </div>

        <div className="carbon-emission-destiny-container">
          <label>Destino:</label>
          <input
            type="text"
            placeholder="Digite o endereço de destino"
            onChange={(e) => handleChange(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default CarbonEmission;
