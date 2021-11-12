import "./App.css"
import React from "react";

import Card from './components/layout/Card'
import Familia from "./components/basicos/Familia";
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
        <Card titulo="#05 - Componente com Filhos" color="#00c8f8">
            <Familia sobrenome="Ferreira" />
        </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
            <Aleatorio min={1} max={60}/>
            </Card>
            <Card titulo="#03 - Fragmento" color="#e94c6f">
            <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro" color="#e8b71a">
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Carlos" nota={9.3} />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#588c73">
            {/* pode-se fechar o componente como se abre e fecha tags com o nome dele ou apenas com a tag de fechamento */}
            <Primeiro></Primeiro>
            </Card>
        </div>

     
    </div>

