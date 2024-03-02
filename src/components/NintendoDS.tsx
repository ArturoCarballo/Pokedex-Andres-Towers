import React from 'react';
import { useState } from "react";
import SearchBar from './SearchBar/SearchBar';
import Keyboard from './Keyboard/Keyboard';
import TabBar from './TabBar/TabBar';
import AbxyButtons from './Buttons/AbxyButtons';
import DPad from './Buttons/DPad';
import PkmDisplay from './PkmDisplay/PkmDisplay';
import Speaker from './Speaker';

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
    <div className="flex flex-col items-center justify-center h-screen my-5" style={{ maxHeight: 'calc(100vh - 3rem)' }}>
      {/* Pantalla Superior */}
      <div className="top parteSuperior bg-gray-900 w-[50%] h-[50%] border-solid border-black border-8 rounded-t-[70px]  flex justify-center items-center">
        <Speaker />
        <div className='pantallaSuperior bg-white w-[70%] h-[85%] border-solid border-black border-8 rounded-lg m-auto flex'>
          <div className='left-panel flex-1 border-r border-gray-400'>
            <PkmDisplay />
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
          <div className='bottom-col bottom-screen bg-white w-[60%] h-[90%] border-solid border-black border-8 rounded-b-lg m-auto'>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}></SearchBar>
            <Keyboard handleClick={handleKeyPress} ></Keyboard>
          </div>
          <AbxyButtons />
        </div>
      </div>
    </div>



  );
}

export default NintendoDS;
