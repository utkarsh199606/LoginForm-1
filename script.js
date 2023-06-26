document
  .getElementById("show_pass")
  .addEventListener("click", function show_password() {
    var input = document.getElementById("password");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  });
