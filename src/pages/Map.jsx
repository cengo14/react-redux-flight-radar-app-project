import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { icon } from "leaflet";
import { removeRoute } from "../redux/slices/detailSlice";
const Map = ({ setDetailId }) => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const { flights } = useSelector((store) => store.flight);
  const planeIcon = (rotation) =>
    L.divIcon({
      html: `<img 
             src="airplane1.png" 
             style="transform: rotate(${rotation}deg); width: 40px; height: 40px;" 
           />`,
      iconSize: [40, 40],
      className: "plane-icon",
    });
  const redOptions = { color: "red" };

  const { route } = useSelector((store) => store.detail);
  const dispatch = useDispatch();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          alert("Konum bilgisi paylaşılmıyor", error);
        }
      );
    } else {
      alert("Tarayıcı konum özelliğini desteklemiyor");
    }
  }, []);

  const geo = Object.values(location);

  return (
    <MapContainer
      center={[39.00178356098564, 35.378215418481645]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {flights?.map((flight) => (
        <Marker
          key={flight.id}
          position={[flight.lat, flight.lng]}
          icon={planeIcon(flight.rotation)}
        >
          <Popup>
            <div className="d-flex flex-column align-items-center gap-2">
              <span className="fw-bold">Uçuş Kodu:{flight.code}</span>
              <button
                onClick={() => setDetailId(flight.id)}
                className="btn btn-dark"
              >
                Detay
              </button>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(removeRoute())}
              >
                Rotayı Temizle
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
      <Marker position={geo}>
        <Popup>Şu anda buradayım :)</Popup>
      </Marker>
      {route && <Polyline positions={route} pathOptions={redOptions} />}
    </MapContainer>
  );
};

export default Map;
