$(document).ready(function () {
  if (localStorage.getItem("login")) {
    const path = location.pathname;
    switch (path) {
      case "/sign-up.html":
      case "/log-in.html":
        location.pathname = "/account.html";
        break;
    }
  } else {
    if (location.pathname === "/account.html") {
      location.pathname = "/log-in.html";
    }
  }
});
