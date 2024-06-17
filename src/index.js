import React , {createContext}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Info = {
  name: "taiyou",
  age: 23,
};

const TaiyouContext = createContext(Info);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TaiyouContext.Provider value={Info}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </TaiyouContext.Provider>
);

reportWebVitals();

export default TaiyouContext;