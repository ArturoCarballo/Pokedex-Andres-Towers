interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
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
