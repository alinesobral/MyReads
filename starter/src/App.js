import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Shelf from "./components/Shelf";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchBook from "./components/SearchBook";

function App() {
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  const searchAllBooks = async (query) => {
    // If search bar has a value
    if (query !== "") {
      await BooksAPI.search(query, 20).then((res) => {
        //console.log(res);
        if (!(res.hasOwnProperty('error'))) {
          const results = res.filter(b => {
            // filter out books with no thumbnails
            if(!("imageLinks" in b && b.imageLinks != null)) {
              return false;
            }

            // set the authors as an empty array for books with no authors
            if(!(b.hasOwnProperty('authors')))  
            {
              b.authors = [];
            } 

            return true;
          })
          setAllBooks(results);
        } else {
          setAllBooks([]);
        }
      });
      
    } else { // If search bar is empty
      console.log("empty query")
      setAllBooks([]);
    }
  }

  const moveShelves = (book, newShelf) => {
    const move = async () => {
      // Update Book Shelf
      await BooksAPI.update(book, newShelf);
      book.shelf = newShelf;
      const newBooks = await BooksAPI.getAll();
      setBooks(newBooks);
    };

    move();
  }

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();

   },[]);

  return (
    <Routes>
      <Route
      exact 
      path="/" 
      element={
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div>
          <Shelf books={books} shelf={"currentlyReading"} moveShelves={moveShelves}/>
          <Shelf books={books} shelf={"wantToRead"} moveShelves={moveShelves}/>
          <Shelf books={books} shelf={"read"} moveShelves={moveShelves}/>
        </div>
        <Link to="/search" className="open-search" onClick={() => setAllBooks([])}>
          <span>Add a book</span>
        </Link>
      </div>
    }/>
      <Route
      exact 
      path="/search" 
      element={<SearchBook shelvedBooks={books} allBooks={allBooks} moveShelves={moveShelves} searchAllBooks={searchAllBooks}/>}/>

    </Routes>
    
  );
}

export default App;
