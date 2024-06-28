import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPlanetDetails(params.theid);
	}, []);

	return (
		<div className="d-flex justify-content-center mt-5">
		<div className="card mb-3" style={{"width": "720px"}}>
			<div className="row g-0">
				<div className="col-md-4">
					<img src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} className="img-fluid rounded-start" alt={store.starWarsPlanetDetails.name} />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{store.starWarsPlanetDetails.name}</h5>
						<p className="card-text">Population: {store.starWarsPlanetDetails.population}</p>
						<p className="card-text">Rotation Period: {store.starWarsPlanetDetails.rotation_period} days</p>
						<p className="card-text">Orbital Period: {store.starWarsPlanetDetails.orbital_period} days</p>
						<p className="card-text">Diameter: {store.starWarsPlanetDetails.diameter}km</p>
						<p className="card-text">Gravity: {store.starWarsPlanetDetails.gravity}</p>
						<p className="card-text">Terrain: {store.starWarsPlanetDetails.terrain}</p>
                        <p className="card-text">Surface Water: {store.starWarsPlanetDetails.surface_water}%</p>
                        <p className="card-text">Climate: {store.starWarsPlanetDetails.climate}</p>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};

Planet.propTypes = {
	match: PropTypes.object
};
