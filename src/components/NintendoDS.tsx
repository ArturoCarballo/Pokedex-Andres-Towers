import React from 'react';
import { useState } from "react";
import ArrowButton from './arrowbutton';
import SearchBar from './SearchBar/SearchBar';
import Keyboard from './Keyboard/Keyboard';
<<<<<<< Updated upstream
=======
import TabBar from './TabBar/TabBar';
import AbxyButtons from './Buttons/AbxyButtons';
import DPad from './Buttons/DPad';
import PkmDisplay from './PkmDisplay/PkmDisplay';
import Speaker from './Speaker';
import { Pokemon } from '../models/Pokemon';
import { PokeApi } from '../api/PokeApi';
>>>>>>> Stashed changes

const NintendoDS: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [pokemonName, setPokemonName] = React.useState('');

  const handleKeyPress = (label: string) => {
    if (label === "del") {
      setSearchTerm((prev: string) => prev.slice(0, -1))
    } else {
      setSearchTerm((prev: string) => prev + label);
    }
  };

<<<<<<< Updated upstream
  return (
    <div className="flex items-center justify-center">
      <div className="top-screen">
        {/* Contenido de la pantalla superior, pokedex */}
      </div>
      <div className="controller">
        {/* Botones direccionales LB corner */}
        <div className="directional-pad">
          <ArrowButton direction="up" onClick={() => console.log('Up button clicked')} />
          <div>
            <ArrowButton direction="left" onClick={() => console.log('Left button clicked')} />
            <ArrowButton direction="right" onClick={() => console.log('Right button clicked')} />
=======
  const onSearch = () => {
    PokeApi.getPokemonById(pokemonName).then((response) => {
      setPokemon(response.data); // Use setPokemon from props
    }).catch((error) => {
      console.error(error);
      setPokemon(null); // Handle error case
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen my-5" style={{ maxHeight: 'calc(100vh - 3rem)' }}>
      {/* Pantalla Superior */}
      <div className="top parteSuperior bg-gray-900 w-[50%] h-[50%] border-solid border-black border-8 rounded-t-[70px]  flex justify-center items-center">
        <Speaker />
        <div className='pantallaSuperior display-background bg-white w-[70%] h-[85%] border-solid border-black border-8 rounded-lg m-auto flex'>
          <div className='left-panel flex-1 border-r border-gray-400'>
            <PkmDisplay pokemon={pokemon} />
          </div>
          <div className='right-panel flex-1'>
            <TabBar pokemon={pokemon}/>
>>>>>>> Stashed changes
          </div>
          <ArrowButton direction="down" onClick={() => console.log('Down button clicked')} />
        </div>
      </div>
      <div className="bottom-screen">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}></SearchBar>
        <Keyboard handleClick={handleKeyPress} ></Keyboard>
      </div>

<<<<<<< Updated upstream
=======
      </div>
      {/* Sección Central */}
      <div className="middle bg-gray-800 w-[51%] h-[05%] border-solid border-black border-8 relative rounded-full"></div>
      {/* Pantalla Inferior */}
      <div className="bottom bg-sky-700 w-[50%] h-[50%] border-solid border-black border-8 rounded-b-[70px] shadow-2xl">
        <div className='bottom-container'>
          <DPad/>
          <div className='relative bottom-col bottom-screen bg-white w-[60%] h-[90%] border-solid border-black border-8 rounded-b-lg m-auto'>
            <div className='absolute bottom-0 right-0 left-0'>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={onSearch} setPokemon={setPokemon}></SearchBar>
              <Keyboard handleClick={handleKeyPress} ></Keyboard>
            </div>
          </div>
          <AbxyButtons />
        </div>
      </div>
>>>>>>> Stashed changes
    </div>
  );
}

export default NintendoDS;
