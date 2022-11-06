import React from 'react';
import './index.css';

const Pokecard = (props) => {
	// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
	const POKE_API =
		'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
	const shiftRight = (number) =>
		number <= 999 ? `00${number}`.slice(-3) : number;
	const pokeImage = `${POKE_API}${shiftRight(props.id)}.png`;

	return (
		<div>
			<div className="Pokecard">
				<h1 className="Pokecard-title">{props.name}</h1>
				<div className="Pokecard-image">
					<img src="{pokeImage}" alt="{props.name}" />
				</div>
				<div className="Pokecard-data">Type: {props.type}</div>
				<div className="Pokecard-data">EXP: {props.exp}</div>
			</div>
		</div>
	);
};

export default Pokecard;
