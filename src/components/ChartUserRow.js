import React from 'react';


function ChartUserRow(props){
    return (
                <tr>
                    <td>{props.user.name}</td>
                    <td>{props.user.email}</td>
                </tr>
            )
    }
    
        

export default ChartUserRow;