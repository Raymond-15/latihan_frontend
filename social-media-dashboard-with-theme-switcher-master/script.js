const switcher = document.querySelector("input[type=checkbox]");
const white = "white";
const darkBackground = "hsl(230, 17%, 14%)";
const topBgLight = "hsl(225, 100%, 98%)";
const topBgDark = "hsl(232, 19%, 15%)";
const headerBorderLight = "hsl(230, 22%, 74%)";
const lightCard = "hsl(227, 47%, 96%)";
const darkCard = "hsl(228, 28%, 20%)";
const activeCardLight = "hsl(232, 33%, 91%)";
const activeCardDark = "hsl(228, 26%, 27%)";
const primaryTextLight = "hsl(230, 17%, 14%)";
const secondTextLight = "hsl(228, 12%, 44%)";
const secondTextDark = "hsl(228, 34%, 66%)";

function darkMode() {
  if (switcher.checked) {
    document.documentElement.style.setProperty("--bg-color", darkBackground);
    document.documentElement.style.setProperty("--top-bg", topBgDark);
    document.documentElement.style.setProperty("--header-border", darkCard);
    document.documentElement.style.setProperty("--card-bg", darkCard);
    document.documentElement.style.setProperty("--card-bg-active", activeCardDark);
    document.documentElement.style.setProperty("--primary-text", white);
    document.documentElement.style.setProperty("--secondary-text", secondTextDark);
  } else {
    document.documentElement.style.setProperty("--bg-color", white);
    document.documentElement.style.setProperty("--top-bg", topBgLight);
    document.documentElement.style.setProperty("--header-border", headerBorderLight);
    document.documentElement.style.setProperty("--card-bg", lightCard);
    document.documentElement.style.setProperty("--card-bg-active", activeCardLight);
    document.documentElement.style.setProperty("--primary-text", primaryTextLight);
    document.documentElement.style.setProperty("--secondary-text", secondTextLight);
  }
}

window.addEventListener("load", () => (switcher.checked = true));
window.addEventListener("change", darkMode);
