import { useState } from 'react';

import { Logo } from '../../design-system/Logo';
import { Navbar } from './components/Navbar';
import { Contact, ContactType } from '../../features/Contact';
import { Button, ButtonType } from '../../design-system/Button';
import { BurgerMenu, MenuButton } from './components/BurgerMenu';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <MenuButton
            className={styles.menu}
            active={isMenuActive}
            onClick={() => setMenuActive(!isMenuActive)}
          />
          <Logo />
        </div>
        <Navbar className={styles.navbar} />
        <div className={styles.contactList}>
          <Contact
            type={ContactType.EMAIL}
            title="info@boostra.ru"
            subtitle={(
              <>
                Электронная почта
                {' '}
                <br />
                для обращений
              </>
            )}
          />
          <Contact
            type={ContactType.TEL}
            title="8 800 333 30 73"
            subtitle={(
              <>
                Клиентский сервис
                <br />
                Время работы: с 7 до 22 (мск)
              </>
            )}
          />
        </div>
        <Button
          className={styles.carDepositBtn}
          type={ButtonType.ORANGE}
        >
          Автозаймы
        </Button>
        <div className={styles.buttons}>
          <Button type={ButtonType.PRIMARY}>
            Войти
          </Button>
          <Button className={styles.pay}>
            Внести платеж
          </Button>
        </div>
      </div>
      <BurgerMenu
        className={styles.menu}
        active={isMenuActive}
      />
    </>
  );
};
