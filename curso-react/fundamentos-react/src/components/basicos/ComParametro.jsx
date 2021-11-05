export default function ComParametro(props) {
    // console.log(props)
    // const sub = props.subtitulo
const status = props.nota  >= 7 ? 'Aprovado(a)' : 'Reprovado(a)'
// props.nota = Math.ceil(props.nota) // as propiedades são somente  leitura
//voce pode criar uma outra variavel e trabalhar algumas alterações nessa outra variavel ai eh possivel
const notaInt = Math.ceil(props.nota)
    return (
        <div>
            {/* aqui preciso interpretar o valor com js atraves das chaves {} */}
            <h2>{props.titulo}</h2>
            <p> <strong> {props.aluno} </strong>
             tem nota
              {/*aqui no caso arredondou a nota para cima com o Math.ceil de 9.3 foi para 10  */}
             <strong> { notaInt } </strong> 
             e está 
             <strong> { status }</strong>!
             </p>
        </div>
    )
}