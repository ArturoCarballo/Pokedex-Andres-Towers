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

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch("your-api-url");
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, []); // Empty dependency array to run this effect only once when the component mounts

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
