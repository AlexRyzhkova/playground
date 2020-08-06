import { createElement } from "../utils/elements";

export function createCard(props) {
  const title = createElement("h1", {
    innerText: props.title,
  });

  const body = createElement("p", {
    innerText: props.body,
  });
  const image = createElement("img", {
    src: props.img_url,
  });
  const card = createElement(
    "div",
    {
      className: "card",
    },
    [title, body, image]
  );
  return card;
}
