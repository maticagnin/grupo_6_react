import React, { useEffect, useState } from 'react';


function GenresInDb() {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/productos/categoria').then(rsp => {
      rsp.json().then(rsp => {
        setCategorias(rsp)
      })
    }).catch(error => {
      console.log(error)
    })
  },[])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
      {categorias.map( ({nombre_categoria, cantidad}, i) => {
            return( <div key={i} className="card-header py-3" style={{ display: 'flex', justifyContent: 'space-between' }}> 
            <h5 className="m-0 font-weight-bold text-gray-800">
              {nombre_categoria}
             </h5>
             <h5 className="m-0 font-weight-bold text-gray-800" >
              {cantidad}
             </h5>
         </div>)
             
        })}
    </div>
    </div>

  );
}

export default GenresInDb;