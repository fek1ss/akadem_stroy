export type PartnersProps = {
  logos: string[];
  activeIndex: number;
  itemsPerPage: number;
  onChange: (index: number) => void;
}