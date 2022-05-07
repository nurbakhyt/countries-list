import { useEffect, useMemo, useState } from 'react';

const API_URL = 'https://restcountries.com/v2/all?fields=name,region,area';

const arrToMap = (items: Country[]) => items.reduce((m: CountriesMap, item: Country) => ({
  ...m,
  [item.name]: item,
}), {});

type UseCountriesParams = {
  sortingType: SortingType;
  smallerThan: string;
};

const useCountries = ({ sortingType, smallerThan }: UseCountriesParams) => {
  const [isLoading, setLoading] = useState(false);
  const [countriesByName, setCountriesByName] = useState<CountriesMap>({});

  const allCountries = useMemo(() => Object.keys(countriesByName), [countriesByName]);

  const list = useMemo(
    () => {
      let all = [...allCountries];
      if (sortingType === 'desc') {
        all.sort((a, b) => a > b ? -1 : 1);
      } else if (sortingType === 'asc') {
        all.sort();
      }

      if (smallerThan.length > 0) {
        const { area = 0 } = countriesByName[smallerThan];
        all = all.filter((name: string) => area > countriesByName[name].area);
      }

      return all;
    },
    [allCountries, countriesByName, sortingType, smallerThan]
  );

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((response: Country[]) => {
        setCountriesByName(arrToMap(response));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    isLoading,
    allCountries,
    list,
    countriesByName,
  };
}

export default useCountries;
