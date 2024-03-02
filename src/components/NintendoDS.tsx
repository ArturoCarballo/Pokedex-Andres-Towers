import React from 'react';
import { useState, useContext } from "react";
import SearchBar from './SearchBar/SearchBar';
import Keyboard from './Keyboard/Keyboard';
import TabBar from './TabBar/TabBar';
import AbxyButtons from './Buttons/AbxyButtons';
import DPad from './Buttons/DPad';
import PkmDisplay from './PkmDisplay/PkmDisplay';
import Speaker from './Speaker';
import { DataContext } from '../context/DataContext';
import { PokeApi } from '../api/PokeApi';
import { Pokemon } from '../models/Pokemon';

const NintendoDS: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemon, setPokemon] = React.useState<Pokemon | null>(null);

  const handleKeyPress = (label: string) => {
    if (label === "del") {
      setSearchTerm((prev: string) => prev.slice(0, -1))
    } else {
      setSearchTerm((prev: string) => prev + label);
    }
  };

  const onSearch = () => {
    console.log("Searching for:", searchTerm);
    PokeApi.getPokemonById(searchTerm).then((response) => {
        setPokemon(response.data);

        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    });
  };

  // const { pokemon } = useContext(DataContext)!;

  return (
    <div className="flex flex-col items-center justify-center h-screen my-5" style={{ maxHeight: 'calc(100vh - 3rem)' }}>
      {/* Pantalla Superior */}
      <div className="top parteSuperior bg-gray-900 w-[50%] h-[50%] border-solid border-black border-8 rounded-t-[70px]  flex justify-center items-center">
        <Speaker />
        <div className='pantallaSuperior display-background bg-white w-[70%] h-[85%] border-solid border-black border-8 rounded-lg m-auto flex'>
          <div className='left-panel flex-1 border-r border-gray-400'>
            {pokemon &&
              <PkmDisplay pokemon={pokemon} />
            }

          </div>
          <div className='right-panel flex-1'>
            <TabBar />
          </div>
        </div>
        <Speaker />

      </div>
      {/* Sección Central */}
      <div className="middle bg-gray-800 w-[51%] h-[05%] border-solid border-black border-8 relative rounded-full"></div>
      {/* Pantalla Inferior */}
      <div className="bottom bg-sky-700 w-[50%] h-[50%] border-solid border-black border-8 rounded-b-[70px] shadow-2xl">
        <div className='bottom-container'>
          <DPad />
          <div className='relative bottom-col bottom-screen bg-white w-[60%] h-[90%] border-solid border-black border-8 rounded-b-lg m-auto'>
            <div className='absolute bottom-0 right-0 left-0'>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={onSearch}></SearchBar>
              <Keyboard handleClick={handleKeyPress} ></Keyboard>
            </div>
          </div>
          <AbxyButtons />
        </div>
      </div>
    </div>
  );
}

export default NintendoDS;
