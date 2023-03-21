import {City} from "../../types/city";
import {Points} from "../../types/location";
import {Icon, Marker} from "leaflet";
import {useEffect, useRef} from "react";
import useMap from "../../hooks/useMap";

type MapProps = {
  city: City;
  points: Points;
  selectedPointId: number | undefined;
}

const defaultIcon = new Icon({
  iconPath: '../../public/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
})

const currentIcon = new Icon({
  iconPath: '../../public/img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
})

function Map(props: MapProps): JSX.Element {
  const {city, points, selectedPointId} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            selectedPointId !== undefined && point.id === selectedPointId
            ? currentIcon
            : defaultIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPointId]);

  return <div ref={mapRef}></div>
}

export default Map;
