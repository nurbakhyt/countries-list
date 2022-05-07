import React, { useState } from 'react';
import { CountryItem } from '../components';
import useCountries from '../hooks/useCountries';

import styles from './CountriesList.module.css';

const CountriesList: React.FC = () => {
  const [sortingType, setSortingType] = useState<SortingType>('asc');
  const [smallerThan, setSmallerThan] = useState('');
  const { isLoading, allCountries, list, countriesByName } = useCountries({
    sortingType,
    smallerThan,
  });

  if (isLoading) return <p>Loading...</p>;

  const handleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingType(e.target.value as SortingType);
  }

  const handleByArea = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSmallerThan(e.target.value);
  }

  return (
    <>
      <div className={styles.toolbar}>
        <label className={styles.sorting}>
          Sort by name&nbsp;
          <select value={sortingType} onChange={handleSorting}>
            <option value="asc">From A-Z</option>
            <option value="desc">From Z-A</option>
          </select>
        </label>

        <label className={styles.byArea}>
          Smaller than&nbsp;
          <select className={styles.byAreaSelect} value={smallerThan} onChange={handleByArea}>
            {allCountries.map((name: string) => <option key={name} value={name}>{name}</option>)}
          </select>
        </label>
      </div>

      <main>
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
