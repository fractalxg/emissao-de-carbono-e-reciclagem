import "./CarbonEmissionListDescription.css";
import { useState } from "react";

const CarbonEmissionListDescription = ({ distance, duration }) => {
  const [isEletric, setIsElettric] = useState(true);
  const distanceToNumber = () => {
    const split = distance.split(" ");
    return split[0];
  };
  const carbonCalculation = () => {
    if (isEletric) {
      const distanceToCarbonCalculation = (30 / 305.677) * 0.4 * distanceToNumber();
      return `${distanceToCarbonCalculation.toFixed(2)} kg CO2`;
    } else {
      const distanceToCarbonCalculation = (distanceToNumber() / 10, 63) * 2.23;
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
        <p className="carbon-emission-list-description-content-information">
          {carbonCalculation()}
        </p>
      </div>
    </div>
  );
};

export default CarbonEmissionListDescription;
