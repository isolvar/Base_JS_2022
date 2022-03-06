const myVar1 = 5;
const myVar2 = 10;

if (myVar1 > myVar2) {
    console.log(`True: ${myVar1} bigger than ${myVar2}`);
} else if (myVar1 < myVar2) {
    console.log(`True: ${myVar1} less than ${myVar2}`);
} else {
    console.log("end");
}

let result = myVar1 > myVar2 ? console.log(true) : console.log(false); // тернарный оператор

// Switch
const userRole = "admin";

switch (userRole) {
    case "student":
        console.log("User is student");
        break;
    case "admin":
        console.log("User is Admin");
        break;
    case "normal_user":
        console.log("User is normal user");
        break;
    default:
        console.log("User not found");
        break;
}

// Логические операторы
// && - логическое И
// ||  - логическое ИЛИ
// ! -логическое НЕ

console.log(1 || 0);
console.log(1 && 0);

console.log((1 && 2) || (4 && 0));

if (1 && 0) {
    console.log("no");
}
// находит IF , понимает что дальше - условие
// внутри условия находит логическое И
// оператор приводит значения к булевому типу -true/false
// 1 -> true, 0-> false. && возвращает ЗНАЧЕНИЕ, которое является false при приведении в булевый тип
// В данном случае мы получаем 0, который приводится к булевому типу блоком IF

// Логическое НЕ
// JS приводит значение после ! к булевому типу
// ! менякт полученное значение на противоположное

const myVar = 5;

if (myVar) {
    console.log(Boolean(myVar));
}
console.log(myVar);
console.log(!myVar);
console.log("=============");

console.log(null || 0 || "" || undefined);
console.log("apple" && true && null && 1);
console.log(0 || (true && "false") || null);
console.log((0 && true) || ("123" && null));
console.log(!0 && !!1);
console.log(!(null || (!"orange" && true)));

console.log("=============");

//1
const intervalOne = 25;
const intervalTwo = 20;
const intervalThree = 18;

if (intervalOne > intervalTwo && intervalOne > intervalThree) {
    console.log("Biggest intarval", intervalOne);
} else if (intervalTwo > intervalThree && intervalTwo > intervalOne) {
    console.log("Biggest intarval", intervalTwo);
} else if (intervalThree > intervalTwo && intervalOne > intervalOne) {
    console.log("Biggest intarval", intervalThree);
}

//2
const currentTmp = 20;
//Solution 1
if (currentTmp <= -30) {
    console.log("Stay homw");
}
if (currentTmp > -30 && currentTmp <= -10) {
    console.log("Weather is cold");
}
if (currentTmp > -10 && currentTmp <= 5) {
    console.log("Weather isn't cold");
}
if (currentTmp > 5 && currentTmp <= 15) {
    console.log("Warm");
}
if (currentTmp > 15 && currentTmp <= 25) {
    console.log("Very Warm");
}
if (currentTmp > 25 && currentTmp <= 35) {
    console.log("Hot");
}
if (currentTmp > 35) {
    console.log("Tooo Hot!");
}
// Solution 2
if (currentTmp <= -30) {
    console.log("Stay homw");
} else if (currentTmp > -30 && currentTmp <= -10) {
    console.log("Weather is cold");
} else if (currentTmp > -10 && currentTmp <= 5) {
    console.log("Weather isn't cold");
} else if (currentTmp > 5 && currentTmp <= 15) {
    console.log("Warm");
} else if (currentTmp > 15 && currentTmp <= 25) {
    console.log("Very Warm");
} else if (currentTmp > 25 && currentTmp <= 35) {
    console.log("Hot");
} else {
    console.log("Tooo Hot!");
}

// LOOP

// While
let i = 0;
while (false) {
    i++;
    console.log("hello", i);
}

// do ... while
do {
    console.log(i);
} while (false);

// for
for (let x = 0; x <= 10; x++) {
    console.log(x);
    if (x === 5) break;
}

console.log("------------------");

// задачу 1. решить через вайл, до-вайл и фор
const maxCounter = 3;
let counter = 1;
while (counter <= maxCounter) {
    console.log("while string", counter);
    counter++;
}

counter = 1;
do {
    console.log("do while string", counter);
    counter++;
} while (counter <= maxCounter);

for (let i = 1; i <= maxCounter; i++) {
    console.log("for string", i);
}

console.log("------------------");
// задача 2.
let carsAmount = 60; // N
const minCarsAmount = 10; // M

let day = 1;
while (carsAmount >= minCarsAmount) {
    carsAmount /= 2;
    day++;
}
console.log(`After ${day} days`);

day = 1;
carsAmount = 60;
for (let a = carsAmount; a >= minCarsAmount; a /= 2) {
    day++;
}
console.log(`After ${day} days`);

console.log("------------------");
// задача 3.
const startYear = 1800;
const endYear = 2020;
const firstSpaceTripYear = 1961;
let leapYearAmount = 0;

for (let counter = startYear; counter <= endYear; counter++) {
    if (counter === firstSpaceTripYear) {
        console.log(`${firstSpaceTripYear} - first space trip year`);
        console.log(`Iterations - ${counter - startYear}`);
        break;
    }
}

for (let year = startYear; year <= endYear; year++) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        console.log(year);
        leapYearAmount += 1;
    }
}
console.log("Leap years amount -", leapYearAmount);
