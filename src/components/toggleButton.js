import { createElement } from "../utils/elements";

export function createToggleButton() {
  const toggleButton = createElement("button", {
    className: "toggleButton",
    innerText: "toggle Theme",
  });

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

  return toggleButton;
}
