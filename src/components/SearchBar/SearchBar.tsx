interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
<<<<<<< Updated upstream
  }

  const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
      return (
          <div>
              <input
                  className="appearance-none bg-slate-100 rounded-full shadow-xl text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500"
                  type="text"
                  placeholder="Search..."
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
              />
          </div>
      );
  };

  export default SearchBar;
=======
    onSearch: () => void;
    setPokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>; // Add this
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, onSearch, setPokemon }) => {
    function buscar() {
        PokeApi.getPokemonById(searchTerm).then((response) => {
            setPokemon(response.data); // Use setPokemon from props
        }).catch((error) => {
            console.error(error);
            setPokemon(null); // Handle error case
        });
    }

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
                onClick={() => buscar()}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
>>>>>>> Stashed changes
