// Functions Declaration - объявление функции
// Function Expresion - функциональное предложение
// Arrow function - стрелочныая функция

//====================
// Functions Declaration
//====================
// function showMessage() {
//     console.log("hello");
// }

// showMessage();

//====================
// const user = "Vasya";

// function greetUser(name = "гость") {
//     console.log(`Привет ${name}`);
// }

// greetUser(user);
//====================

// const user = {
//     name: "Vasya",
//     age: 18,
// };

// function checkAccess(age) {
//     if (age > 18) {
//         showAllowedMsg();
//     } else {
//         showDeniedMsg();
//     }
// }

// function showAllowedMsg() {
//     console.log("Доступ запрещен");
// }

// function showDeniedMsg() {
//     console.log("Доспуп разрешен");
// }

// checkAccess(user.age);
//====================

//====================
// Functions Expresion
//====================
// const user = {
//     name: "Vasya",
//     age: 18,
// };

// const showAllowedMsg = function () {
//     console.log("Доступ запрещен");
// };

// const showDeniedMsg = function () {
//     console.log("Доспуп разрешен");
// };

// checkAccess(user.age);

// function checkAccess(age) {
//     if (age > 18) {
//         showAllowedMsg();
//     } else {
//         showDeniedMsg();
//     }
// }
//====================

// RETURN

// function calcValue(a, b) {
//     return a + b;
// }

// const result = calcValue(3, 5);
// console.log(result);
//====================

// const user = {
//     name: "Vasya",
// };

// const greetMsg = "Привет";

// function getName(user) {
//     return user.name || "гость";
// }

// function sayHi(text, name = getName()) {
//     console.log(`${text}, ${name}!`);
// }

// sayHi(greetMsg, getName(user));

// Функция используемая внутри функции называется callback

//=========================
//Practice
// function greetUser(name = "гость") {
//     console.log(` Првиет, ${name}!`);
// }

// function pow(num, power = 1) {
//     if (typeof num !== "number") {
//         return NaN;
//     }
//     return num ** power;
// }

// function average(arr) {
//     let sum = 0;
//     let counter = 0;
//     for (let i of arr) {
//         sum += i;
//         counter += 1;
//     }
//     return sum / counter;
// }

// console.log(average([1, 2, 3]));

//=========================
// Arrow functions

// function calcValue(a, b) {
//     return a + b;
// }

// const result = calcValue(3, 5);
// console.log(result);

// const calcValue = (a, b) => a + b;
// const calcValue = (a, b) => {
//     return a + b;
// };

// const result = calcValue(3, 5);
// console.log(result);

//========================
// Practice

//1
// const count = 5;
// const message = "Сообщение";

// const showMessage = (msg, count) => {
//     for (let i = 1; i <= count; i++) {
//         console.log(msg);
//     }
// };
// showMessage(message, count);

//2

// const myChar = "а";

// const isMyCharVowel = (char) => {
//     const vowels = "ауоыэяюёие";

//     if (vowels.includes(char)) {
//         return "Гласная";
//     }
//     return "не гласная";
// };

// console.log(isMyCharVowel(myChar));

//3
const polindrom = "aдоcодa";

const isPolindrom = (word) => {
    let halfLength = 0;

    if (word.length % 2 === 0) {
        halfLength = word.length / 2;
    } else {
        halfLength = (word.length - 1) / 2;
    }

    for (let i = 0; i <= halfLength; i++) {
        if (word[i] !== word[word.length - i - 1]) return false;
    }
    return true;
};
console.log(isPolindrom(polindrom));
