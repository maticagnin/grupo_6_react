import React, { useEffect, useState } from "react";
import ChartUserRow from "./ChartUserRow";

function ChartUser() {
	const [Usuarios, setUsuarios] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/user/lista")
			.then((rsp) => {
				rsp.json().then((rsp) => {
					console.log(rsp.data);
					setUsuarios(rsp.data);
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
								<th>Nombre y Apellido</th>
								<th>email</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th>Nombre y Apellido</th>
								<th>email</th>
							</tr>
						</tfoot>
						<tbody>
							{Usuarios?.map((row, i) => {
								return <ChartUserRow {...row} key={i} />;
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default ChartUser;