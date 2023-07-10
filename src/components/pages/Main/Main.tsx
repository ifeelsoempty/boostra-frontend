
import React from 'react';

import { TimeSwitchBanner } from '../../features/TimeSwitchBanner';
import { Text, TextTypes } from '../../design-system/Typography';
import { HowItWorks, Requirements } from './components';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { FirstLoan } from './components/FirstLoan';
import { CalculatorBlock } from './components/CalculatorBlock';

import styles from './Main.module.scss';

export const Main: React.FC = () => {
  return (
    <div className={styles.container}>
      <TimeSwitchBanner values={[
        <React.Fragment key={1}>
          Займы
          {' '}
          <Text type={TextTypes.Primary}>
            без страховок!
          </Text>
        </React.Fragment>,
        <React.Fragment key={2}>
          <Text type={TextTypes.Primary}>
            Бесплатный заём
          </Text>
          {' '}
          с любой КИ
        </React.Fragment>,
      ]}
      />
      <CalculatorBlock />
      <HowItWorks />
      <Requirements />
      <Reviews />
      <div className={styles.block}>
        <FirstLoan />
        <FAQ />
      </div>
    </div>
  );
};
