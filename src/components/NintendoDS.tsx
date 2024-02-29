import React from 'react';
import { useState } from "react";
import ArrowButton from './Arrowbutton';
import SearchBar from './SearchBar/SearchBar';
import Keyboard from './Keyboard/Keyboard';


const NintendoDS: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleKeyPress = (label: string) => {
    if (label === "del") {
      setSearchTerm((prev: string) => prev.slice(0, -1))
    } else {
      setSearchTerm((prev: string) => prev + label);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="top-screen">
        {/* Contenido de la pantalla superior, pokedex */}
      </div>
      <div className="controller">
        {/* Botones direccionales LB corner */}
        <div className="directional-pad">
        <ArrowButton direction="" onClick={() => console.log('Up button clicked')} /> 
          <ArrowButton direction="up" onClick={() => console.log('Up button clicked')} /> 
          <ArrowButton direction="" onClick={() => console.log('Up button clicked')} /> 
          <ArrowButton direction="left" onClick={() => console.log('Left button clicked')} />
          <ArrowButton direction="" onClick={() => console.log('Left button clicked')} />
          <ArrowButton direction="right" onClick={() => console.log('Right button clicked')} />
          <ArrowButton direction="" onClick={() => console.log('Down button clicked')} />
          <ArrowButton direction="down" onClick={() => console.log('Down button clicked')} />
          <ArrowButton direction="" onClick={() => console.log('Down button clicked')} />
        </div>
      </div>
      <div className="bottom-screen">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}></SearchBar>
        <Keyboard handleClick={handleKeyPress} ></Keyboard>
      </div>

  {/* Sección Central */}
  <div className="bg-gray-800 w-[51%] h-[05%] border-solid border-black border-8 relative rounded-full">

  </div>

  {/* Pantalla Inferior */}
  <div className="bg-sky-700 w-[50%] h-[50%] border-solid border-black border-8 rounded-b-[70px] shadow-2xl">
    <div className='pantallaInferior bg-white w-[60%] h-[90%] border-solid border-black border-8 rounded-b-lg m-auto'></div>
  </div> 
</div>


  
  );
}

export default NintendoDS;
