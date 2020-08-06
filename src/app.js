import "./global.css";
import { createToggleButton } from "./components/toggleButton.js";
import { createTitle } from "./components/title.js";
import { createElement } from "./utils/elements";
import { getJoke } from "./api/joke";
import { createCard } from "./components/card";

const title = createTitle();
const toggleButton = createToggleButton();

const fetchButton = createElement("button", {
  innerHTML: "FETCH IT",
});
fetchButton.addEventListener("click", async () => {
  const joke = await getJoke();
  const card = createCard({
    title: joke.title,
    body: joke.synopsis,
    img_url: joke.image_url,
  });
  document.body.append(card);
  console.log(joke);
});

document.body.append(title);
document.body.append(toggleButton);
document.body.append(fetchButton);
