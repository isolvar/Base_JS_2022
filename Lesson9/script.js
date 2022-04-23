// DOM
// console.log(navigator);
// console.log(history);
// console.log(location);
// console.log(screen);

//console.log(document.head)

//==================================================
//Навигация по элементам
// const block2 = document.querySelector(".block-2"); // находит первый элемент с классом block-2
// const block2 = document.querySelector("div"); //находит первый div
// const block2 = document.querySelector("#block-2"); //находит первый элемент с id = block-2
// const block2 = document.querySelector(".block-2 .paragraph-2");

// console.log(block2.parentElement); //узел родитель у block-2
// console.log(block2.previousElementSibling); // предыдущий элемент на том же уровне
// console.log(block2.nextElementSibling);

// console.log(block2.firstElementChild);
// console.log(block2.lastElementChild);

//==================================================
//поиск элеметов
// const block2 = document.querySelector(".block-2");
// console.log(document.getElementById("block-1"));
// console.log(document.getElementsByTagName("div"));
// console.log(document.querySelectorAll("div"));

// const link = document.querySelector("a");
// const input = document.querySelector("input");

//==================================================
// console.log((document.body.innerHTML += 123));
// console.log(document.body.innerHTML);

// console.log(document.body.innerText);
// const block1 = document.querySelector("#block-1");
// console.log(block1.innerHTML);
// console.log(block1.outerHTML);

//==================================================
// Work with Styles
// const block1 = document.querySelector("#block-1");
// block1.className = "div-block";
// block1.classList.add("block");
// block1.classList.remove("block");
// block1.style.backgroundColor = "grey";
// block1.style.width = "100px";

//==================================================
//Create elements
// const header = document.createElement("header");
// header.className = "page-header";
// header.innerHTML = "Это шапка сайта";
// header.style.backgroundColor = "yellow";
// header.style.height = "60px";
// header.style.display = "flex";
// header.style.justifyContent = "center";
// header.style.alignItems = "center";

// document.body.prepend(header);

// console.log(header);
//==================================================
// Practice 1
const header = document.createElement("header");
header.className = "page-header";
header.innerHTML = "Это шапка сайта";
header.style.backgroundColor = "grey";
header.style.height = "60px";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";

document.body.prepend(header);

const section = document.createElement("section");
section.className = "page-section";
section.style.padding = "10px";
header.after(section);

const input = document.createElement("input");
input.className = "todos-input";
input.style.marginRight = "10px";
// input.addEventListener("input", (event) => console.log(event.target.value));
section.prepend(input);

const button = document.createElement("button");
button.className = "todos-button";
button.innerText = "Add Todo";
// button.onclick = () => console.log("clicked"); //устаревшее
// button.onclick = () => console.log("clicked2"); //устаревшее
// button.addEventListener("click", () => console.log("clicked"));
// button.addEventListener("click", () => console.log("clicked2"));
button.addEventListener("click", () => {
    const inputValue = document.getElementsByClassName("todos-input")[0].value;

    const newLi = document.createElement("li");
    newLi.className = "todos-list-item";
    newLi.innerText = `Пункт ${inputValue}`;

    const ul = document.getElementsByClassName("todos-list");
    ul[0].append(newLi);
});

input.after(button);

const newUl = document.createElement("ul");
newUl.className = "todos-list";
button.after(newUl);

for (let i = 1; i <= 5; i++) {
    const newLi = document.createElement("li");
    newLi.className = "todos-list-item";
    newLi.innerText = `Пункт ${i}`;
    newUl.append(newLi);
}
//==================================================

// stopPropagation / stopImmediatePropagation
// event.preventDefault()
// const a = document.querySelector("a");

// a.innerText = "Link";
// a.addEventListener("click", (event) => {
//     event.preventDefault(); // говорит браузеру не выполнять стандартное действие элемента
//     console.log("clicked");
// });
// console.log(a);
