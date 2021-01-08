import { useCallback } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import logo from './logo.svg';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = useCallback(
    (lng) => () => {
      i18n.changeLanguage(lng);
    },
    [i18n],
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans i18nKey="description">
            Edit <code>src/App.tsx</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('title', { defaultValue: 'Learn React' })}
        </a>
        <div className="language-section">
          <button onClick={changeLanguage('en')}>en</button>
          <button onClick={changeLanguage('vi')}>vi</button>
        </div>
      </header>
    </div>
  );
}

export default App;
