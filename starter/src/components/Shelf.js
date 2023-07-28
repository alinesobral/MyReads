import PropTypes from "prop-types";
import BookGrid from "./BookGrid";

//shelf: wantToRead, currentlyReading, read
const Shelf = ({books, shelf, moveShelves}) => {
    // If a shelf value is sent, filter by shelf; otherwise, show all books
    const booksInShelf = shelf ? books.filter((b) => b.shelf === shelf) : books;

    const shelfTitle = {
        wantToRead: "Want To Read",
        currentlyReading: "Currently Reading",
        read: "Read"
    }

    return ( 
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle[shelf]}</h2>
            <BookGrid books={booksInShelf} moveShelves={moveShelves}/>
        </div>
    );
}

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    moveShelves: PropTypes.func.isRequired
};

export default Shelf;