import "./CarbonEmissionMap.css";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

const CarbonEmissionMap = ({ lat, lng }) => {
  const position = { lat: lat, lng: lng };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GC_API_KEY}>
      <div className="carbon-emission-map-container">
        <Map
          zoom={9}
          center={position}
          mapId={import.meta.env.VITE_MAP_ID}
          disableDefaultUI={true}
        >
          <AdvancedMarker position={position}>
            <Pin
              background={"#3D3D3D"}
              borderColor={"#fff"}
              glyphColor={"#fff"}
            />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
};

export default CarbonEmissionMap;
