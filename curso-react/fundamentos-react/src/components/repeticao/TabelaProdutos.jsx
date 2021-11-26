import React from 'react';
import produtos from '../../data/produtos'
import "./TabelaProduto.css";


export default (props) => {

    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        })
    }


    return (
        <div className="TabelaProdutos">
            <table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>{getLinhas()}</tr>
                </tbody>
            </table>
        </div>
    )
    
}