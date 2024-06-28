import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getFavorites();
	}, []);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to={`/`}>Star Wars</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="d-flex justify-content-end collapse navbar-collapse" id="navbarNavDarkDropdown">
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</button>
							<ul className="dropdown-menu dropdown-menu-dark">

								{
									store.favoritesList.length > 0 ?
										store.favoritesList.map((element, index) => {
											return (
												<li className="d-flex justify-content-between align-items-center" key={index}>
													<Link className="dropdown-item" to={`/${element.type}/${element.uid}`}>{element.name}</Link>
													<i className="fas fa-trash-alt me-3 btn btn-light" onClick={() => actions.deleteFavorites(index)}></i>
												</li>
											);
										})
										: <li className="dropdown-item">Empty</li>
								}

							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
