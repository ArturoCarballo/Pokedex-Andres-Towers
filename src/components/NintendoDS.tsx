import React from 'react';
import ArrowButton from './arrowbutton';

class NintendoDS extends React.Component {
  render() {
    return (
      <div className="nintendo-ds">
        <div className="top-screen">
          {/* Contenido de la pantalla superior, pokedex */}
        </div>
        <div className="bottom-screen">
          {/* Contenido de la pantalla inferior, stats */}
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
        </div>
        
          
        
      
    );
  }
}

export default NintendoDS;
