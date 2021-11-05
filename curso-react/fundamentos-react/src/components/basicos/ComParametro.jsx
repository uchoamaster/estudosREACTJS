export default function ComParametro(props) {
    // console.log(props)
    // const sub = props.subtitulo
    return (
        <div>
            {/* aqui preciso interpretar o valor com js atraves das chaves {} */}
            <h2>{props.titulo}</h2>
            <p> <strong> {props.aluno} </strong>
             tem nota 
             <strong> {props.nota} </strong>
             </p>
        </div>
    )
}