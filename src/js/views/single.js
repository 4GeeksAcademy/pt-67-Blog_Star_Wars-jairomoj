import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getCharacterDetails(params.theid);
	}, []);

	return (
		<div className="d-flex justify-content-center mt-5">
		<div className="card mb-3" style={{"width": "720px"}}>
			<div className="row g-0">
				<div className="col-md-4">
					<img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="img-fluid rounded-start" alt={store.starWarsCharacterDetails.name} />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{store.starWarsCharacterDetails.name}</h5>
						<p className="card-text">Birth Year: {store.starWarsCharacterDetails.birth_year}</p>
						<p className="card-text">Height: {store.starWarsCharacterDetails.height}cm</p>
						<p className="card-text">Mass: {store.starWarsCharacterDetails.mass}kg</p>
						<p className="card-text">Gender: {store.starWarsCharacterDetails.gender}</p>
						<p className="card-text">Hair Color: {store.starWarsCharacterDetails.hair_color}</p>
						<p className="card-text">Skin Color: {store.starWarsCharacterDetails.skin_color}</p>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
