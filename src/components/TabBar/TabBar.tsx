import React, { useState } from 'react';

function TabBar() {
    const [activeTab, setActiveTab] = useState<number>(1);

    const handleTabChange = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };

    return (
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
    );
}

export default TabBar;
