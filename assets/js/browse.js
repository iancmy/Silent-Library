import booksArray from "./initialize.js";

const sortButtons = $("#sort-buttons > *");
const browseResultsContainer = $("#browse-results");

/**
 * Initialization:
 *  > add class "toggled" to sort button based on link
 *  > append remove toggled sort button to #sort-buttons
 *  > append books based on initially toggled sort button
 *
 */
if (location.hash !== "#bygenre") {
  $(location.hash).addClass("toggled");
} else {
  $("#bygenre").val("fantasy");
  $("#bygenre").addClass("toggled");
}

if ($(".toggled").length) {
  $("#sort-buttons").append(
    '<a href=""><i class="fa-regular fa-circle-xmark"></i></a>'
  );

  $("#sort-buttons > a").on("click", removeToggle);
}

const initialBooks = localStorage.getItem("books")
  ? () => {
      const books = JSON.parse(localStorage.getItem("books"));
      return location.hash.slice(1) === "bygenre"
        ? sortBooks("bygenre", "fantasy", books)
        : sortBooks(location.hash.slice(1), "", books);
    }
  : () => {
      localStorage.setItem("books", JSON.stringify(booksArray));

      const books = JSON.parse(localStorage.getItem("books"));

      return location.hash.slice(1) === "bygenre"
        ? sortBooks("bygenre", "fantasy", books)
        : sortBooks(location.hash.slice(1), "", books);
    };

browseResultsContainer.html(initialBooks);

// function to remove toggled sort
function removeToggle() {
  const prevToggled = $("#sort-buttons > .toggled");
  const removeToggleBtn = $("#sort-buttons > a");

  prevToggled.removeClass("toggled");
  removeToggleBtn.remove();
}

// function to create book elements
function createBookElement(bookObj) {
  function isAvailable() {
    return bookObj.inventoryCount > 0 ? true : false;
  }

  return `
    <div class="book-container">
      <div class="book-info">
        <img src="${bookObj.imgUrl.thumbnail}" alt="${bookObj.title} - ${
    bookObj.author
  } (ID: ${bookObj.id})" />
        <h3 class="title">${bookObj.title}</h3>
        <h4 class="author">${bookObj.author}</h4>
        <p class="description">
          ${bookObj.description}
        </p>
      </div>
      <button type="button" 
      class="button ${!isAvailable() ? "disabled" : "primary"}" 
      data-id="${bookObj.id}">${!isAvailable() ? "Unavailable" : "Borrow"}
      </button>
      <button type="button" class="button" data-id="${bookObj.id}">
      Add to Wishlist
      </button>
    </div>
  `;
}

// sort function
function sortBooks(sortId, genre, books) {
  let sortedBooks;

  switch (sortId) {
    case "bytitle":
      sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "byauthor":
      sortedBooks = books.sort((a, b) => a.author.localeCompare(b.author));
      break;
    case "trending":
      sortedBooks = books.filter((book) => book.isTrending);
      break;
    case "recommendations":
      sortedBooks = books.filter((book) => book.isRecommended);
      break;
    case "bygenre":
      sortedBooks = sortByGenre(genre, books);
      break;
    default:
      sortedBooks = books;
  }

  return sortedBooks
    .map((book) => createBookElement(book))
    .reduce((prev, curr) => {
      return prev + curr;
    });
}

// sort by genre function
function sortByGenre(genre, books) {
  switch (genre) {
    case "fantasy":
      return books.filter((book) => book.genre === "fantasy");
    case "scifi":
      return books.filter((book) => book.genre === "scifi");
    case "action&adventure":
      return books.filter((book) => book.genre === "action&adventure");
    case "mystery":
      return books.filter((book) => book.genre === "mystery");
    case "horror":
      return books.filter((book) => book.genre === "horror");
    case "romance":
      return books.filter((book) => book.genre === "romance");
    case "graphicnovel":
      return books.filter((book) => book.genre === "graphicnovel");
    case "shortstory":
      return books.filter((book) => book.genre === "shortstory");
    case "art&photog":
      return books.filter((book) => book.genre === "art&photog");
    case "selfhelp":
      return books.filter((book) => book.genre === "selfhelp");
    case "history":
      return books.filter((book) => book.genre === "history");
    case "science&tech":
      return books.filter((book) => book.genre === "science&tech");
    case "essays":
      return books.filter((book) => book.genre === "essays");
    case "children":
      return books.filter((book) => book.genre === "children");
  }
}

// click event listener for #sort-buttons
sortButtons.on("click", (e) => {
  const prevToggled = $("#sort-buttons > .toggled");
  const books = JSON.parse(localStorage.getItem("books"));
  let sortedBooks;

  if (!$("#sort-buttons > a").length) {
    $("#sort-buttons").append(
      '<a href=""><i class="fa-regular fa-circle-xmark"></i></a>'
    );

    $("#sort-buttons > a").on("click", removeToggle);
  }

  if (e.target.id !== "bygenre") {
    if (prevToggled.attr("id") === "bygenre") {
      prevToggled.val("");
      prevToggled.off("change");
    }

    prevToggled.removeClass("toggled");
    e.target.classList.add("toggled");

    // show sorted books in book-results section
    sortedBooks = sortBooks(e.target.id, "", books);
    return browseResultsContainer.html(sortedBooks);
  } else {
    e.target.addEventListener("change", () => {
      $("#sort-buttons > .toggled").removeClass("toggled");
      e.target.classList.add("toggled");

      // show sorted books in book-results section
      sortedBooks = sortBooks(e.target.id, e.target.value, books);
      return browseResultsContainer.html(sortedBooks);
    });
  }
});

// change event listener + logic for search
$("#search").on("input", (e) => {
  const books = JSON.parse(localStorage.getItem("books"));
  let sortedBooks;

  console.log("searching...");
});

// add logic for borrow button
// add logic for add to wishlist button
