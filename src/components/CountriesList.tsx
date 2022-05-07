import React, { useState } from 'react';
import { CountryItem, Select } from '../components';
import useCountries from '../hooks/useCountries';

import styles from './CountriesList.module.css';

const CountriesList: React.FC = () => {
  const [sortingType, setSortingType] = useState<SortingType>('asc');
  const [smallerThan, setSmallerThan] = useState('');
  const [region, setRegion] = useState('');
  const { isLoading, allCountries, list, countriesByName, countriesByRegion } = useCountries({
    sortingType,
    smallerThan,
    region,
  });

  if (isLoading) return <p>Loading...</p>;

  const handleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingType(e.target.value as SortingType);
  }

  const handleByArea = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSmallerThan(e.target.value);
  }

  const handleRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  }

  return (
    <>
      <div className={styles.toolbar}>
        <Select label="Sort by name" value={sortingType} onChange={handleSorting}>
          <option value="asc">From A-Z</option>
          <option value="desc">From Z-A</option>
        </Select>

        <Select label="Smaller than" value={smallerThan} onChange={handleByArea}>
          <option value="">select</option>
          {allCountries.map((name: string) => <option key={name} value={name}>{name}</option>)}
        </Select>

        <Select label="By region" value={region} onChange={handleRegion}>
          <option value="">select</option>
          {Object.keys(countriesByRegion).map((region: string) => <option key={region} value={region}>{region}</option>)}
        </Select>

        <span>{list.length}</span>
      </div>

      <main>
        {list.length < 1 && <p>Список пуст</p>}
        {list.map((name: string) => (
          <CountryItem
            key={name}
            name={countriesByName[name].name}
            area={countriesByName[name].area}
            region={countriesByName[name].region}
          />
        ))}
      </main>
    </>
  );
}

export default CountriesList;
