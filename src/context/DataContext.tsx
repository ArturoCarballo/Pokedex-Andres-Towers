import React, { createContext, ReactNode, useState } from "react";

interface IDataContext {
    pokemon: any;
    setPokemon: React.Dispatch<React.SetStateAction<any>>;
}

export const DataContext = createContext<IDataContext | null>(null);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [pokemon, setPokemon] = useState<any>(null);

    const values: IDataContext = {
        pokemon,
        setPokemon
    };
    
    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    );
};
