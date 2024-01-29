import "./CarbonEmissionListDescription.css";
import { useState } from "react";
import CarbonEmissionListDescriptionVehicleType from "./CarbonEmissionListDescriptionVehicleType";

const CarbonEmissionListDescription = ({ distance, duration }) => {
  const [isEletric, setIsEletric] = useState(false);

  const distanceToNumber = () => {
    const split = distance.split(" ");
    const distanceFormatted = split[0].replace(',', '')
    console.log(distanceFormatted)
    return distanceFormatted;
  };

  const carbonCalculation = () => {
    if (isEletric) {
      const distanceToCarbonCalculation =
        (30 / 305.677) * 0.4 * distanceToNumber();
      return `${distanceToCarbonCalculation.toFixed(2)} kg CO2`;
    } else if (!isEletric) {
      const distanceToCarbonCalculation = (distanceToNumber() / 10.63) * 2.23;
      return `${distanceToCarbonCalculation.toFixed(2)} kg CO2`;
    }
  };

  return (
    <div className="carbon-emission-list-description-container">
      <div className="carbon-emission-list-description-content">
        <p className="carbon-emission-list-description-content-title">
          Distância entre os endereços
        </p>
        <p className="carbon-emission-list-description-content-information">
          {distance}
        </p>
        <p className="carbon-emission-list-description-content-title">
          Duração da rota
        </p>
        <p className="carbon-emission-list-description-content-information">
          {duration}
        </p>
        <p className="carbon-emission-list-description-content-title">
          Estimativa de emissão de carbono
        </p>
        <div className="carbon-emission-list-description-content-information">
          <CarbonEmissionListDescriptionVehicleType
            isEletric={isEletric}
            setIsEletric={setIsEletric}
          />
          {carbonCalculation()}
        </div>
      </div>
    </div>
  );
};

export default CarbonEmissionListDescription;
