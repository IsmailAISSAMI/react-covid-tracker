import React, { useState, useEffect, useContext, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { GlobalContext } from '../../contexts/Global.context';
import { Container, Cases, Recovered, Deaths } from './Map.styles';
import { numberFormatter } from '../../utils/Functions';

const Map = ({ data }) => {
  const [positions, setPositions] = useState([]);
  const { colors, isDark } = useContext(GlobalContext);
  const themeProps = { colors, isDark };

  const formatter = useCallback((n) => numberFormatter(n), []);

  useEffect(() => {
    if (data.length) {
      const positions = data.map((country) => ({
        lat: country.countryInfo.lat,
        lng: country.countryInfo.long,
        cases: country.cases,
        country: country.country,
        recovered: country.recovered,
        deaths: country.deaths,
      }));
      setPositions(positions);
    }
    return () => setPositions([]);
  }, [data]);

  return (
    <Container>
      <MapContainer center={[51.0, 19.0]} zoom={5} maxZoom={18}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {positions.map(
          ({ lat, lng, country, cases, recovered, deaths }, index) => (
            <Marker key={index} position={[lat, lng]}>
              <Popup>
                <h3>{`${country} Stats:`}</h3>
                <Cases {...themeProps}>
                  Cases:
                  <span>{formatter(cases)}</span>
                </Cases>
                <Recovered {...themeProps}>
                  Recovered:
                  <span>{formatter(recovered)}</span>
                </Recovered>
                <Deaths {...themeProps}>
                  Deaths:
                  <span>{formatter(deaths)}</span>
                </Deaths>
              </Popup>
            </Marker>
          )
        )}
      </MapContainer>
    </Container>
  );
};

export default Map;
