import User from "./Users.js";

function createBookElement(bookId) {
  const books = JSON.parse(localStorage.getItem("books"));
  const bookObj = books.find((book) => book.id === bookId);

  return `
    <div class="book-container">
      <div>
        <img src="${bookObj.imgUrl.thumbnail}" alt="${bookObj.title} - ${bookObj.author} (ID: ${bookObj.id})" />
        <div>
          <div>
            <h2 class="title">${bookObj.title}</h2>
            <h3 class="author">${bookObj.author}</h3>
            <p class="description">${bookObj.description}</p>
          </div>
          <button type="button" class="button primary">Return</button>
        </div>
      </div>
    </div>
  `;
}

function createWishListElement(bookId) {
  const books = JSON.parse(localStorage.getItem("books"));
  const bookObj = books.find((book) => book.id === bookId);

  function isAvailable() {
    return bookObj.inventoryCount > 0 ? true : false;
  }

  return `
    <div class="wishlist-container">
      <div>
        <img src="${bookObj.imgUrl.thumbnail}" alt="${bookObj.title} - ${
    bookObj.author
  } (ID: ${bookObj.id})" />
        <div>
          <div>
            <h2 class="title">${bookObj.title}</h2>
            <h3 class="author">${bookObj.author}</h3>
            <p class="description">${bookObj.description}</p>
          </div>
          <button type="button" class="button ${
            !isAvailable() ? "disabled" : "primary"
          }" data-id="${bookObj.id}">${
    !isAvailable() ? "Unavailable" : "Borrow"
  }</button>
        </div>
      </div>
    </div>
  `;
}
function createUserElement(user) {
  return `
    <div class="user" data-user-id="${user.id}">
      <div class="user-info">
        <p class="id">${user.id}</p>
        <p class="firstName">${user.firstName}</p>
        <p class="lastName">${user.lastName}</p>
        <p class="email">${user.email}</p>
        <p class="password">${user.password}</p>
      </div>
      <ul class="crud-buttons">
        <li class="link"><a href="#" data-user-id="${user.id}" class="edit">Edit</a></li>
        <li class="link"><a class="danger delete" href="#" data-user-id="${user.id}">Delete</a></li>
      </ul>
    </div>
  `;
}

function getBooks(user) {
  const userBooks = user.books;
  const container = $("div.container.books");

  if (userBooks.length < 1) {
    return container.html("<h4>There's nothing here.</h4>");
  }

  container.html(
    userBooks
      .map((book) => createBookElement(book))
      .reduce((prev, curr) => {
        return prev + curr;
      })
  );
}

function getWishlist(user) {
  const userBooks = user.wishlist;
  const container = $("div.container.wishlist");

  if (userBooks.length < 1) {
    return container.html("<h4>There's nothing here.</h4>");
  }

  container.html(
    userBooks
      .map((book) => createWishListElement(book))
      .reduce((prev, curr) => {
        return prev + curr;
      })
  );
}

function listUsers(userArray) {
  userArray.forEach((user) => {
    const container = $("#users .container");
    const html = createUserElement(user);

    return container.append(html);
  });
}

function createUser(
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  formElement
) {
  const users = JSON.parse(localStorage.getItem("users"));
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const warningElement = $("<label class='warning'></label>");
  const container = $("#users .container");

  if (!firstName.value || !lastName.value) {
    if ($("#no-name").length) return;
    warningElement
      .text("Please provide your first name and last name.")
      .attr("id", "no-name")
      .insertAfter(lastName)
      .on("animationend", (e) => {
        e.target.remove();
      });
  } else if (!regex.test(email.value)) {
    if ($("#invalid-email").length) return;
    warningElement
      .text("Please enter a valid email address.")
      .attr("id", "invalid-email")
      .insertAfter(email)
      .on("animationend", (e) => {
        e.target.remove();
      });
  } else if (!password.value) {
    if ($("#no-password").length) return;
    warningElement
      .text("Please enter a password.")
      .attr("id", "no-password")
      .insertAfter(password)
      .on("animationend", (e) => {
        e.target.remove();
      });
  } else if (password.value !== confirmPassword.value) {
    if ($("#pw-diff").length) return;
    return $(
      warningElement
        .text("Please make sure your password is the same!")
        .attr("id", "pw-diff")
        .insertAfter(confirmPassword)
        .on("animationend", (e) => {
          e.target.remove();
        })
    );
  } else {
    if (users.find((user) => user.email === email.value)) {
      return $("<p class='warning'>User already exist!</p>").insertAfter(email);
    } else {
      const newUser = new User(
        firstName.value,
        lastName.value,
        email.value,
        password.value
      );

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      const html = createUserElement(newUser);
      container.append(html);

      formElement.reset();
      return (formElement.style.display = "none");
    }
  }
}

function updateUser(id, firstName, lastName, email, password, formElement) {
  const users = JSON.parse(localStorage.getItem("users"));
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const warningElement = $("<label class='warning'></label>");

  if (!firstName.value || !lastName.value) {
    if ($("#no-name").length) return;
    warningElement
      .text("Please provide your first name and last name.")
      .attr("id", "no-name")
      .insertAfter(lastName)
      .on("animationend", (e) => {
        e.target.remove();
      });
  } else if (!regex.test(email.value)) {
    if ($("#invalid-email").length) return;
    warningElement
      .text("Please enter a valid email address.")
      .attr("id", "invalid-email")
      .insertAfter(email)
      .on("animationend", (e) => {
        e.target.remove();
      });
  } else if (!password.value) {
    if ($("#no-password").length) return;
    warningElement
      .text("Please enter a password.")
      .attr("id", "no-password")
      .insertAfter(password)
      .on("animationend", (e) => {
        e.target.remove();
      });
  } else {
    const index = users.findIndex((user) => user.email === email.value);
    const html = $(`.user[data-user-id="${id}"]`);

    html.find(".firstName").text(firstName.value);
    html.find(".lastName").text(lastName.value);
    html.find(".email").text(email.value);
    html.find(".password").text(password.value);

    users[index].firstName = firstName.value;
    users[index].lastName = lastName.value;
    users[index].email = email.value;
    users[index].password = password.value;

    localStorage.setItem("users", JSON.stringify(users));

    return (formElement.style.display = "none");
  }
}

function cancelButton() {
  $("button.cancel").one("click", (e) => {
    const closest = e.target.closest("[id$='popup']");

    return (closest.style.display = "none");
  });
}

function saveButton(userID) {
  $("form[id$='popup']").one("submit", (e) => {
    e.preventDefault();

    if (e.target.id === "new-popup") {
      const firstName = e.target.querySelector(".first-name");
      const lastName = e.target.querySelector(".last-name");
      const email = e.target.querySelector(".email");
      const password = e.target.querySelector(".create-password");
      const confirmPassword = e.target.querySelector(".confirm-password");

      return createUser(
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        e.target
      );
    } else if (e.target.id === "edit-popup") {
      const firstName = e.target.querySelector(".first-name");
      const lastName = e.target.querySelector(".last-name");
      const email = e.target.querySelector(".email");
      const password = e.target.querySelector(".password");

      return updateUser(userID, firstName, lastName, email, password, e.target);
    }
  });
}

function initEdit(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
  const email = user.email;
  const password = user.password;

  $("#edit-popup .first-name").val(firstName);
  $("#edit-popup .last-name").val(lastName);
  $("#edit-popup .email").val(email);
  $("#edit-popup .password").val(password);
}

function deleteButton(userID) {
  const deleteButton = $("button.delete");
  const users = JSON.parse(localStorage.getItem("users"));

  deleteButton.one("click", (e) => {
    const closest = e.target.closest("[id$='popup']");
    const index = users.findIndex((user) => user.id === userID);
    const userHTML = $(`.user[data-user-id="${userID}"]`);

    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));

    userHTML.remove();
    closest.style.display = "none";
  });
}

$(document).ready(function () {
  const accountLoggedIn = JSON.parse(localStorage.getItem("login"));
  const userArray = JSON.parse(localStorage.getItem("users"));

  if (!accountLoggedIn.isAdmin) {
    $("main").load("./partials/user-account.html", function () {
      getBooks(accountLoggedIn);
      getWishlist(accountLoggedIn);
    });
  } else {
    $("main").load("./partials/admin-account.html", function () {
      listUsers(userArray);

      $("#new-user").on("click", (e) => {
        const popup = $("#new-popup");
        popup.css("display", "flex");

        saveButton();
        cancelButton();
      });

      $(document).on("click", "a.edit", (e) => {
        const popup = $("#edit-popup");
        const users = JSON.parse(localStorage.getItem("users"));
        const userID = e.target.getAttribute("data-user-id");
        const userObj = users.find((user) => user.id === userID);

        initEdit(userObj);
        popup.css("display", "flex");

        saveButton(userID);
        cancelButton();
      });

      $(document).on("click", "a.delete", (e) => {
        const popup = $("#delete-popup");
        const userID = e.target.getAttribute("data-user-id");

        popup.css("display", "flex");

        deleteButton(userID);
        cancelButton();
      });
    });
  }
});
