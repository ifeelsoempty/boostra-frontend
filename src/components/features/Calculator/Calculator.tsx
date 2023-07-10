import React, { ReactNode, PropsWithChildren, useState, useMemo } from 'react';
import classNames from 'classnames';

import { RegistrationModalContent } from './components/RegistrationModalContent';
import { Widget } from '../../design-system/Widget';
import { Button, ButtonType, ButtonSizes } from '../../design-system/Button';
import { Title } from '../../design-system/Typography';
import { RangeSlider } from '../../design-system/RangeSlider';
import { Condition } from './components/Conditions';
import { Modal } from '../../design-system/Modal';

import styles from './Calculator.module.scss';

interface Props {
  number?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  caption?: ReactNode;
  className?: string;
}

const LOAN_COMMISSION_PERCENT = 0.01;

const MONTH = [
  'января', 'февраля', 'марта', 'апреля',
  'мая', 'июня', 'июля', 'августа',
  'сентября', 'октября', 'ноября', 'декабря',
];

export const Calculator: React.FC<PropsWithChildren<Props>> = ({
  className,
}) => {
  const [moneyAmount, setMoneyAmount] = useState(9000);
  const [term, setTerm] = useState(7);
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const moneyAmountWithoutDiscount = useMemo(() => (
    Math.round(moneyAmount * term * LOAN_COMMISSION_PERCENT + moneyAmount)
  ), [term, moneyAmount]);

  const payDateText = useMemo(() => {
    const now = new Date;
    const payDate = new Date;

    payDate.setDate(now.getDate() + term);

    return `${payDate.getDate()} ${MONTH[payDate.getMonth()]}`;
  }, [term]);

  return (
    <>
      <Widget className={classNames(styles.container, className)}>
        <div className={styles.sliders}>
          <RangeSlider
            title="Выберите сумму"
            output={`${moneyAmount} ₽`}
            value={moneyAmount}
            onChange={setMoneyAmount}
            min={1000}
            max={30000}
            step={1000}
          />
          <RangeSlider
            title="Выберите срок"
            output={`${term} дней`}
            value={term}
            onChange={setTerm}
            min={7}
            max={16}
            step={1}
          />
        </div>
        <Button
          className={styles.button}
          type={ButtonType.PRIMARY}
          size={ButtonSizes.LARGE}
          onClick={openModal}
        >
          Получить заём
        </Button>
        <div className={styles.conditions}>
          <Condition
            title="Вы берете"
            value={`${moneyAmount}₽`}
          />
          <Condition
            title="До (включительно)"
            value={payDateText}
          />
        </div>
        <div className={styles.conditions}>
          <Condition
            title="Вы возвращаете"
            value={`${moneyAmount}₽`}
            disabledValue={`${moneyAmountWithoutDiscount}₽`}
            widgetValue="0%"
          />
        </div>
      </Widget>
      <Modal
        className={styles.registrationModal}
        onRequestClose={closeModal}
        isOpen={isModalOpen}
      >
        <RegistrationModalContent />
      </Modal>
    </>
  );
};
