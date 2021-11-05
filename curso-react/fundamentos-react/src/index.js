import './index.css'
import reactDOM from "react-dom";
import React from 'react';


import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'



reactDOM.render(
    <div id="app">
        {/* pode-se fechar o componente como se abre e fecha tags com o nome dele ou apenas com a tag de fechamento */}
        <Primeiro></Primeiro> 
        <ComParametro 
        titulo="Situação do Aluno" 
        aluno="Carlos" nota={9.3} />
        <ComParametro 
        titulo="Situação do Aluno" 
        aluno="Maria" nota={3.9} />
        <Fragmento />
    </div>,
document.getElementById('root')
);