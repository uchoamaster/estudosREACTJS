import  "./Card.css";
import React from "react";


export default props => {

    return (
        <div>
            <div className="Card">
            <div className="Title">{props.titulo}</div>
            <div className="Content">{ props.children }</div>
            </div>
           
        </div>
    )

}