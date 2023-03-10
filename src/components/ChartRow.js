import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.nombre}</td>
                    <td>{props.descripcion}</td>
                    <td>{props.precio}</td>
                </tr>
            )
    }
    
        

export default ChartRow;