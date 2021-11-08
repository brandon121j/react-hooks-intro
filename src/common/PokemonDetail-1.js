import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PokemonDetail = (props) => {
	const [pokemon, setPokemon] = useState({});

	useEffect(async () => {
		try {
			let payload = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`
			);
			setPokemon(payload.data);
			console.log(pokemon);
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div>
			<h3>{pokemon.name}</h3>
			<img src={pokemon.sprites.front_default} alt="image" />
			<h4>Abilities</h4>
			{pokemon.abilities.map((item) => {
				return <li key={item.ability.name}>{item.ability.name}</li>;
			})}
			<div style={{ padding: '15px' }}>
				<Link to="/">
					<button>Go Back</button>
				</Link>
			</div>
		</div>
	);
};
