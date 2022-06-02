//Will search our through our recipes by the ingredients in the search bar
function Search() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <label htmlFor="header-search">
        <span style={{ color: "red" }}>Search Recipes</span>
      </label>
      <form className="searchbar" onClick={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="search free stuff"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">SEARCH</button>
      </form>
    </>
  );
}

export default Search;
