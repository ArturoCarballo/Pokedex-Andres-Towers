import React from 'react';
import { Pokemon } from '../../models/Pokemon';

interface PkmDisplayProps {
    pokemon: Pokemon | null;
  }

  const PkmDisplay: React.FC<PkmDisplayProps> = ({ pokemon }) => {
    if (!pokemon) return <div>No Pokemon selected</div>;
  
    return (
        <div className="left-panel-content flex flex-col justify-start items-center h-full">

        <div className="title-box bg-gray-900 rounded-lg p-2 mt-1">

            <h2 className="text-center text-white">{pokemon.name}</h2>

        </div>

        <div className="pokemon-image" >

            <img src={pokemon.sprites.other["official-artwork"].front_default} alt="pokemon" />

        </div>

    </div>
    );
  };

export default PkmDisplay;
