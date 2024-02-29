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
    <div className="flex flex-col items-center justify-center h-screen my-5" style={{ maxHeight: 'calc(100vh - 3rem)' }}>
  {/* Pantalla Superior */}
  <div className="parteSuperior bg-gray-900 w-[50%] h-[50%] border-solid border-black border-8 rounded-t-[70px]">
    <div className='pantallaSuperior bg-white w-[70%] h-[80%] border-solid border-black border-8 rounded-lg m-auto'></div>
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
