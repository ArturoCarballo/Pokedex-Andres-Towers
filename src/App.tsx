import React from 'react';
import './App.css';

import NintendoDS from './components/NintendoDS';

import MouseTracker from './components/Widgets/MouseTracker';

import { DataProvider } from './context/DataContext';

class App extends React.Component {
  render() {
    return (
      <div className="app background">
        {/* Otros componentes de tu aplicación */}
        <DataProvider>
          <MouseTracker />
          <NintendoDS />
        </DataProvider>
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
