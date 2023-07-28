import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BookGrid from "./BookGrid";
import PropTypes from "prop-types";

const SearchBook = ({shelvedBooks, allBooks, moveShelves, searchAllBooks}) => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const updateQuery = (query) => {
      setQuery(query);
      searchAllBooks(query);
      
    }

    const setShelves = () => {
      // Loop through search results (allBooks) and verify if any of the books are shelved (shelvedBooks)
      // If book is shelved, set its shelf; otherwise, set shelf to "none"
      if(allBooks && shelvedBooks) {
        allBooks.forEach(searchedBook => {
          let found = false;
          shelvedBooks.forEach(shelvedBook => {
            if (shelvedBook.id === searchedBook.id) {
              found = true;
              searchedBook.shelf = shelvedBook.shelf;
            } 
          })
          if(!found) {
            searchedBook.shelf = "none";
          }
        });
      }
      setSearchResults(allBooks);
    }

    // When all books is updated, update the shelves as well
    useEffect(() => {
      setShelves();
    });

    // Set search results to empty on the first page load
    // useEffect(() => {
    //   setSearchResults([]);
    // }, []);

    return (
        <div className="search-books">
      <div className="search-books-bar">
        <Link
          to="/"
          className="close-search"
        />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
            <BookGrid books={searchResults} moveShelves={moveShelves}/>
        </ol>
      </div>
    </div>
    );
}

SearchBook.propTypes = {
  shelvedBooks: PropTypes.array.isRequired,
  allBooks: PropTypes.array.isRequired,
  moveShelves: PropTypes.func.isRequired,
  searchAllBooks: PropTypes.func.isRequired
};

export default SearchBook;