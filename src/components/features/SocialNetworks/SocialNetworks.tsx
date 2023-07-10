import classNames from 'classnames';
import { getPublicURL } from '../../../helpers/getPublicURL';

import styles from './SocialNetworks.module.scss';

interface Props {
  className?: string;
}

const SOCIAL_NETWORKS_LINKS = [
  {
    name: 'telegram',
    imageUrl: getPublicURL('/images/social-networks/telegram.png'),
    url: 'https://telegram.me/boostra_bot',
  },
  {
    name: 'viber',
    imageUrl: getPublicURL('/images/social-networks/viber.png'),
    url: 'https://watbot.ru/w/mjj',
  },
  {
    name: 'vk',
    imageUrl: getPublicURL('/images/social-networks/vk.png'),
    url: 'https://vk.me/boostra_zaim',
  },
  {
    name: 'whatsapp',
    imageUrl: getPublicURL('/images/social-networks/whatsapp.png'),
    url: 'https://watbot.ru/w/mji',
  },
];

export const SocialNetworks: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      {SOCIAL_NETWORKS_LINKS.map((socialNetwork) => (
        <a
          key={socialNetwork.name}
          href={socialNetwork.url}
          target="_blank"
        >
          <img src={socialNetwork.imageUrl} />
        </a>
      ))}
    </div>
  );
};
