import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getVehicleDetails(params.theid);
	}, []);

	return (
		<div className="d-flex justify-content-center mt-5">
		<div className="card mb-3" style={{"width": "720px"}}>
			<div className="row g-0">
				<div className="col-md-4">
					<img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`} className="img-fluid rounded-start" alt={store.starWarsVehicleDetails.name} />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{store.starWarsVehicleDetails.name}</h5>
						<p className="card-text">Model: {store.starWarsVehicleDetails.model}</p>
						<p className="card-text">Manufacturer: {store.starWarsVehicleDetails.manufacturer}</p>
						<p className="card-text">Class: {store.starWarsVehicleDetails.vehicle_class}</p>
						<p className="card-text">Cost: {store.starWarsVehicleDetails.cost_in_credits} credits</p>
						<p className="card-text">Speed: {store.starWarsVehicleDetails.max_atmosphering_speed}km/h</p>
						<p className="card-text">Length: {store.starWarsVehicleDetails["length"]}m</p>
						<p className="card-text">Cargo Capacity: {store.starWarsVehicleDetails.cargo_capacity} metric tons</p>
						<p className="card-text">Mimimum Crew: {store.starWarsVehicleDetails.crew}</p>
						<p className="card-text">Passengers: {store.starWarsVehicleDetails.passengers}</p>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};

Vehicle.propTypes = {
	match: PropTypes.object
};
