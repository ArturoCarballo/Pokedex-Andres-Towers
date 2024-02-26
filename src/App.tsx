import React from 'react';
import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Keyboard from './components/Keyboard/Keyboard';
import SearchBar from './components/SearchBar/SearchBar';
import { LanguageVariant } from 'typescript';

import NintendoDS from './components/NintendoDS';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* Otros componentes de tu aplicación */}
        <NintendoDS />
        {/* Otros componentes de tu aplicación */}
      </div>
    );
  }
}

export default App;
/*function App() {
  const [contador, setContador] = React.useState(0);

  const handleKeyPress = (label: string) => {
    if (label === "del") {
      setSearchTerm((prev: string) => prev.slice(0, -1))
    } else {
      setSearchTerm((prev: string) => prev + label);
    }
  };
  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}></SearchBar>
      <Keyboard handleClick={handleKeyPress} ></Keyboard>
    </div>
  );
}

export default App;
*/
