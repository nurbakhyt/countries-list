import React from 'react';
import { CountryItem } from '../components';
import useCountries from '../hooks/useCountries';

const CountriesList: React.FC = () => {
  const { isLoading, list, countriesByName } = useCountries();

  if (isLoading) return <p>Loading...</p>;

  return (
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
  );
}

export default CountriesList;
