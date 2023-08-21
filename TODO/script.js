const form = document.querySelector("form");
const input = document.querySelector("input");
const listParent = document.querySelector("ul");

let arr;

if (localStorage.getItem("todos")) {
  arr = JSON.parse(localStorage.getItem("todos"));
} else {
  arr = [];
}

const updateContent = () => {
  let content = "";
  arr.forEach((text) => {
    content += `<li>${text}</li>`;
  });

  listParent.innerHTML = content;
};
updateContent();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value;

  arr.push(inputValue);

  localStorage.setItem("todos", JSON.stringify(arr));
  updateContent();
});
