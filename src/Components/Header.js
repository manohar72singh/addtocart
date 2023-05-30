/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import './style.css';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import cartImg from '../images/cart.gif'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { REMOVE } from './redux/actions/action';


export default function Header() {
	const [price, setPrice] = useState(0);
	const getdata = useSelector((state) => state.cartreducer.carts);
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const deleteItem = (id) => {
		dispatch(REMOVE(id));
	}

	const total = () => {
		let countPrice = 0;
		getdata.map((item) => {
			countPrice = item.price*item.qnty + countPrice;
		});
		setPrice(countPrice);
	}

	useEffect(() => {
		total();
	}, [total])
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand mx-5 " to="/">Cart App</Link>
				<div className=" navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className='nav-link mx-2' to='/home' >Home</Link>
						</li>
					</ul>
					<div className='nav-link'>
						<li style={{ float: "right" }}>
							<Badge badgeContent={getdata.length} color="primary"
								id="basic-button"
								aria-controls={open ? 'basic-menu' : undefined}
								aria-haspopup="true"
								aria-expanded={open ? 'true' : undefined}
								onClick={handleClick}
							>
								<i class="fa-sharp fa-solid fa-cart-shopping text-light " style={{ fontSize: 25, cursor: 'pointer' }}></i>
							</Badge>
						</li>

					</div>

				</div>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					{
						getdata.length ?
							<div className='card_details' style={{ width: '24rem', padding: 10 }}>
								<Table>
									<thead>
										<tr>
											<th>Photo</th>
											<th>Product Name</th>
										</tr>
									</thead>
									<tbody>
										{
											getdata.map((e) => {
												const name = e.title.substring(0, 10);
												return (
													<>
														<tr>
															<td>
																<Link to={`/cart/${e.id}`} onClick={handleClose}>
																	<img src={e.image} alt='' style={{ width: "5rem", height: "5rem" }} />
																</Link>
															</td>
															<td>
																<p className='text-truncate'>{name}</p>
																<p>price: <span>&#8377;</span> {e.price*e.qnty}</p>
																<p>Quantity: {e.qnty}</p>
																<p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => deleteItem(e.id)}>
																	<i className="fas fa-trash smalltrash"></i>
																</p>
															</td>
															<td className="mt-5" style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => deleteItem(e.id)} >
																<i className="fas fa-trash largetrash"></i>
															</td>
														</tr>
													</>
												)
											})
										}
										<p><strong>Total : <span>&#8377;</span></strong>{price}</p>
										<div className="d-flex flex-column mt-1">
											<button className="btn btn-outline-success btn-sm mt-2" type="button">
											<i class="fa-solid fa-bag-shopping"></i> <Link to={'/checkout'} style={{ textDecoration: "none", color: "inherit" }} onClick={handleClose}>checkout</Link>  <span>&#8594;</span>
											</button>
										</div>
									</tbody>
								</Table>
							</div> :
							<div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
								<i className='fas fa-close smallclose' style={{ position: 'absolute', top: 2, right: 20, fontSize: 23, cursor: 'pointer' }} onClick={handleClose}></i>
								<p style={{ fontSize: 22 }}>Your cart is Empty </p>
								<img src={cartImg} alt='cart' className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
							</div>
					}
				</Menu>
			</nav>
		</>
	)
}
