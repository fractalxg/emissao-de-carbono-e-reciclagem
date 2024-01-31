import "./CarbonEmissionList.css";

const CarbonEmissionList = ({
  carbonEmissionListValues,
  setOriginAddress,
  setDestinyAddress,
  setOriginListVisibility,
  setDestinyListVisibility,
  addressOption
}) => {

  const boldText = (text) => {
    const formattedText = text;

    if (text.indexOf(",") !== -1) {
      const firstCommaIndex = text.indexOf(",");
      const textBeforeComma = text.substring(0, firstCommaIndex);
      const textAfterComma = text.substring(firstCommaIndex + 1);

      return (
        <>
          <b>{textBeforeComma},</b>
          <span>{textAfterComma}</span>
        </>
      );
    } else {
      return formattedText;
    }
  };

  const handleClick = (value) => {
    if (addressOption === "origin") {
      setOriginAddress(value)
      setOriginListVisibility(false)
    } else if (addressOption === "destiny"){
      setDestinyAddress(value)
      setDestinyListVisibility(false)
    }
    
  };

  return (
    <div className="carbon-emission-list-container">
      {
        carbonEmissionListValues.map((data, i) => (
          <div
            className="carbon-emission-list-content"
            key={i}
            onClick={() => handleClick(data.description)}
          >
            <p>{boldText(data.description)}</p>
          </div>
        ))}
    </div>
  );
};

export default CarbonEmissionList;
