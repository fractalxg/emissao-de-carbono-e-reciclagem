import "./CarbonEmissionList.css";
import { useState } from "react";

const CarbonEmissionList = ({
  carbonEmissionListValues,
  setSearchedValue,
}) => {
  const [suggestion, setSuggestion] = useState();
  const [listVisibility, setListVisibility] = useState(true)

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
    setSearchedValue(value);
    setListVisibility(false);
    console.log(value);
  };

  return (
    <div className="carbon-emission-list-container">
      {listVisibility &&
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
