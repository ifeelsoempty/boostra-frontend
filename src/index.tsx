import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux'

// import store from './store'
import App from './App';

import './styles/index.scss';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
  // <Provider store={store}>
  <>
    <App />
  </>,
  // </Provider>
);


// TODO: Зарефачить главную
// TODO: Пофиксить везде порядок импортов
// TODO: Настроить линтер и приттиер нормально и для всех файлов (в том числе и для стилей)
// TODO: Убрать ненужные импорты из scss файлов
// TODO: Пройтись по всем компонентам посмотреть все ли ок или нужно порефачить где-то

// TODO: React роутер
// TODO: Redux
// TODO: Тесты (хотябы снепшот-тесты)
// TODO: Подключить симлинки
