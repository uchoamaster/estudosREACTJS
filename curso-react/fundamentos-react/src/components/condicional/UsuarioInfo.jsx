import React from "react";
import If from './if'
export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
            Seja bem vindo <strong>{ props.usuario.nome }</strong>!
            </If>
            <If test={!usuario && !usuario.nome}>
            Seja bem vindo <strong>Amigão</strong>!
            </If>
        </div>
    )
}