import React from "react";

export default (props)  => {
    // const min = props.min
    // const max = props.max
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
    return (
        <div>
        <h2>Aleatorio</h2>
        <p>Atualize para gerar um número aleatório novo</p>
        <p>O número aleatório Mínimo: <strong> { min }</strong></p>
        <p>O número aleatório Máximo: <strong> { max }</strong></p>
        <p>O número Escolhido: <strong> { aleatorio }</strong></p>

    </div>
    );
};