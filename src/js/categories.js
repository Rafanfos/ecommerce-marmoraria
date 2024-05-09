import { setDinamicHTML } from "./content.js";

const initializeDOMElements = () => {
  const allHtml = document.querySelector(".all");
  const marblesHtml = document.querySelector(".marbles");
  const granitesHtml = document.querySelector(".granites");
  const othersHtml = document.querySelector(".others");

  return {
    allHtml,
    marblesHtml,
    granitesHtml,
    othersHtml,
  };
};

const { allHtml, marblesHtml, granitesHtml, othersHtml } =
  initializeDOMElements();

allHtml.addEventListener("click", () => setDinamicHTML("all"));
marblesHtml.addEventListener("click", () =>
  setDinamicHTML("marbles", "Mármores")
);
granitesHtml.addEventListener("click", () =>
  setDinamicHTML("granites", "Granitos")
);
othersHtml.addEventListener("click", () => setDinamicHTML("others", "Outros"));

export { allHtml, marblesHtml, granitesHtml, othersHtml };
