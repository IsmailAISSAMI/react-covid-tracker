import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../contexts/Global.context';
import Input from '../input/Input';
import ActionIcon from '../actionIcon/ActionIcon';
import {
  Container,
  Filters,
  CountriesTable,
  Row,
  Text,
  Stats,
} from './Table.styles';
import { BiSortDown, BiSortUp } from 'react-icons/bi';

const Table = ({ data = [] }) => {
  const { colors, isDark } = useContext(GlobalContext);
  const themeProps = { colors, isDark };
  const [sort, setSort] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (searchTerm === '') {
      setCountries(data);
    } else {
      const filteredCountries = data.filter(({ country }) =>
        country.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCountries(filteredCountries);
    }
  }, [searchTerm, data]);

  useEffect(() => {
    const sortedCountries = [...countries].sort((a, b) => {
      if (sort === 'asc') {
        return a.cases > b.cases ? 1 : -1;
      } else {
        return a.cases < b.cases ? 1 : -1;
      }
    });
    setCountries(sortedCountries);
    console.log(sortedCountries);
  }, [sort]);

  return (
    <Container {...themeProps}>
      <Filters>
        <Input
          value={searchTerm}
          setValue={setSearchTerm}
          placeHolder="Search Country"
        />
        <ActionIcon
          icon={sort === 'asc' ? <BiSortDown /> : <BiSortUp />}
          onClick={
            sort === 'asc' ? () => setSort('desc') : () => setSort('asc')
          }
        />
      </Filters>

      <CountriesTable>
        <tbody>
          {countries.map(({ country, cases }, index) => (
            <Row key={`table-row-${index}`} index={index} {...themeProps}>
              <Text> {country} </Text>
              <Stats>
                {cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </Stats>
            </Row>
          ))}
        </tbody>
      </CountriesTable>
    </Container>
  );
};

export default Table;
