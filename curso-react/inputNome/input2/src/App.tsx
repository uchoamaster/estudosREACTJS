import React, { useState } from  'react';
import './App.css';

const App = () => {

  const [name, setName] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  return (
    <div className='container'>
      Nome:
      <input type="text" className='input' value={name} onChange={handleInput}/>
      <hr className='linha' />
      Seu nome é : {name}
    </div>



  );

}


export default App;
