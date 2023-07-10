import ReactModal, { Props as ReactModalProps } from 'react-modal';
import styles from './Modal.module.scss';
import { PropsWithChildren, useState } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
} & ReactModalProps;


export const Modal: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children, className, isOpen } = props;

  const huy = classNames(styles.bodyOpenClassName, { [styles.closing]: isOpen });

  return (
    <ReactModal
      {...props}
      closeTimeoutMS={200}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      bodyOpenClassName={styles.bodyOpenClassName}
      className={classNames(className, styles.container, { [styles.closing]: !isOpen })}
      overlayClassName={classNames(styles.overlay, { [styles.closing]: !isOpen })}
    >
      <div className={styles.content}>
        {children}
        <img
          className={styles.closeButton}
          onClick={props.onRequestClose}
          src="/images/modal/close.svg"
        />
      </div>
    </ReactModal>
  );
};
