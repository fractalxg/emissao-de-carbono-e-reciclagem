import "./CarbonEmissionListDescriptionVehicleType.css";
import { FaGasPump } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

const VehicleIcon = ({ isEletric }) => {
  if (isEletric === false) {
    return (
      <FaGasPump className="carbon-emission-list-description-vehicle-type-icon" />
    );
  } else if (isEletric === true) {
    return (
      <AiFillThunderbolt className="carbon-emission-list-description-vehicle-type-icon" />
    );
  }
};

const CarbonEmissionListDescriptionVehicleType = ({
  isEletric,
  setIsEletric,
}) => {
  const changeVehicleType = () => {
    if (isEletric == false) {
      setIsEletric(true);
    } else if (isEletric == true) {
      setIsEletric(false);
    }
  };
  return (
    <div className="carbon-emission-list-description-vehicle-type-container">
      <div>
        <div className="carbon-emission-list-description-vehicle-type-icon-selector">
          <IoMdArrowDropleft
            className="carbon-emission-list-description-vehicle-type-arrow-icon"
            onClick={() => changeVehicleType()}
          />
          <VehicleIcon isEletric={isEletric} />
          <IoMdArrowDropright
            className="carbon-emission-list-description-vehicle-type-arrow-icon"
            onClick={() => changeVehicleType()}
          />
        </div>
      </div>
    </div>
  );
};

export default CarbonEmissionListDescriptionVehicleType;
