import React from 'react'


import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'


export default () =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio />
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Carlos" nota={9.3} />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Maria" nota={3.9} />
        {/* pode-se fechar o componente como se abre e fecha tags com o nome dele ou apenas com a tag de fechamento */}
        <Primeiro></Primeiro>
    </div>

