
import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';

function App() {
	const [totalProductos, setTotalProductos] = useState({});
	const [totalUsuarios, setTotalUsuarios] = useState({});
	const [totalCategorias, setTotalCategorias] = useState({});
  useEffect(() => {
    fetch('http://localhost:3000/productos/total').then(rsp => {
      rsp.json().then(rsp => {
        setTotalProductos({nombre: 'Productos', cantidad: rsp.cantidad_productos})
        setTotalUsuarios({nombre: 'Usuarios', cantidad: rsp.cantidad_usuarios})
        setTotalCategorias({nombre: 'Categorías', cantidad: rsp.cantidad_categorias})
      })
    }).catch(error => {
      console.log(error)
    })
  },[])

 
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar
            totalProductos={totalProductos}
            totalUsuarios={totalUsuarios}
            totalCategorias={totalCategorias}
          />

        </div>

    </React.Fragment>
  );
}

export default App;
