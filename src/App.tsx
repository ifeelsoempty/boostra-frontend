import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Main } from './components/pages/Main';
import { Header } from './components/modules/Header';
import { BaseRoutes } from './routes/base';
import { Footer } from './components/modules/Footer';

import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/boostra-frontend">
      <Header />
      <div className={styles.content}>
        <Routes>
          <Route
            path={BaseRoutes.Main}
            element={<Main />}
          />
          <Route
            path={BaseRoutes.Partners}
            element={<Main />}
          />
          <Route
            path={BaseRoutes.Info}
            element={<Main />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
