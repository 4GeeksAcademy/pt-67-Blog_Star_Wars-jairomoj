const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starWarsCharacters: [],
			starWarsCharacterDetails: {},

			starWarsPlanets: [],
			starWarsPlanetDetails: {},

			starWarsVehicles: [],
			starWarsVehicleDetails: {},

			favoritesList: []
		},
		actions: {
			getAllCharacters: async () => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people`);

					const data = await response.json();

					if (data.results)
						setStore({ ...getStore(), starWarsCharacters: data.results});

				} catch (error) {
					alert("Hubo un error al recuperar los datos de los personajes: " + error);
					console.error(error);
				}
			},

			getCharacterDetails: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`);

					const data = await response.json();

					if (data.result)
						setStore({ ...getStore(), starWarsCharacterDetails: data.result.properties});

				} catch (error) {
					alert("Hubo un error al recuperar los detalles del personaje: " + error);
					console.error(error);
				}
			},

			getAllPlanets: async () => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets`);

					const data = await response.json();

					if (data.results)
						setStore({ ...getStore(), starWarsPlanets: data.results});

				} catch (error) {
					alert("Hubo un error al recuperar los datos de los planetas: " + error);
					console.error(error);
				}
			},

			getPlanetDetails: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);

					const data = await response.json();

					if (data.result)
						setStore({ ...getStore(), starWarsPlanetDetails: data.result.properties});

				} catch (error) {
					alert("Hubo un error al recuperar los detalles del planeta: " + error);
					console.error(error);
				}
			},

			getAllVehicles: async () => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles`);

					const data = await response.json();

					if (data.results)
						setStore({ ...getStore(), starWarsVehicles: data.results});

				} catch (error) {
					alert("Hubo un error al recuperar los datos de los vehículos: " + error);
					console.error(error);
				}
			},

			getVehicleDetails: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);

					const data = await response.json();

					if (data.result)
						setStore({ ...getStore(), starWarsVehicleDetails: data.result.properties});

				} catch (error) {
					alert("Hubo un error al recuperar los detalles del vehículo: " + error);
					console.error(error);
				}
			},

			addFavorites: (uid, name, url, type) => {
				const newFavorite = { uid: uid, name: name, url: url, type: type };

				setStore({ ...getStore(), favoritesList: [ ...getStore().favoritesList, newFavorite]});
			},

			getFavorites: () => {
				return getStore().favoritesList;
			},

			deleteFavorites: (index) => {
				const { favoritesList } = getStore();
				const newFavorite = favoritesList.filter((element, i) => i != index);

				setStore({ ...getStore(), favoritesList: newFavorite});

				console.log([favoritesList]);
			}
		}
	};
};

export default getState;
