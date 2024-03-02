import React from 'react';

const PkmDisplay = () => {
    return (
        <div className="left-panel-content flex flex-col justify-start items-center h-full">
            <div className="title-box bg-gray-900 rounded-lg p-2 mt-1">
                <h2 className="text-center text-white">Pokemon</h2>
            </div>
            <div className="pokemon-image" >
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1025.png" />
            </div>
        </div>
    );
}

export default PkmDisplay;
