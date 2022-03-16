//1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function calcSquare(num) {
    return num ** 2;
}

//2. Сделайте функцию, которая возвращает сумму двух чисел.
function calcSum(num1, num2) {
    return num1 + num2;
}

//3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
function calcValue(num1, num2, num3) {
    return (num1 - num2) / num3;
}

//4. Сделайте функцию, которая принимает параметром число от 1 до 7,
//а возвращает день недели на русском языке.
function getWeekday(day) {
    if (day > 0 && day < 8 && day % 1 === 0) {
        switch (day) {
            case 1:
                console.log("Понедельник");
                break;
            case 2:
                console.log("Вторник");
                break;
            case 3:
                console.log("Среда");
                break;
            case 4:
                console.log("Четверг");
                break;
            case 5:
                console.log("Пятница");
                break;
            case 6:
                console.log("Суббота");
                break;
            case 7:
                console.log("Воскресенье");
                break;
        }
    } else {
        console.log("Не корректное значение");
    }
}

//5. Сделайте функцию, которая параметрами принимает 2 числа.
//Если эти числа равны - пусть функция вернет true, а если не равны - false.
function isEqual(num1, num2) {
    return num1 === num2 ? true : false;
}

//6. Сделайте функцию, которая параметрами принимает 2 числа.
//Если их сумма больше 10 - пусть вернет true, а если нет то - false.
function isGreater10(num1, num2) {
    return num1 + num2 > 10 ? true : false;
}

//7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
//Если отрицательное - пусть функция вернет true, а если нет - false.
function isNegative(num) {
    return num < 0 ? true : false;
}

//8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
//что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
function isNumberInRange(num) {
    return num > 0 && num < 10 ? true : false;
}
// console.log(isNumberInRange(15));

//9. Дан массив с числами. Запишите в новый массив только те числа,
//которые больше нуля и меньше 10-ти. Для этого используйте
//вспомогательную функцию isNumberInRange из предыдущей задачи.
const arr = [0, 3, 6, 9, 15, -5];

let arrChecked = [];
for (let i = 0; i < arr.length; i++) {
    if (isNumberInRange(arr[i])) {
        arrChecked.push(arr[i]);
    }
}
// console.log(arrChecked);

//10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает
//целое число и возвращает сумму его цифр.
function getDigitsSum(num) {
    const str = num.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) sum += +str[i];
    return sum;
}
// console.log(getDigitsSum(25));

//11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте
//вспомогательную функцию getDigitsSum из предыдущей задачи.

// for (let i = 1; i < 2020; i++) {
//     if (getDigitsSum(i) === 13) console.log(i);
// }

//12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое
//число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true,
//если нечетное - false.
function isEven(num) {
    if (num % 2 === 0) return true;
    return false;
}
// console.log(isEven(3));

//13.  Дан массив с целыми числами. Создайте из него новый массив,
//где останутся лежать только четные из этих чисел.
//Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
const arr1 = [0, 3, 6, 9, 15, -5, 20, 30];

let arrEven = [];
for (let i = 0; i < arr1.length; i++) {
    if (isEven(arr1[i])) {
        arrEven.push(arr1[i]);
    }
}
// console.log(arrEven);

//14. Сделайте функцию getDivisors, которая параметром принимает число и
//возвращает массив его делителей (чисел, на которое делится данное число).
function getDivisors(num) {
    let devisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) devisors.push(i);
    }
    return devisors;
}
// console.log(getDivisors(6));

//15. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять
//сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
function sumNumbers(num) {
    const sum = getDigitsSum(num);

    let tmpStr = `${num}=>${sum} -> `;

    if (sum <= 9) return sum;

    return tmpStr + sumNumbers(sum);
}

console.log(sumNumbers(298));

//16. Напишите стрелочную функцию, которая будет возвращать true если строка
//является палиндромом и false в противном случае.
// решена в файле index.js
