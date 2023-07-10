import { getPublicURL } from '../../../../../helpers/getPublicURL';

interface Props {
    className?: string;
}

export const Image: React.FC<Props> = ({ className }) => {
  return (
    <img
      className={className}
      src={getPublicURL('/images/main-page-girl.png')}
    />
  );
};
