import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Products() {
	let [products, setProducts] = useState([]);

	let getAllProduct = async () => {
		try {
			let response = await axios.get("http://localhost:3005/products");
			setProducts(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllProduct();
	}, []);

	return (
		<div className='bg-dark p-5 text-center'>
			<div className='container'>
				<h2 className='text-light mb-5'>Our Products</h2>

				<NavLink to='/products/0/edit' className='btn btn-outline-primary mb-5'>
					Add New Product
				</NavLink>
				<Table className='text-light' bordered>
					<thead>
						<tr>
							<th>Id</th>
							<th>Product Name</th>
							<th>Price</th>
							<th>Quanitity</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => {
							return (
								<tr key={product.id}>
									<td>{product.id}</td>
									<td>{product.productName}</td>
									<td>{product.price}</td>
									<td>{product.quantity}</td>
									<td>
										<NavLink to={`/products/${product.id}/edit`}>
											<i className='fs-2 text-info mx-1 bi bi-pencil-square'></i>
										</NavLink>
										<i className='fs-2 text-danger mx-1 bi bi-trash3-fill'></i>
										<NavLink to={`/products/${product.id}`}>
											<i className='fs-2 text-warning mx-1 bi bi-eye-fill'></i>
										</NavLink>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		</div>
	);
}
