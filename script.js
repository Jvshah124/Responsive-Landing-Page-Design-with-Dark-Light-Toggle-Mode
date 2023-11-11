const toggleSwitch = document.querySelector("#modeToggle");

const stylesheet = document.querySelector("#stylesheet");

toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark-mode");

    stylesheet.href = "dark-styles.css"; // Change href to your dark mode styles
  } else {
    document.body.classList.remove("dark-mode");

    stylesheet.href = "styles.css"; // Change href to your light mode styles
  }
});
