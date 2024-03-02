import React, { useContext } from 'react';
import { Pokemon } from '../../models/Pokemon';


interface PokemonComponentProps {
    pokemon: Pokemon
}

const PkmDisplay = (props: PokemonComponentProps) => {
    return (
        <div className="left-panel-content flex flex-col justify-start items-center h-full">
            <div className="title-box bg-gray-900 rounded-lg p-2 mt-1">
                <h2 className="text-center text-white">Pokemon</h2>
            </div>
            <div className="pokemon-image" >
                <img src={props.pokemon.sprites.other["official-artwork"].front_default} alt="pokemon" />
            </div>
        </div>
    );
}

export default PkmDisplay;
