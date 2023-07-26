import PropTypes from "prop-types";

const BookGrid = ({books, moveShelves}) => {
    
    return (
        <div className="bookshelf-books">
        <ol className="books-grid">
                {books.map((book) => (
                    <li key={book.id}>
                        <div className="book">
                        <div className="book-top">
                        <div
                                className="book-cover"
                                style={{
                                width: 128,
                                height: 193,
                                backgroundImage:
                                    `url(${book.imageLinks.smallThumbnail})`,
                                }}
                            ></div>
                            <div className="book-shelf-changer">
                                <select value={book.shelf} onChange={(e) => moveShelves(book, e.target.value)}>
                                <option disabled>
                                    Move to...
                                </option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {book.authors.map((author) => (
                            <div key={author} className="book-authors">{author}</div>
                        ))}
                    </li>
                ))}
            </ol>
            </div>
    );
}

BookGrid.propTypes = {
    books: PropTypes.array.isRequired,
    moveShelves: PropTypes.func.isRequired
};

export default BookGrid;