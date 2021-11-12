import  "./Card.css";
import React from "react";


export default props => {

    const CardStyle = {
        backgroundColor: props.color || '#008',
        borderColor: props.color || '#008',
    }


    return (
        <div>
            <div className="Card" style={CardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">{ props.children }</div>
            </div>
           
        </div>
    )

}