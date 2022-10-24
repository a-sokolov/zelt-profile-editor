export type AsideItem = {
  url: string;
  title: string;
};

export type AsideProps = {
  onLogout: () => void;
  items: AsideItem[];
  currentItemUrl?: string;
};
