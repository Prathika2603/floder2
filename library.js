class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.borrowed = false;
    }
  }
  

  const library = [];
  

  function addBook(title, author) {
    const newBook = new Book(title, author);
    library.push(newBook);
  }
  
 
  function borrowBook(title) {
    const book = library.find(book => book.title === title);
  
    if (book && !book.borrowed) {
      book.borrowed = true;
      console.log(`You have borrowed "${title}".`);
    } else {
      console.log(`"${title}" is either not available or already borrowed.`);
    }
  }
  

  function returnBook(title) {
    const book = library.find(book => book.title === title);
  
    if (book && book.borrowed) {
      book.borrowed = false;
      console.log(`You have returned "${title}".`);
    } else {
      console.log(`"${title}" was not borrowed from this library.`);
    }
  }
  
 
  function listBooks() {
    if (library.length === 0) {
      console.log("The library is empty.");
    } else {
      console.log("Books in the library:");
      library.forEach(book => {
        console.log(`"${book.title}" by ${book.author} (${book.borrowed ? 'Borrowed' : 'Available'})`);
      });
    }
  }
  

  addBook("The Hobbit", "J.R.R. Tolkien");
  addBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling");
  borrowBook("The Hobbit");
  listBooks();
  returnBook("The Hobbit");
  listBooks();