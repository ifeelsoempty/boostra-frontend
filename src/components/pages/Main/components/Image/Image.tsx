interface Props {
    className?: string;
}

export const Image: React.FC<Props> = ({ className }) => {
  return (
    <img
      className={className}
      src="/images/main-page-girl.png"
    />
  );
};
