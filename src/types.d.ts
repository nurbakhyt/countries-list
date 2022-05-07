type Country = {
  area: number;
  name: string;
  region: string;
};

type CountriesMap = {
  [prop: string]: Country;
};

type SortingType = 'asc' | 'desc';

