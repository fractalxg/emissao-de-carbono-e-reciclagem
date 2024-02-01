import Footer from "../footer/Footer"
import "./Body.css"
import CarbonEmission from "./CarbonEmission"
import Presentation from "./Presentation"
import Recycle from "./Recycle"
import SustainableEnergy from "./SustainableEnergy"

const Body = () => {
  return (
    <div className="body-container">
        <Presentation />
        <SustainableEnergy />
        <CarbonEmission />
        <Recycle />
    </div>
  )
}

export default Body