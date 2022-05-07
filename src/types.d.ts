type Country = {
  area: number;
  name: string;
  region: string;
};

type CountriesMap = {
  [prop: string]: Country;
};

type ByRegionMap = {
  [prop: string]: string[];
};

type SortingType = 'asc' | 'desc';

