function login(user) {
  localStorage.setItem("login", user);
  location.reload();
}

function validate(email, password) {
  const users = JSON.parse(localStorage.getItem("users"));
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const warningElement = $("<label class='warning'></label>");

  if (!regex.test(email.val())) {
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
      .text("Please enter your password.")
      .attr("id", "no-password")
      .insertAfter(password)
      .on("animationend", (e) => {
        e.target.remove();
      });
  } else {
    if (users.some((user) => user.email === email.val())) {
      const user = users.find((user) => user.email === email.val());
      if (user.password !== password.val()) {
        if ($("#wrong-pw").length) return;
        warningElement
          .text("Incorrect password!")
          .attr("id", "wrong-pw")
          .insertAfter(password)
          .on("animationend", (e) => {
            e.target.remove();
          });
      } else {
        login(JSON.stringify(user));
      }
    } else {
      if ($("#user-not-found").length) return;
      warningElement
        .text("User does not exist")
        .attr("id", "user-not-found")
        .insertAfter(email)
        .on("animationend", (e) => {
          e.target.remove();
        });
    }
  }
}

$("#log-in").on("submit", (e) => {
  const email = $("#email");
  const password = $("#password");

  e.preventDefault();
  validate(email, password);
});

export default login;
