import './index.css'
import reactDOM from "react-dom";
import React from 'react';




const tag =  <strong>Olá React!</strong>

reactDOM.render(
    <div>
        {tag}
    </div>,
document.getElementById('root')
);