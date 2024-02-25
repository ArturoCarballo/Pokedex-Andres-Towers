import React from 'react';
import './App.css';
//import Button from './components/Button';

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

  function aumentar() {
    setContador(contador+1);
    console.log(contador)
  }

  function disminuir() {
    setContador(contador-1);
    console.log(contador)
  }
  return (
    <div className="App">
      <h1>HELLO WORLD {contador}</h1>
      <Button onClick={aumentar} label='Aumentar' color='blue'></Button>
      <Button onClick={disminuir} label='Disminuir' color='red'></Button>
    </div>
  );
}

export default App;
*/