import "./CarbonEmission.css";
import ec_02_lg from "../../images/ec-02-lg.png";
import CarbonEmissionMap from "./CarbonEmissionMap";
import { useState } from "react";
import axios from "axios";

const CarbonEmission = () => {
  const [originInput, setOriginInput] = useState();
  const [destinyInput, setDestinyInput] = useState();

  const [originCoordinates, setOriginCoordinates] = useState({
    lat: 0,
    lng: 0,
  });

  const [destinyCoordinates, setDestinyCoordinates] = useState({
    lat: 0,
    lng: 0,
  });

  const handleInputChange = async (serchInput, coordinatesSetting) => {
    try {
      const response = await axios.post(import.meta.env.VITE_COORDINATES_API, {
        address: serchInput,
      });

      coordinatesSetting({
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
            onChange={(e) =>
              handleInputChange(e.target.value, setOriginCoordinates)
            }
          ></input>
          <div className="carbon-emission-map">
            {originCoordinates.lat !== 0 && originCoordinates.lng !== 0 && (
              <CarbonEmissionMap
                lat={originCoordinates.lat}
                lng={originCoordinates.lng}
              />
            )}
          </div>
        </div>

        <div className="carbon-emission-destiny-container">
          <label>Destino:</label>
          <input
            type="text"
            placeholder="Digite o endereço de destino"
            onChange={(e) =>
              handleInputChange(e.target.value, setDestinyCoordinates)
            }
          ></input>
          <div className="carbon-emission-map">
            {destinyCoordinates.lat !== 0 && destinyCoordinates.lng !== 0 && (
              <CarbonEmissionMap
                lat={destinyCoordinates.lat}
                lng={destinyCoordinates.lng}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonEmission;
