import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";

const polygon1 = [
  [54.21892845, 18.60949587],
  [54.21869338, 18.60913285],
  [54.21858449, 18.60929826],
  [54.21877786, 18.60969523],
  [54.21882938, 18.60962878],
  [54.21884074, 18.60964694],
];

const polygon2 = [
  [54.21858449, 18.60929826],
  [54.21877786, 18.60969523],
  [54.21862449, 18.60989759],
  [54.21843892, 18.60951882],
];

const greenOption = { color: "#03624c" };
const lightGreenOption = { color: "#44bea2" };

const MyMap = () => {
  return (
    <MapContainer
      center={[54.21868628, 18.60951039]}
      zoom={17}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[54.2185796, 18.60962201]}>
        <Popup>Dom bliźniak B1/B2</Popup>
      </Marker>
      <Polygon pathOptions={lightGreenOption} positions={polygon2} />

      <Marker position={[54.2187871, 18.60942725]}>
        <Popup>Dom wolnostojący A1</Popup>
      </Marker>
      <Polygon pathOptions={greenOption} positions={polygon1} />
    </MapContainer>
  );
};

export default MyMap;
