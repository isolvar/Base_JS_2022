// 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// const myString = "Ехал Грека через реку";
// const stringToArray = (str) => str.split(" ");

// 2. Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// const myString = "Ехал Грека";
// const deleteCharacters = (str, length) => str.slice(0, length);

// 3. Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// const myString = "Ехал грека через реку";
// const insertDash = (str) => str.toUpperCase().split(" ").join("-");

// const myString = "Lorem ipsum dolor sit amet";

// const insertDash = (str) => {
//   return str.toUpperCase().replace(/\s/g, "-");
// };

// console.log(insertDash(myString));

// 4. Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// const myString = "ехал Грека через реку";
// const capitalizedString = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// 5. Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// const myString = "ехал грека через реку";

// const capitalize = (str) => {
//   let result = [];
//   const stringToArray = str.split(" ");

//   for (let i = 0; i < stringToArray.length; i++) {
//     const capitalizedWord = capitalizedString(stringToArray[i]);
//     result.push(capitalizedWord);
//   }

//   return result.join(" ");
// };

// const myString = "lorem ipsum dolor sit amet";

// const capitalize = (str) => {
//   return stringToArray(str)
//     .map((element) => capitalizedString(element))
//     .join(" ");
// };

// console.log(capitalize(myString));

// 6. Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// const myString = "КаЖдЫй ОхОтНиК";

// const changeRegigster = (str) => {
//   let reversedStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//       reversedStr += str[i].toUpperCase();
//       continue;
//     }
//     reversedStr += str[i].toLowerCase();
//   }

//   return reversedStr;
// };

// 7. Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// const myStr = "11#@#2sa$l@#d3фыуыф''a''];";
// const removeChar = (str) => str.replace(/[^a-zа-яё0-9]/gi, "");

// const myArray = [1, 2, 3, 4, 5];

// for (let i = 0; i < myArray.length; i++) {
//   myArray[i];
// }

// 8. Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.

// const myNumber = 234;

// const zeros = (num, len, sign) => {
//   let zerosString = "";
//   const numLength = num.toString().length;
//   const zerosAmountToAdd = len - numLength;

//   for (let i = 0; i < zerosAmountToAdd; i++) {
//     zerosString += 0;
//   }

//   if (!sign) {
//     return zerosString + num;
//   }
//   return sign + zerosString + num;
// };

// console.log(zeros(10, 5, "+"));

// const zeros = (num, len, sign) => {
//   const numZeros = len - num.toString().length;
//   const zeroString = "0";

//   const zeroStr = zeroString.repeat(numZeros);

//   return !sign ? zeroStr + num : sign + zeroStr + num;
// };

// console.log(zeros(11, 5, "-"));

// 9. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// const myStrOne = "Строка";
// const myStrTwo = "строка";

// const comparison = (str1, str2) =>
//   str1.toLowerCase() === str2.toLowerCase() ? "Равны" : "Не равны";

// console.log(comparison(myStrOne, myStrTwo));
// function comparison(strOne, strTwo) {
//   console.log(RegExp(strOne) === "привет");
//   return strTwo.match(RegExp(strOne));
// }

// 10. Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

// const insensitiveSearch = (str1, str2) => {
//   const isIncludes = str1.toLowerCase().includes(str2.toLowerCase());
//   return isIncludes ? "Найдено" : "Не найдено";
// };

// console.log(insensitiveSearch("Привет, человекы", "Человек"));

// 11. Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// const myStr = "еХАл ГРеКа ЧЕРеЗ рекУ";

// const initCap = (str) => {
//   const strToArray = myStr.toLocaleLowerCase().split(" ");

//   let result = [];

//   for (let i = 0; i < strToArray.length; i++) {
//     result.push(capitalizedString(strToArray[i]));
//   }

//   return result.join("");
// };

// 12. Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

// Первый вариант:
// const initSnake = (str) => {
//   const modifiedStr = str.replace(
//     /[A-ZА-ЯЁ]/g,
//     (letter) => "_" + letter.toLowerCase()
//   );
//   return modifiedStr.slice(1);
// };

// console.log(initSnake("CamelCase"));

// Второй вариант:
// const initSnake = (str) => {
//   let newStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       newStr += "_" + str[i].toLowerCase();
//       continue;
//     }
//     newStr += str[i];
//   }

//   return newStr.slice(1);
// };

// 13. Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

// const repeatStr = (str, n) => {
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     result += str;
//   }

//   return result;
// };

// 14. Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.
// const path = (pathname) => {
//   const pathnameToArray = pathname.split("/");
//   const filenameIndex = pathnameToArray.length - 1;

//   return pathnameToArray[filenameIndex];
// };

// console.log(path("/lesson1/javascript/file.txt"));

// 15. Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// const str = "Ехал Грека через реку";
// const str1 = "реку";
// const str2 = "море";

// const endsWith = (str, strToFind) => {
//   const indexOfStrToCompare = str.length - strToFind.length;

//   return str.substr(indexOfStrToCompare) === strToFind;
// };

// console.log(endsWith(str, str1));

// String.prototype.endsWith = function (subString) {
//   console.log(this.substr(0, 1));
//   if (subString.length > this.length) {
//     return false;
//   }
//   return this.substr(this.length - subString.length) === subString;
// };

// 16. Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// const getSubstr = (str, char, pos) => {
//   const lowerCasedPos = pos.toLowerCase();

//   switch (lowerCasedPos) {
//     case "до":
//       return str.slice(0, str.indexOf(char));
//     case "после":
//       return str.slice(str.indexOf(char) + 1);
//     default:
//       return str;
//   }
// };

// console.log(getSubstr("Ехал Грека через реку", "л", "after"));

// 17. Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

// const string = "Ехал Грека через реку";

// const insert = (str, substr, pos) => {
//   if (!pos) {
//     return substr + str;
//   }

//   const strToArray = str.split("");

//   strToArray.splice(pos, 0, substr);

//   return strToArray.join("");
// };

// console.log(insert(str, "Не "));
// console.log(insert(string, "Не ", 5));

// 18. Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// const myStr = "Очень длинная строка";
// const limitStr = (str, n, symb) => {
//   if (str.length <= n) {
//     return str;
//   }

//   const endingSymb = symb ? symb : "...";

//   return str.slice(0, n) + endingSymb;
// };

// console.log(limitStr(myStr, 19));

// 19. Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// const count = (str, stringsearch) => {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === stringsearch) counter += 1;
//   }
//   return counter;
// };

// console.log(count("Моя строка", "а"));

// 20. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// const strip = (str) => {
//   const trimmedStrToArray = str.trim().split(" ");

//   let newArray = [];
//   for (let i = 0; i < trimmedStrToArray.length; i++) {
//     if (trimmedStrToArray[i]) newArray.push(trimmedStrToArray[i]);
//   }

//   return newArray.join(" ");
// };

// console.log(strip("      Ехал       Грека через  реку    "));

// 21. Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// const cutString = (str, n) => str.split(" ").splice(0, n).join(" ");

// const cutString = (str, n) => {
//   const myArr = str.split(" ");
//   let myNewArr = [];
//   for (let i = 0; i < n; i++) {
//     myNewArr.push(myArr[i]);
//   }
//   let myStr = myNewArr.join(" ");
//   return myStr;
// };

// console.log(cutString("Ехал Грека через реку", 2));

// 22. Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

// const findWord = (word, str) => str.includes(word);

// const findWord = (word, str) => {
//   let myArr = str.split(" ");
//   for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] === word) {
//       return `Да, в строке есть слово ${word}`;
//     }
//   }
//   return `В строке нет слова ${word}`;
// };

// console.log(findWord("hello ", "hello world"));
