import React, { useEffect, useState } from "react";
import ChartRow from "./ChartRow";

function Chart() {
	const [Productos, setProductos] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/productos/lista")
			.then((rsp) => {
				rsp.json().then((rsp) => {
					setProductos(rsp.listado);
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		/* <!-- DataTales Example --> */
		<div className="card shadow mb-4">
			<div className="card-body">
				<div className="table-responsive">
					<table
						className="table table-bordered"
						id="dataTable"
						width="100%"
						cellSpacing="0">
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Descripcion</th>
								<th>Precio</th>
							</tr>
						</thead>

						<tbody>
							{Productos?.map((row, i) => {
								return <ChartRow {...row} key={i} />;
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Chart;