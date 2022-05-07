import { useEffect, useMemo, useState } from 'react';

const API_URL = 'https://restcountries.com/v2/all?fields=name,region,area';

const arrToMap = (items: Country[]) => items.reduce((m, item) => ({
  ...m,
  [item.name]: item,
}), {});

type UseCountriesParams = {
  sortingType: SortingType;
};

const useCountries = ({ sortingType }: UseCountriesParams) => {
  const [isLoading, setLoading] = useState(false);
  const [countriesByName, setCountriesByName] = useState<{ [prop: string]: Country }>({});

  const list = useMemo(
    () =>
    sortingType === 'asc'
      ? Object.keys(countriesByName)
      : Object.keys(countriesByName).sort((a, b) => a > b  ? -1 : 1),
    [countriesByName, sortingType]
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
    list,
    countriesByName,
  };
}

export default useCountries;
