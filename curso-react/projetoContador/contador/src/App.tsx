import { useState } from 'react';
import './App.css';



const App = () => {
  const [n, setN] = useState(0);

  const handleMinus = () => {
    setN (n -1 );
  }

  const handleMore = () => {
    setN( n + 1);
  }

  return (
    <div className="container">
    <div className="titulo">
      <h1>Contador</h1>
    </div>
      <button className="btn" onClick={handleMinus}>-</button>
      <div className="numbers">{n}</div>
      <button className="btn" onClick={handleMore}>+</button>
    </div>
  );

}

export default App;
