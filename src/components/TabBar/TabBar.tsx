import React, { useState } from 'react';
import { Pokemon } from '../../models/Pokemon';

interface TabBarProps {
    pokemon: Pokemon | null;
}

const TabBar: React.FC<TabBarProps> = ({ pokemon }) => {
    const [activeTab, setActiveTab] = useState<number>(1);
    if (!pokemon) return <div>No Pokemon selected</div>;


    const handleTabChange = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };

    return (
        <div>
            <div className="flex justify-center items-center bg-white-200 py-0.5 rounded-md">
                <button
                    className={`px-4 py-2 rounded-l-md ${activeTab === 1 ? 'bg-sky-700 text-black' : 'bg-gray-900 text-white'}`}
                    onClick={() => handleTabChange(1)}
                >
                    Type
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === 2 ? 'bg-sky-700 text-black' : 'bg-gray-900 text-white'}`}
                    onClick={() => handleTabChange(2)}
                >
                    Stats
                </button>
                <button
                    className={`px-4 py-2 rounded-r-md ${activeTab === 3 ? 'bg-sky-700 text-black' : 'bg-gray-900 text-white'}`}
                    onClick={() => handleTabChange(3)}
                >
                    Moves
                </button>
            </div>
            <div className="mt-4">
                {activeTab === 1 && (
                    <ul className='pokemon-info max-w-md space-y-1 text-black-500 list-disc list-inside dark:text-black-400'>
                        {pokemon.types.map((types, index) => {
                            return (
                                <li key={index}>
                                    {types.type.name}
                                </li>
                            )
                        })}
                    </ul>
                )}
                {activeTab === 2 && (
                    <ul className='pokemon-info max-w-md space-y-1 text-black-500 list-disc list-inside dark:text-black-400'>
                        {pokemon.stats.map((stats, index) => {
                            return (
                                <li key={index}>
                                    {stats.stat.name}: {stats.base_stat}
                                </li>
                            )
                        })}
                    </ul>
                )}
                {activeTab === 3 && (
                    <ul className='pokemon-info max-w-md space-y-1 text-black-500 list-disc list-inside dark:text-black-400'>
                        {pokemon.moves.map((move, index) => {
                            return (
                                <li key={index}>
                                    {move.move.name}
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default TabBar;
