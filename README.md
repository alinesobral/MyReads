# MyReads App

This is the final assessment project for Udacity's React Fundamentals course. The MyReads app allows you to categorize books into three shelves: Currently Reading, Want To Read and Read. It also allows you to search for books (from the APIs in BooksAPI.js) and assign shelves to them on the search page itself. Assigning the shelf called "None" to a book removes it from the shelves shown in the main page. However, the book would still be searchable in the search page.

## TL;DR

To start the MyReads app:

- install all project dependencies with `npm install`
- start the development server with `npm start`
- access http://localhost:3000 on your preferred browser
- assign shelves to books
- search books

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html
└── src
    ├── components
        ├── BookGrid.js # BookGrid component, renders the book grid
        ├── SearchBook.js # SearchBook component, has BookGrid as its child
        ├── Shelf.js # Shelf component, has BookGrids as its children
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # The images
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # Used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
