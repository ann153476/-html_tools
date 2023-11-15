const showPasswordToggle = document.getElementById("showPasswordToggle");
const passwordField = document.getElementById("passwordField");

showPasswordToggle.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    showPasswordToggle.src = "./img/icons8-speak-no-evil-monkey-94.png";
  } else {
    passwordField.type = "password";
    showPasswordToggle.src = "./img/icons8-see-no-evil-monkey-94.png";
  }
});
