const buttons = document.querySelector("button");
const input = document.querySelector("#nada");
const dialog = document.querySelector("dialog");

const changeStateOpen = () => {
  dialog.toggleAttribute("open", "close");
  dialog.className = "load";
  input.toggleAttribute("required");

  (function (e) {
    e.target.value != dialog ||
      e.addEventListener("click", () => dialog.removeAttribute("open"));
  });

  console.log(dialog);
};
const changeStateClose = () => {
  const dialog = document.querySelector("dialog");
  dialog.removeAttribute("open");
  dialog.className = "fade";
  input.toggleAttribute("required");

  console.log(dialog);
};

const checkthenSubmit = () => {};

// const removeDuplicate = ([...word]) => {
//   const ans = Array.from(new Set(word.join(""))).toString();

//   console.log(ans.split(",").join(""));
// };

// removeDuplicate("SSttrriinngg");
// removeDuplicate("11223344!!__  ");
// removeDuplicate("HHeelLlloo  WWooorrlldd");
