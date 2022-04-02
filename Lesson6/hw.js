function log(...param) {
    console.log(...param);
}

// practice 1
// Написать функцию, которая будет принимать массив чисел, содержащий целые
// положительные и целые отрицательные числа, в качестве результата возвращать
// сумму четных положительных элементов переданного массива.
// const sumOfPositiveNumbers = (arr) => {
//     return arr.reduce((accum, current) => {
//         if (current > 0) return accum + current;
//         return accum;
//     }, 0);
// };

// log(sumOfPositiveNumbers([-1, 2, 5, -9, 7, 4]));

// Написать функцию, которая будет принимать массив чисел, и будет убирать
// повторяющиеся значения из переданного массива, в качестве результата
// возвращать новый массив с уникальными значениями из исходного.
// const removeRepeatedValues = (arr) => {
//     return arr.filter((element, index, array) => {
//         if (array.includes(element, index + 1)) return false;
//         return true;
//     });
// };

// log(removeRepeatedValues([-1, 2, 5, -9, 5, 7, 4, 7]));

// Написать функцию  которая будет принимать два массива, и будет сравнивать
// их, если они идентичны (элементы совпадают по значению и по индексу) то
// функция возвращает true, в противном случае false.
// const isEqualArrays = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) return false;
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) return false;
//     }
//     return true;
// };

// const myArr1 = [1, 0, 1];
// const myArr2 = [1, 0, 1];
// // log(isEqualArrays(myArr1, myArr2));

//PRACTICE 2
// Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора.
// Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.

// 1. -> with Object.assign()
// const myObj = {
//     name: "Petya",
//     age: 18,
//     city: "Moskow",
// };

// const myObj2 = Object.assign({}, myObj);
// log(myObj, myObj2);

// myObj2.age = 20;
// log(myObj, myObj2);

// 2. -> with Spread
// const myObj = {
//     name: "Petya",
//     age: 18,
//     city: "Moskow",
// };

// const myObj2 = { ...myObj };
// log(myObj, myObj2);

// myObj2.age = 20;
// log(myObj, myObj2);

// Написать функцию  которая будет принимать n-ое количество аргументов, в качестве
// результата функция будет возвращать сумму всех четных элементов. Для решения
// использовать цикл for (... of …).
// const sumOfEvenElements = (...args) => {
//     let sum = 0;
//     for (item of args) {
//         if (item % 2 === 0) sum += item;
//     }
//     return sum;
// };
// log(sumOfEvenElements(2, 1, -1, 0, 3, 4));

// Написать функцию  которая будет принимать два массива, и в качестве результата
// будет возвращать только  те значения которые есть и в первом и во втором массиве.
// const removeRepeatedValues = (arr) => {
//     return arr.filter((element, index, array) => {
//         if (array.includes(element, index + 1)) return false;
//         return true;
//     });
// };

// const getMatchedItems = (arr1, arr2) => {
//     const result = [];
//     for (item of arr1) {
//         if (arr2.includes(item)) result.push(item);
//     }
//     return removeRepeatedValues(result);
// };

// const myArr1 = [1, 0, 1];
// const myArr2 = [1, 0, -1];
// log(getMatchedItems(myArr1, myArr2));

//HOMEWORK
//1. Используя метод map() напишите код, который получает из
// массива строк новый массив, содержащий их длины.
// const myArr = ["fff", "s", "rxc cvj"];
// const strLengths = myArr.map((elem) => elem.length);
// log(myArr);
// log(strLengths);

//2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19].
// Использую метод reduce() напишите функцию currentSums(numbers),
// которая возвращает новый массив из такого же числа элементов,
// в котором на каждой позиции будет находиться сумма элементов массива numbers
// до этой позиции включительно.
// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// const currentSums = (numbers) => {
//     const res = [];
//     const totalSum = numbers.reduce((accum, currentEl) => {
//         res.push(accum);
//         return accum + currentEl;
//     });
//     res.push(totalSum);
//     return res;
// };
// log(currentSums(numbers));

//3. Напишите код, который получает из массива чисел новый массив,
// содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.
// const numbers = [2, 3, 5, 7, 0, 13, 4, -6];

// const isSumEqual7 = (a, b) => a + b === 7;

// const getPairsWithSum7 = (arr) => {
//     const result = [];
//     arr.forEach((elem1) => {
//         arr.forEach((elem2) => {
//             if (isSumEqual7(elem1, elem2)) result.push([elem1, elem2]);
//         });
//     });
//     return result;
// };
// log(getPairsWithSum7(numbers));

//4. Напишите код, создающий массив, который будет состоять из первых букв слов строки str.
// const myStr = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

// const getFirstLEtters = (str) => {
//     const strToArr = str.split(" ");
//     return strToArr.map((item) => item[0]);
// };
// log(getFirstLEtters(myStr));

//5. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего,
// текущего и следующего символа строки str.
// const myStr = "Lorem ipsum dolor";

// const getThreeLetters = (str) => {
//     return str.split("").map((elem, ind, arr) => {
//         if (ind < 1) return elem + arr[ind + 1];
//         if (ind === arr.length - 1) return arr[ind - 1] + elem;
//         return arr[ind - 1] + elem + arr[ind + 1];
//     });
// };
// log(getThreeLetters(myStr));

//6. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно,
// в массив цифр расположенных по убыванию их значений.
// const numbers = [2, 3, 5, 7, 0, 13, 4, -6];

// const sortedArr = [...numbers].sort((a, b) => {
//     if (a < b) return 1;
//     if (a > b) return -1;
//     return 0;
// });
// log(numbers);
// log(sortedArr);

//7. Напишите код, объединяющий три массива цифр, и располагающий цифры,
// в полученном массиве, в порядке убывания их значений через пробел.
// const arr1 = [2, 3, 5];
// const arr2 = [7, 0, 13];
// const arr3 = [4, -6];

// const sortedArr = [...arr1, ...arr2, ...arr3].sort((a, b) => {
//     if (a < b) return 1;
//     if (a > b) return -1;
//     return 0;
// });
// const joinedArr = sortedArr.join(" ");

// log(joinedArr);

//8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// const myArr = [[1, 2, 3], [4, 5], [6], [1, [2, [3, [4]]]]];

// const getSum = (arr) => {
//     return arr.reduce((acc, cur) => {
//         if (Array.isArray(cur)) return acc + getSum(cur);
//         return acc + cur;
//     }, 0);
// };
// log(getSum(myArr));

//9. Дан массив с числами. Не используя метода reverse переверните
// его элементы в обратном порядке.
// const numbers = [2, 3, 5, 7, 0];

// const reverseArr = (arr) => {
//     const revArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         revArr.push(arr[i]);
//     }
//     return revArr;
// };
// log(reverseArr(numbers));

//10. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
// чтобы в сумме получилось больше 10-ти.
// const numbers = [2, 3, 5, 7, 0];

// const getQtyOfElements = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         if (sum > 10) return `Надо сложить элементов - ${i + 1}`;
//     }
// };
// log(getQtyOfElements(numbers));

//11. Напишите функцию arrayFill, которая будет заполнять массив заданными значениями.
// Первым параметром функция принимает значение, которым заполнять массив,
// а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5)
// сделает массив ['x', 'x', 'x', 'x', 'x'].

// const arrayFill = (filler, qty) => {
//     const result = [];
//     for (let i = 0; i < qty; i++) {
//         result.push(filler);
//     }
//     return result;
// };
// log(arrayFill("x", 5));
