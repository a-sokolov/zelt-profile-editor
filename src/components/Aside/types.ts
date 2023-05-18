export type AsideItem = {
  url: string;
  title: string;
};

export type AsideProps = {
  items: AsideItem[];
  currentItemUrl?: string;
};
