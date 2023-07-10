import styles from './Logo.module.scss';

export const Logo: React.FC = () => {
  return (
    <div>
      <img
        className={styles.image}
        alt="Logo"
        src="/images/boostra-logo.dark.png"
      />
    </div>
  );
};
