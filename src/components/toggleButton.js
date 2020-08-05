import { createElement } from "../utils/elements.js";

export function createToggleButton() {
  const toggleButton = createElement("button", {
    className: "toggleButton",
    innerText: "toggle Theme",
  });

  const rootStyle = document.documentElement.style;
  // let isDark = true;
  toggleButton.addEventListener("click", () => {
    let isDark = rootStyle.getPropertyValue("--main-bg-color") === "#000";
    if (isDark) {
      rootStyle.setProperty("--main-bg-color", "#fff");
      rootStyle.setProperty("--main-color", "#000");
    } else {
      rootStyle.setProperty("--main-bg-color", "#000");
      rootStyle.setProperty("--main-color", "#fff");
    }
    // isDark = !isDark;
  });

  return toggleButton;
}
