import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import { getGeo, Geolocation } from "../services/api";

interface Props {
  host: string;
}

const Map = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [details, setDetails] = useState<Geolocation>();

  useEffect(() => {
    setLoading(true);
    getGeo(props.host)
      .then((geo) => {
        setDetails(geo);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, [props.host]);

  const styles = {
    width: "100%",
    height: "400px",
    backgroundColor: "gray",
  };

  return (
    <div style={styles}>
      {error && <div>Error Loading Geolocation</div>}
      {loading && <div>Loading Geolocation</div>}
      {!error && !loading && details && (
        <MapContainer
          center={[details.latitude, details.longitude]}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
          zoom={5}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[details.latitude, details.longitude]}>
            <Tooltip permanent direction="top" offset={[-15, -15]}>
              {props.host}
              <br />
              {details.city
                ? `${details.city}, ${details.country_name}`
                : details.country_name}
            </Tooltip>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
