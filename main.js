// alert("ich funktioniere");
// const toggleButton = document.querySelector(".toggle");

// toggleButton.addEventListener("click", () => {
//   rootStyle = document.documentElement.style;
//   rootStyle.setProperty("--main-bg-color", "hotpink");
// });

const toggleButton = document.querySelector(".toggle");

const rootStyle = document.documentElement.style;
const isDark = rootStyle.getPropertyValue("--main-bg-color") === "#000";
// let isDark = true;
toggleButton.addEventListener("click", () => {
  if (isDark) {
    rootStyle.setProperty("--main-bg-color", "#fff");
    rootStyle.setProperty("--main-color", "#000");
  } else {
    rootStyle.setProperty("--main-bg-color", "#000");
    rootStyle.setProperty("--main-color", "#fff");
  }
  //   isDark = !isDark;
});
