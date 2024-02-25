import React from 'react';
import logo from './logo.svg';
import './App.css';
import Keyboard from './components/Keyboard/Keyboard';

function App() {
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
