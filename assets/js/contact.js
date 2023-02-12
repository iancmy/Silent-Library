const contactForm = $("#contact-form");
const subject = $("#subject");
const dialog = $("#thank-you");

// change text-color when user has selected
subject.on("change", (e) => {
  if (e.target.value === "no-subject")
    e.target.classList.add("has-not-selected");
  else e.target.classList.remove("has-not-selected");
});

// jquery ui dialog
dialog.dialog({
  autoOpen: false,
  closeOnEscape: true,
  resizable: false,
  height: "auto",
  width: "50vw",
  modal: true,
});

contactForm.on("submit", (e) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const warningElement = $("<label class='warning'></label>");
  const firstName = $("#first-name");
  const lastName = $("#last-name");
  const email = $("#email");
  const subject = $("#subject");
  const message = $("#message");
  const messages = JSON.parse(localStorage.getItem("messages")) || [];

  e.preventDefault();

  // validation
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
  } else if (!subject.val()) {
    if ($("#no-concern").length) return;
    warningElement
      .text("Please select what is your concern.")
      .attr("id", "no-concern")
      .insertAfter(subject)
      .on("animationend", (e) => {
        e.target.remove();
      });
  } else if (!message.val()) {
    if ($("#no-message").length) return;
    return $(
      warningElement
        .text("Please enter the details of your concern.")
        .attr("id", "no-message")
        .insertAfter(message)
        .on("animationend", (e) => {
          e.target.remove();
        })
    );
  } else {
    messages.push({
      firstName: firstName.val(),
      lastName: lastName.val(),
      email: email.val(),
      subject: subject.val(),
      message: message.val(),
      id: Date.now(),
    });

    localStorage.setItem("messages", JSON.stringify(messages));

    e.target.reset();
    dialog.dialog("open");
  }
});
