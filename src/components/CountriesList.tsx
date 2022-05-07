import React, { useState } from 'react';
import { CountryItem } from '../components';
import useCountries from '../hooks/useCountries';

import styles from './CountriesList.module.css';

const CountriesList: React.FC = () => {
  const [sortingType, setSortingType] = useState<SortingType>('asc');
  const { isLoading, list, countriesByName } = useCountries({ sortingType });

  if (isLoading) return <p>Loading...</p>;

  const handleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingType(e.target.value as SortingType);
  }

  return (
    <>
      <div className={styles.sorting}>
        <label>
          Sort by name&nbsp;
          <select value={sortingType} onChange={handleSorting}>
            <option value="asc">From A-Z</option>
            <option value="desc">From Z-A</option>
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
