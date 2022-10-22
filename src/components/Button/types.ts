export type ButtonAppearance = 'primary' | 'secondary';

export type ButtonProps = {
  onClick?: () => void;
  appearance?: ButtonAppearance;
  width?: 'full' | 'max';
  loading?: boolean;
};
