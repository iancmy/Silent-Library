function uuidv4() {
  return ([1e7] + -1e3).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

export default class User {
  constructor(
    firstName,
    lastName,
    email,
    password,
    isAdmin = false,
    books = [],
    wishlist = [],
    id = uuidv4()
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.books = books;
    this.wishlist = wishlist;
    this.isAdmin = isAdmin;
    this.id = id;
  }
}
