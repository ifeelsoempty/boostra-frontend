import classNames from 'classnames';

import styles from './MenuButton.module.scss';

interface Props {
  active: boolean;
  onClick: () => void;
  className?: string;
}

export const MenuButton: React.FC<Props> = ({ className, onClick, active }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <img
        onClick={onClick}
        src={`/images/burger-menu/${active ? 'closed' : 'opened'}.svg`}
      />
    </div>
  );
};
