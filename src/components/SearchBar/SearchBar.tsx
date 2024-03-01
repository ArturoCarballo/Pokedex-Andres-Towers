interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  }

  const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
      return (
          <div>
              <input
                  className="appearance-none bg-gray-900 rounded-lg text-white py-2 px-2 w-full"
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
