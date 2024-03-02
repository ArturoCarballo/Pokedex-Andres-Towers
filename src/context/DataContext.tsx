import React, { createContext, ReactNode, useState, useEffect } from "react";
import { Pokemon } from "../models/Pokemon";

// Define the context interface
interface IDataContext {
    pokemon: Pokemon | null;
    setPokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>;
}

export const DataContext = createContext<IDataContext | null>(null);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    const values: IDataContext = {
        pokemon,
        setPokemon,
    };
    
    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    );
};
