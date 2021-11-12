import "./App.css"
import React from "react";

import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#04 - Desafio Aleatório">
            <Aleatorio min={1} max={60}/>
            </Card>
            <Card titulo="#03 - Fragmento">
            <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro">
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Carlos" nota={9.3} />
            </Card>
            <Card titulo="#01 - Primeiro Componente">
            {/* pode-se fechar o componente como se abre e fecha tags com o nome dele ou apenas com a tag de fechamento */}
            <Primeiro></Primeiro>
            </Card>
        </div>

     
    </div>

