interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, onSearch }) => {
    return (
        <div className="flex">
            <input
                className="appearance-none bg-gray-900 rounded-lg text-white py-2 px-2 w-full"
                type="text"
                placeholder="Search..."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
                type="button"
                onClick={() => onSearch()}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
