// Примитивные типы данных
// Number

console.log(1 / 0);
console.log("vasy" / 0);
console.log(typeof NaN);  //NaN has type number

// String
const myString = "my string";
const anotherString = 'strstr';
const thirdString = "text \"text\" text"; // Экранирование ковычек
const templateString = `some text ${anotherString}`;
console.log(templateString);

// Boolean
// false or true
let isAdmin = false;
let isOpen = true;

// null
const emprtVar = null;

// undefined
let userName;
console.log(userName);

// Symbol


// Непримитивные типы
// Object
const someName = 'Petya';

const user = {
    // name: 'Vasya',
    name: someName,
    lastName: 'Ivanov',
    age: 23,
    citizenship: "Russia",
    newObject: {
        newProperty: 'property',
    }
};

console.log(user.newObject.newProperty);    // Not recommended

const userName1 = user.name;
console.log(userName1);                      // Recommended

// bigint
// bigger than (2 ** 53) and less than (-2 ** 53)


// OPERATORS
// typeof
console.log(typeof someName);
console.log(typeof null);       // object !!! Ошибка JS.


// Преобразование типов
// Стрововое преобразование
const myVar = 123;

const myVarToString = String(myVar);
console.log(typeof myVarToString)

//Численное преобразование
const myVar1 = '123';
const myVarToNumber1 = Number(myVar1);
//const myVarToNumber = +myVar1;

console.log(typeof myVarToNumber);

const myVar2 = 'wad123';
const myVarToNumber2 = Number(myVar1); // vaue is NaN, but type is 'number'

// undefined -> NaN
// null -> 0
// true/false -> 1/0

// Логические пребразования
// 0, null, undefined, NaN, ""  -> false
// "0" -> true

const myVar3 = 1;
console.log(Boolean(myVar3));
console.log(!!myVar3);

// Математические операторы
 const myNumberMath = 1;
 const newNumberMath = 2;
 const myString1 = 'strrrrr';

 console.log(myNumberMath + myString1);

 // Сравнение строк
 const string1 = 'stroka';
 const string2 = 'solnce';

 console.log(string1 == string2);
 console.log(string1 > string2);
 // compare unicode symbols

 const userType = {
     admin: 'admin',
     user: 'user',
     teacher: 'teacher',
     contentManager: 'contentManager',
 };

 const serverDataUserType = 'user';

 if (serverDataUserType === userType.admin) {
     console.log("show all content");
 } else {
     console.log('show partial content');
 };

 // null === undefined -> false
 // null == undefined -> true

 console.log(!!null)