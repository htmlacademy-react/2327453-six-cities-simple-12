import {City} from '../../types/city';
import {Points} from '../../types/location';
import {Icon, Marker} from 'leaflet';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: Points;
  selectedPointId: number | null;
}

const defaultIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});

const currentIcon = new Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {city, points, selectedPointId} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markers:Marker[] = [];

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            selectedPointId !== null && point.id === selectedPointId
              ? currentIcon
              : defaultIcon
          )
          .addTo(map);

        markers.push(marker);
      });

      return () => {
        markers.forEach((m) => map.removeLayer(m));
      };
    }
  }, [map, points, selectedPointId]);

  return <section className="cities__map map" ref={mapRef}></section>;
}

export default Map;
