export type FilterProps<T> = {
  data: T[];
  categories: string[];
  onFilter: (filteredData: T[]) => void;
  getCategory: (item: T) => string;
}

