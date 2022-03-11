// Работа с if-else
console.log("=== === === === === ===");
console.log("Работа с if-else");
console.log("=== === === === === ===");

const toCheck1 = [1, 0, -3];
for (let i of toCheck1) {
    //  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
    if (i === 0) {
        console.log(`${i} === 0`, "Верно");
    } else {
        console.log(`${i} === 0`, "Неверно");
    }

    //  Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
    if (i > 0) {
        console.log(`${i} > 0`, "Верно");
    } else {
        console.log(`${i} > 0`, "Неверно");
    }

    //  Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
    if (i < 0) {
        console.log(`${i} < 0`, "Верно");
    } else {
        console.log(`${i} < 0`, "Неверно");
    }

    //  Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
    if (i >= 0) {
        console.log(`${i} >= 0`, "Верно");
    } else {
        console.log(`${i} >= 0`, "Неверно");
    }

    //  Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
    if (i <= 0) {
        console.log(`${i} <= 0`, "Верно");
    } else {
        console.log(`${i} <= 0`, "Неверно");
    }

    //  Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
    if (i !== 0) {
        console.log(`${i} !== 0`, "Верно");
    } else {
        console.log(`${i} !== 0`, "Неверно");
    }
}
console.log("=== === === === === ===");
//  Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'.
const toCheck2 = ["test", "тест", 3];
for (let a of toCheck2) {
    if (a === "test") {
        console.log(`${a} === 'test'`, "Верно");
    } else {
        console.log(`${a} === 'test'`, "Неверно");
    }
}

console.log("=== === === === === ===");
//  Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'.
const toCheck3 = ["1", 1, 3];
for (let a of toCheck3) {
    if (a === "1") {
        console.log(`${a} === '1'`, "Верно");
    } else {
        console.log(`${a} === '1'`, "Неверно");
    }
}

// Работа с логическими переменными
console.log("=== === === === === ===");
console.log("Работа с логическими переменными");
console.log("=== === === === === ===");
// Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой
// записью и с длинной.
const toCheck4 = [true, false];
for (let a of toCheck4) {
    if (a === true) {
        console.log(`${a} === true`, "Верно");
    } else {
        console.log(`${a} === true`, "Неверно");
    }

    a === true
        ? console.log(`${a} === true`, "Верно")
        : console.log(`${a} === true`, "Неверно");
}
console.log();

// Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой
// записью и с длинной.
for (let a of toCheck4) {
    if (a !== true) {
        console.log(`${a} !== true`, "Верно");
    } else {
        console.log(`${a} !== true`, "Неверно");
    }

    a !== true
        ? console.log(`${a} !== true`, "Верно")
        : console.log(`${a} !== true`, "Неверно");
}

// Работа с && (и) и || (или)
console.log("=== === === === === ===");
console.log("Работа с && (и) и || (или)");
console.log("=== === === === === ===");

// Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 5, 0, -3, 2.
const toCheck5 = [5, 0, -3, 2];
for (let a of toCheck5) {
    if (a > 0 && a < 5) {
        console.log(`0 < ${a} < 5`, "Верно");
    } else {
        console.log(`0 < ${a} < 5`, "Неверно");
    }
}
console.log();

// Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10.
//Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
for (let a of toCheck5) {
    if (a === 0 || a === 2) {
        console.log(`${a} === 0 or 2  --> ${a} + 7 =`, a + 7);
    } else {
        console.log(`${a} !== 0 or 2  --> ${a} / 10 =`, a / 10);
    }
}
console.log();

//Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму
//этих переменных, иначе выведите их разность (результат вычитания).
//Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
const toCheck6 = [
    [1, 3],
    [0, 6],
    [3, 5],
];
for (let arr of toCheck6) {
    let [a, b] = arr;
    if (a <= 1 && b >= 3) {
        console.log(`a <= 1 && b >= 3 -> ${a} + ${b} =`, a + b);
    } else {
        console.log(`a <= 1 && b >= 3 -> ${a} - ${b} =`, a - b);
    }
}
console.log();

//Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти,
//то выведите 'Верно', в противном случае выведите 'Неверно'.
for (let arr of toCheck6) {
    let [a, b] = arr;
    if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
        console.log(
            `(a > 2 && a < 11) || (b >= 6 && b < 14) -> a = ${a}, b = ${b}`,
            "Верно"
        );
    } else {
        console.log(
            `(a > 2 && a < 11) || (b >= 6 && b < 14) -> a = ${a}, b = ${b}`,
            "Неверно"
        );
    }
}
console.log();

// На switch-case
console.log("=== === === === === ===");
console.log("На switch-case");
console.log("=== === === === === ===");
//Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в
//переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее.
//Решите задачу через switch-case.
const toCheckSwitch = [1, 2, 3, 4];
for (let num of toCheckSwitch) {
    switch (num) {
        case 1:
            console.log(num, "-->", "зима");
            break;
        case 2:
            console.log(num, "-->", "весна");
            break;
        case 3:
            console.log(num, "-->", "лето");
            break;
        case 4:
            console.log(num, "-->", "осень");
            break;
    }
}
console.log();

// Общие задачи
console.log("=== === === === === ===");
console.log("Общие задачи");
console.log("=== === === === === ===");
//В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца
//попадает это число (в первую, вторую или третью).
for (let i = 1; i <= 31; i++) {
    if (i <= 10) console.log(`Число ${i} это`, "первая декада");
    if (i > 10 && i <= 20) console.log(`Число ${i} это`, "вторая декада");
    if (i > 20 && i <= 31) console.log(`Число ${i} это`, "третья декада");
}
console.log();

//В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года
//попадает этот месяц (зима, лето, весна, осень).
for (let i = 1; i <= 12; i++) {
    if (i <= 2 || i >= 12) {
        console.log(`Число ${i} это`, "зима");
        continue;
    }
    if (i >= 3 && i <= 5) {
        console.log(`Число ${i} это`, "весна");
        continue;
    }
    if (i >= 6 && i <= 8) {
        console.log(`Число ${i} это`, "лето");
        continue;
    }
    if (i >= 9 && i <= 11) console.log(`Число ${i} это`, "осень");
}
console.log();

//Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой
//строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
const str1 = "abcde";
if (str1.slice(0, 1) === "a") {
    console.log(`First letter of "${str1}" is "${str1.slice(0, 1)}"`, "-> yes");
}
console.log();

//Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки
//является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
const str2 = "12345";

let check = +str2.slice(0, 1);
if (check === 1 || check === 2 || check === 3) {
    console.log(`First letter of "${str2}" is number`, "->", check);
}
console.log();

//Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый
//символ строки, второй и третий.
const str3 = "1 10 100";

const splitString = str3.split(" ");
let sum = 0;
for (item of splitString) {
    sum += +item;
}
console.log("Sum of", str3, "is", sum);
console.log();

//Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется
//сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
const str4 = "0 2 5 3 -3 7";

const splitString1 = str4.split(" ");
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < 6; i++) {
    if (i < 3) sum1 += +splitString1[i];
    if (i >= 3) sum2 += +splitString1[i];
}
if (sum1 === sum2) {
    console.log(`${str4} -> ${sum1} === ${sum2} -> true`);
} else {
    console.log(`${str4} -> ${sum1} === ${sum2} -> false`);
}
console.log();

// Циклы while и for
console.log("=== === === === === ===");
console.log("Циклы while и for");
console.log("=== === === === === ===");

// ==============
//Выведите столбец чисел от 1 до 100.
for (let i = 1; i <= 100; i++) {
    // console.log(i);
}
console.log();

let counter = 1;
while (counter <= 100) {
    // console.log(counter);
    counter += 1;
}
console.log();

// ==============
//Выведите столбец чисел от 11 до 33.
for (let i = 1; i <= 33; i++) {
    // console.log(i);
}
console.log();

counter = 11;
while (counter <= 33) {
    // console.log(counter);
    counter += 1;
}
console.log();

// ==============
//Выведите столбец четных чисел в промежутке от 0 до 100.
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        // console.log(i);
    }
}
console.log();

counter = 0;
while (counter < 100) {
    if (counter % 2 === 0) {
        // console.log(i);
    }
    counter += 1;
}
console.log();

// ==============
//С помощью цикла найдите сумму чисел от 1 до 100.
sum = 0;
for (let i = 1; i < 100; i++) {
    sum += i;
}
console.log(`Sum from 1 up to 100 is ${sum}`);
console.log();

sum = 0;
counter = 1;
while (counter < 100) {
    sum += counter;
    counter += 1;
}
console.log(`Sum from 1 up to 100 is ${sum}`);
console.log();

// Работа с for для массивов
console.log("=== === === === === ===");
console.log("Работа с for для массивов");
console.log("=== === === === === ===");
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
const arr1 = [1, 2, 3, 4, 5];
for (let a of arr1) {
    console.log(a);
}
console.log();

// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму
//элементов этого массива. Запишите ее в переменную result.
let result = 0;
for (let a of arr1) {
    result += a;
}
console.log(result);
console.log();

//Задачи общие.
//1. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран
//столбец тех элементов массива, которые больше 3-х, но меньше 10.
console.log("1.---");
const arr2 = [2, 5, 9, 15, 0, 4];

for (let i of arr2) {
    if (i > 3 && i < 10) {
        console.log(i);
    }
}
console.log();

//2. Дан массив с числами. Числа могут быть положительными и отрицательными.
//Найдите сумму положительных элементов массива.
const arr3 = [-2, 5, -9, -15, 0, 4];
console.log("2.", arr3);
sum = 0;
for (let i of arr3) {
    if (i > 0) {
        sum += i;
    }
}
console.log("2. Sum item>0 is", sum);
console.log();

//3. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте
//есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите
//из цикла. Если нет - ничего делать не надо.
const arr4 = [1, 2, 5, 9, 4, 13, 4, 10];
console.log("3.", arr4);

for (let i of arr4) {
    if (i === 4) {
        console.log("3. Есть 4!");
        break;
    }
}
console.log();

//4. Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
//Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
const arr5 = [10, 20, 30, 50, 235, 3000];
console.log("4.", arr5);

for (let i of arr5) {
    let x = i.toString().slice(0, 1); // x is string
    if (x === "1" || x === "2" || x === "5") console.log(i);
}
console.log();

//5. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9.
//С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("5.", arr6);

let dashStr = "-";
for (let i of arr6) {
    dashStr = dashStr + i + "-";
}
console.log(dashStr);
console.log();

//6. Составьте массив дней недели.
//С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
const days = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
];

for (let day of days) {
    if (day === "суббота" || day === "воскресенье") {
        console.log("6.", day.toUpperCase());
        continue;
    }
    console.log("6.", day);
}
console.log();

//7. Составьте массив дней недели. С помощью цикла for выведите все дни недели,
//а текущий день выведите курсивом. Текущий день должен храниться в переменной day.
//const days = [...]
let currentDay = "суббота";
for (let day of days) {
    if (day === currentDay) {
        console.log("7.", day.toUpperCase());
        continue;
    }
    console.log("7.", day);
}
console.log();

//8. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
//Какое число получится? Посчитайте количество итераций,
//необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

let myNumber = 1000;
num = 0;
let finalNumber = 0;

for (let n = 1; ; n++) {
    if (myNumber < 50) {
        finalNumber = myNumber;
        break;
    }
    myNumber /= 2;
    num += 1;
}
console.log("8. Final number -", finalNumber);
console.log("8. Iterations -", num);
