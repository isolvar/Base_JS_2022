// const myObj = { nsme: "Vasya", surname: "Ivanov", age: 20 };
// const myObjJson = '{"nsme":"Vasya","surname":"Ivanov","age":20}';

// JSON.stringify
// console.log(JSON.stringify(myObj));

// JSON.parse
// console.log(JSON.parse(myObjJson));

// object copy
// const newObj = JSON.parse(JSON.stringify(myObj));

// try {
//     const parseStr = JSON.parse(myObjJson);
//     console.log(parseStr);
// } catch (e) {
//     throw new Error("mistake in try block");
//     // console.log(e);
// } finally {
//     console.log("выполнится в любом случае");
// }

//Запросы на сервер
// https://httpstat.us/
// "https://jsonplaceholder.typicode.com/users"

//цикл CRUD - create/rad/update/delete
//GET - получить данные
//POST - создание данных
//PUT - изменение данных
//DELETE - удаление данных

// const URL = "https://jsonplaceholder.typicode.com/users";

//XHR
// const xhr = new XMLHttpRequest();
// xhr.open("GET", URL);

// xhr.send();

// xhr.onload = () => {
//     console.log(JSON.parse(xhr.response));
// };
// xhr.onerror = () => {
//     console.log("Error!!!!!!!!");
// };

//FETCH

// function sendRequest(url) {
//     fetch(url)
//         .then((response) => response.json())
//         .then((res) => console.log(res))
//         .catch((e) => console.log(e))
//         .finally(() => console.log("Выполнитмя в любом случае"));
// }

// sendRequest(URL);

//AWAIT

// const sendRequest = async (url, fetchParams = {}) => {
//     const response = await fetch(url, fetchParams);
//     result = await response.json();

//     return result;
// };

// const user = { name: "Vasya", surname: "Ivanov" };

// const fetchParams = {
//     method: "POST",
//     body: JSON.stringify(user),
//     header: { "Content-Type": "application/json" },
// };

// sendRequest(fetchURL, fetchParams).then((res) => console.log(res));

// sendRequest(`${fetchURL}/1`).then((res) => console.log(res));

//============================================
//MAP
// const myObj = { name: "Vasya", surname: "Ivanov" };
// const myObjToArray = [
//     ["name", " Vasya"],
//     ["surname", "Ivanov"],
// ];

// console.log(Object.entries(myObj));
// console.log(Object.fromEntries(myObjToArray));

// const map = new Map(Object.entries(myObj));
// console.log(map);

// map.set("newkey", "newValue");
// console.log(map.get("newKey"));
// console.log(map.has("surname"));
// console.log(map.size);
// map.clear();
// console.log(map);

// for (let [key, value] of map) {
//     console.log(key, value);
// }

//Set
// const myArr = [1, 2, 3, 4, 5, 5, 6, 8, 10, 10, 11];

// const set = new Set(myArr);
// console.log([...set]);

// const getUniqueValues = (arr) => {
//     return [...new Set(arr)];
// };
// console.log(getUniqueValues(myArr));

//Eventloop
//Mикрозадачи - промисы
//Макрозадачи - setTimeout setInterval

// сначало выполняется синхронный код, потом микрозадачи и потом макрозадачи
