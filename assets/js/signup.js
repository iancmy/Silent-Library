import User from "./Users.js";
import login from "./login.js";

const signupForm = $("#sign-up");

function createUser(firstName, lastName, email, password, confirmPassword) {
  const users = JSON.parse(localStorage.getItem("users"));
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const warningElement = $("<label class='warning'></label>");

  if (!firstName.val() || !lastName.val()) {
    if ($("#no-name").length) return;
    warningElement
      .text("Please provide your first name and last name.")
      .attr("id", "no-name")
      .insertAfter(lastName)
      .on("animationend", (e) => {
        e.target.remove();
      });
  } else if (!regex.test(email.val())) {
    if ($("#invalid-email").length) return;
    warningElement
      .text("Please enter a valid email address.")
      .attr("id", "invalid-email")
      .insertAfter(email)
      .on("animationend", (e) => {
        e.target.remove();
      });
  } else if (!password.val()) {
    if ($("#no-password").length) return;
    warningElement
      .text("Please enter a password.")
      .attr("id", "no-password")
      .insertAfter(password)
      .on("animationend", (e) => {
        e.target.remove();
      });
  } else if (password.val() !== confirmPassword.val()) {
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
    if (users.find((user) => user.email === email.val())) {
      return $("<p class='warning'>User already exist!</p>").insertAfter(email);
    } else {
      const newUser = new User(
        firstName.val(),
        lastName.val(),
        email.val(),
        password.val()
      );

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      login(JSON.stringify(newUser));
    }
  }
}

signupForm.on("submit", (e) => {
  const firstName = $("#first-name");
  const lastName = $("#last-name");
  const email = $("#email");
  const password = $("#create-password");
  const confirmPassword = $("#confirm-password");

  e.preventDefault();

  createUser(firstName, lastName, email, password, confirmPassword);
});
