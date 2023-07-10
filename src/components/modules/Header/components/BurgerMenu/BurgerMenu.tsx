import { useRef } from 'react';
import classNames from 'classnames';

import { Navbar } from '../Navbar';
import { Suggestion } from '../../../../features/Suggestion';
import { SocialNetworks } from '../../../../features/SocialNetworks';
import { Contact, ContactType } from '../../../../features/Contact';

import styles from './BurgerMenu.module.scss';

interface Props {
  active: boolean;
  className?: string;
}

export const BurgerMenu: React.FC<Props> = ({ className, active }) => {
  const innerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{ height: active ? innerRef.current?.clientHeight : 0 }}
      className={classNames(styles.container, className, { [styles.active]: active })}
    >
      <div
        ref={innerRef}
        className={styles.inner}
      >
        <div className={styles.content}>
          <Suggestion />
          <Navbar className={styles.navbar} />
          <Contact
            type={ContactType.EMAIL}
            title="info@boostra.ru"
            subtitle={(
              <>
                Электронная почта для обращений
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
          <SocialNetworks />
        </div>
      </div>
    </div>
  );
};
