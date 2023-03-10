import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */


function ContentRowMovies(props){
    return (
    
        <div className="row">
            
            {props.cantidades?.map( ({nombre, cantidad}, i) => {

                return <SmallCard cantidades={{nombre, cantidad}} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;