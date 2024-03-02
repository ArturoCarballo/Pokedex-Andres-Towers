import { PokeApi } from "../../api/PokeApi";
import { Pokemon } from "../../models/Pokemon";
import React, { useState } from "react";

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, onSearch }) => {
    const [pokemonName, setPokemonName] = React.useState('');
    const [pokemon, setPokemon] = React.useState<Pokemon | null>(null);

    function buscar() {
        console.log("buscar")
        PokeApi.getPokemonById(pokemonName).then((response) => {
            setPokemon(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <div className="flex">
            <input
                className="appearance-none bg-gray-900 rounded-lg text-white py-2 px-2 w-full"
                type="text"
                placeholder="Search..."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setPokemonName(e.target.value)}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
                type="button"
                onClick={() => buscar()}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
