import "./CarbonEmission.css";
import ec_02_lg from "../../images/ec-02-lg.png";
import CarbonEmissionMap from "./CarbonEmissionMap";
import { useState, useEffect } from "react";
import axios from "axios";
import CarbonEmissionList from "./CarbonEmissionList";
import CarbonEmissionListDescription from "./CarbonEmissionListDescription";

const CarbonEmission = () => {
  const [originAddress, setOriginAddress] = useState("");
  const [destinyAddress, setDestinyAddress] = useState("");
  const [carbonEmissionListValues, setCarbonEmissionListValues] = useState();
  const [originListVisibility, setOriginListVisibility] = useState();
  const [destinyListVisibility, setDestinyListVisibility] = useState();
  const [addressDistance, setAddressDistance] = useState("");
  const [routeDuration, setRouteDuration] = useState("");

  const [originCoordinates, setOriginCoordinates] = useState({
    lat: 0,
    lng: 0,
  });

  const [destinyCoordinates, setDestinyCoordinates] = useState({
    lat: 0,
    lng: 0,
  });

  const handleInputChange = async (searchInput, addressSetting) => {
    if (addressSetting === "origin") {
      setOriginListVisibility(true);
      setDestinyListVisibility(false);
      inputClear("destiny-input");
    } else if (addressSetting === "destiny") {
      setDestinyListVisibility(true);
      setOriginListVisibility(false);
      inputClear("origin-input");
    }

    const response = await axios.post(
      import.meta.env.VITE_PLACESUGGESTION_API,
      {
        input: searchInput,
      }
    );
    const responseData = response.data;
    setCarbonEmissionListValues(responseData);
  };

  const handleAddressMap = async (
    value,
    setValue,
    setCoordinates,
    setVisibility,
    inputName
  ) => {
    if (value.length > 0) {
      try {
        const response = await axios.post(
          import.meta.env.VITE_COORDINATES_API,
          {
            address: value,
          }
        );

        setCoordinates({
          lat: response.data.lat,
          lng: response.data.lng,
        });
        //setValue("");
        setCarbonEmissionListValues(null);
        setVisibility(false);
        inputClear(inputName);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const inputClear = (inputName) => {
    const inputElement = document.querySelector(`.${inputName}`);
    if (inputElement) {
      inputElement.value = "";
    }
  };

  const addressesDistanceCompare = async (originAddress, destinyAddress) => {
    if (originAddress.length > 0 && destinyAddress.length > 0) {
      const response = await axios.post(import.meta.env.VITE_DISTANCE_API, {
        origin: originAddress,
        destination: destinyAddress,
      });
      const responseData = response.data;
      console.log(responseData);
      setAddressDistance(responseData.distance);
      setRouteDuration(responseData.duration);
      setOriginAddress("");
      setDestinyAddress("");

      // console.log(`Origem: ${originAddress}, Destino: ${destinyAddress}`)
    }
  };

  useEffect(() => {
    handleAddressMap(
      originAddress,
      setOriginAddress,
      setOriginCoordinates,
      setOriginListVisibility,
      "origin-input"
    );
  }, [originAddress]);

  useEffect(() => {
    handleAddressMap(
      destinyAddress,
      setDestinyAddress,
      setDestinyCoordinates,
      setDestinyListVisibility,
      "destiny-input"
    );
  }, [destinyAddress]);

  useEffect(() => {
    addressesDistanceCompare(originAddress, destinyAddress);
  }, [originAddress, destinyAddress]);

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
            className="origin-input"
            type="text"
            placeholder="Digite o endereço de origem"
            onChange={(e) => handleInputChange(e.target.value, "origin")}
          ></input>
          {originListVisibility && carbonEmissionListValues && (
            <CarbonEmissionList
              carbonEmissionListValues={carbonEmissionListValues}
              setOriginAddress={setOriginAddress}
              setOriginListVisibility={setOriginListVisibility}
              addressOption={"origin"}
            />
          )}
          <div className="carbon-emission-map">
            {!originListVisibility &&
              originCoordinates.lat !== 0 &&
              originCoordinates.lng !== 0 && (
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
            className="destiny-input"
            type="text"
            placeholder="Digite o endereço de destino"
            onChange={(e) => handleInputChange(e.target.value, "destiny")}
          ></input>
          {destinyListVisibility && carbonEmissionListValues && (
            <CarbonEmissionList
              carbonEmissionListValues={carbonEmissionListValues}
              setDestinyAddress={setDestinyAddress}
              setDestinyListVisibility={setDestinyListVisibility}
              addressOption={"destiny"}
            />
          )}

          <div className="carbon-emission-map">
            {!destinyListVisibility &&
              destinyCoordinates.lat !== 0 &&
              destinyCoordinates.lng !== 0 && (
                <CarbonEmissionMap
                  lat={destinyCoordinates.lat}
                  lng={destinyCoordinates.lng}
                />
              )}
          </div>
        </div>
      </div>
      {addressDistance.length > 0 && routeDuration.length > 0 && (
        <CarbonEmissionListDescription distance={addressDistance} duration={routeDuration}/>
      )}
    </div>
  );
};

export default CarbonEmission;
