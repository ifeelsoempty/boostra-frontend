import classNames from 'classnames';

import styles from './Dot.module.scss';

interface Props {
  active?: boolean;
  onClick?: () => void;
}

export const Dot: React.FC<Props> = ({ active = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.default, { [styles.active]: active })}
    />
  );
};
