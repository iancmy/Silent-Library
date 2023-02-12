export default class Book {
  constructor(
    title,
    author,
    genre = [],
    description,
    imgUrl = {
      thumbnail: "./img/default-book-cover.webp",
    },
    inventoryCount = 0,
    isTrending = false,
    isRecommended = false,
    id = Date.now()
  ) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.description = description;
    this.imgUrl = imgUrl;
    this.inventoryCount = inventoryCount;
    this.isTrending = isTrending;
    this.isRecommended = isRecommended;
    this.id = id;
  }
}
