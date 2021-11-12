import React from "react";

export default (props)  => {
    // const min = props.min
    // const max = props.max
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
    return (
        <div>
        <h2>Aleatorio</h2>
        {/* <p>Atualize para gerar um número aleatório novo</p> */}
        <p><strong> Valor Mínimo: </strong>{ min }</p>
        <p> <strong> Valor Máximo: </strong>{ max }</p>
        <p> <strong> O número Escolhido: </strong>{ aleatorio }</p>

    </div>
    );
};