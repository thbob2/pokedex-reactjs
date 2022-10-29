import React from 'react';
import './index.css';

const Pokecard = () => {
	// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
	const POKE_API =
		'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
	const shiftRight = (number) =>
		number <= 999 ? `00${number}`.slice(-3) : number;

	return <div></div>;
};

export default Pokecard;
