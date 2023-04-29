import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  setInterval(updateTime, 1000);

  return <h1>{time}</h1>;
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
