import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Pokemon = () => {
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(async() => {
		fetchPokemon();
	}, [])

	async function fetchPokemon() {
		try {
			let payload = await axios.get(
				'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
			);

			setPokemonList(payload.data.results);
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<div className="App">
			{pokemonList.map((item) => {
				return (
					<Link to={`/fetch-pokemon/${item.name}`}>
						<div key={item.name}>
							<Link to={`fetch-pokemon/${item.name}`}>{item.name}</Link>
						</div>
					</Link>
				);
			})}
		</div>
	);
};
