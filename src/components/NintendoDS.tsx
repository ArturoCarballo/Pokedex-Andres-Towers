import React from 'react';
import { useState } from "react";
import ArrowButton from './arrowbutton';
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
          <ArrowButton direction="up" onClick={() => console.log('Up button clicked')} />
          <div>
            <ArrowButton direction="left" onClick={() => console.log('Left button clicked')} />
            <ArrowButton direction="right" onClick={() => console.log('Right button clicked')} />
          </div>
          <ArrowButton direction="down" onClick={() => console.log('Down button clicked')} />
        </div>
      </div>
      <div className="bottom-screen">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}></SearchBar>
        <Keyboard handleClick={handleKeyPress} ></Keyboard>
      </div>

    </div>
  );
}

export default NintendoDS;
