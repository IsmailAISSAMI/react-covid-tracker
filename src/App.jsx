import React, { useState, useEffect, useContext, useCallback } from 'react';
import styled from 'styled-components';
import MainLayout from './layouts/Main.layout';
import { GlobalContext } from './contexts/Global.context';
import InfoBox from './components/infoBox/InfoBox';
import Aside from './components/aside/Aside';
import Table from './components/table/Table';
import Map from './components/map/Map';

const App = () => {
  const { colors, isDark } = useContext(GlobalContext);
  const [globalData, setGlobalData] = useState({});
  const [countriesData, setCountriesData] = useState([]);

  const convertSecondsToDate = useCallback(
    (seconds) => {
      return new Date(seconds).toLocaleDateString('uk-Uk');
    },
    [globalData.updated]
  );

  useEffect(() => {
    const fetchGlobalData = async () => {
      fetch('https://disease.sh/v3/covid-19/all')
        .then((response) => response.json())
        .then((data) => {
          setGlobalData(data);
          console.log(data);
        })
        .catch((error) =>
          console.error(`[!] Error in fetchGlobalData function\n${error}`)
        );
    };

    const fetchCountriesData = async () => {
      fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          setCountriesData(data);
          console.log(data);
        })
        .catch((error) =>
          console.error(`[!] Error in fetchCountriesData function\n${error}`)
        );
    };

    fetchGlobalData();
    fetchCountriesData();
  }, []);

  return (
    <MainLayout>
      <Container>
        <Section>
          <Title colors={colors} isDark={isDark}>
            Updated :{' '}
            <Text colors={colors} isDark={isDark}>
              {convertSecondsToDate(globalData.updated)}
            </Text>
          </Title>

          <Boxes>
            <InfoBox
              title="Cases"
              cases={globalData.todayCases}
              total={globalData.cases}
              imageName="cough-outline.gif"
            />
            <InfoBox
              title="Recovered"
              cases={globalData.todayRecovered}
              total={globalData.recovered}
              imageName="antibacterial-spray-disinfection-outline.gif"
            />
            <InfoBox
              title="Deaths"
              cases={globalData.todayDeaths}
              total={globalData.deaths}
              imageName="cemetery-outline.gif"
            />
          </Boxes>
        </Section>
        <Map data={countriesData} />
      </Container>

      <Aside>
        <Table data={countriesData} />
      </Aside>
    </MainLayout>
  );
};

const Container = styled.div(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}));

const Section = styled.section(() => ({}));

const Title = styled.h1(() => ({
  marginBottom: 8,
  fontWeight: 700,
}));

const Text = styled.span((props) => ({
  color: props.isDark ? props.colors.green[2] : props.colors.green[9],
}));

const Boxes = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media only screen and (max-width: 768px)': { flexDirection: 'column' },
}));

export default App;
