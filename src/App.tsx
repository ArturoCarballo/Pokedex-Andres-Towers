import React from 'react';
import './App.css';
import Keyboard from './components/Keyboard/Keyboard';

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
      <Keyboard></Keyboard>
    </div>
  );
}

export default App;
*/
