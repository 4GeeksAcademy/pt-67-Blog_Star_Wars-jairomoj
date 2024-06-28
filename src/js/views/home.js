import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAllCharacters();
		actions.getAllPlanets();
		actions.getAllVehicles();
	}, []);

	const handleFavorites = (uid, name, url, type) => {
		actions.addFavorites(uid, name, url, type);
	}

	return (
		<div className="mx-5 mt-3">
			<h1 className="text-danger ms-3">Characters</h1>
			<div className="d-flex w-100 overflow-auto scroll-horizontal">
				{
					store.starWarsCharacters.map((element, index) => {
						return (
							<div className="card mx-3" style={{ "minWidth": "18rem" }}>
								<img src={`https://starwars-visualguide.com/assets/img/characters/${element.uid}.jpg`} className="card-img-top" alt={`${element.name}`} />
								<div className="card-body">
									<h5 className="card-title">{element.name}</h5>
									<p className="card-text"></p>
									<div className="d-flex justify-content-between">
										<Link type="button" className="btn btn-primary" to={`/single/${element.uid}`}>Learn more!</Link>
										<button className="btn btn-outline-warning" onClick={() => handleFavorites(element.uid, element.name, element.url, "single")}>
											<i className="fa fa-heart text-outline-warning" />
										</button>
									</div>
								</div>
							</div>
						);
					})
				}
			</div>



			<h1 className="text-danger ms-3">Planets</h1>
			<div className="d-flex w-100 overflow-auto scroll-horizontal">
				{
					store.starWarsPlanets.map((element, index) => {
						return (
							<div className="card mx-3" style={{ "minWidth": "18rem" }}>
								<img src={`https://starwars-visualguide.com/assets/img/planets/${element.uid}.jpg`} onError={(e) => {
									e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
								}} className="card-img-top" alt={`${element.name}`} />
								<div className="card-body">
									<h5 className="card-title">{element.name}</h5>
									<p className="card-text"></p>
									<div className="d-flex justify-content-between">
										<Link type="button" className="btn btn-primary" to={`/planet/${element.uid}`}>Learn more!</Link>
										<button className="btn btn-outline-warning" onClick={() => handleFavorites(element.uid, element.name, element.url, "planet")}>
											<i className="fa fa-heart text-outline-warning" />
										</button>
									</div>
								</div>
							</div>
						);
					})
				}
			</div>



			<h1 className="text-danger ms-3">Vehicles</h1>
			<div className="d-flex w-100 overflow-auto scroll-horizontal">
				{
					store.starWarsVehicles.map((element, index) => {
						return (
							<div className="card mx-3" style={{ "minWidth": "18rem" }}>
								<img src={`https://starwars-visualguide.com/assets/img/vehicles/${element.uid}.jpg`} className="card-img-top" alt={`${element.name}`} />
								<div className="card-body">
									<h5 className="card-title">{element.name}</h5>
									<p className="card-text"></p>
									<div className="d-flex justify-content-between">
										<Link type="button" className="btn btn-primary" to={`/vehicle/${element.uid}`}>Learn more!</Link>
										<button className="btn btn-outline-warning" onClick={() => handleFavorites(element.uid, element.name, element.url, "vehicle")}>
											<i className="fa fa-heart text-outline-warning" />
										</button>
									</div>
								</div>
							</div>
						);
					})
				}
			</div>
		</div>
	);
}
