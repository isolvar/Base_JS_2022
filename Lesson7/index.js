// const myObject = {
//     name: "Vasay",
//     callName: function () {
//         console.log(this);
//         console.log(this.name);
//     },
// };
// myObject.callName();

// const city = {
//     cityName: "Gorkiy",
//     populaton: 1200000,
//     getCityName: function () {
//         return this.cityName;
//     },
//     getPopulation: function () {
//         return this.populaton;
//     },
//     changeKeyValue: function (key, value) {
//         // this[key] = value;
//         switch (key) {
//             case "cityName":
//                 this.cityName = value;
//                 break;
//             case "population":
//                 this.populaton = value;
//                 break;
//             default:
//                 console.log("Ключ не найден");
//         }
//     },
// };
// city.changeKeyValue("cityName", "dsdds");
// console.log(city);

//=============================
// const myObject = {
//     name: "Vasay",
//     callName: function () {
//         console.log(this.name);
//     },
// };
// myObject.callName();

// const newObject = {
//     name: "Petya",
// };
// myObject.callName.call(newObject);

//=============================
// const say = function (phrase, phrase2) {
//     console.log(`${this.name}: ${phrase}`);
//     console.log(phrase2);
// };
// const myObject = {
//     name: "Vasay",
// };

// const newObject = {
//     name: "Petya",
// };
// say.apply(newObject, ["Hello", "ffff"]);
// say.call(newObject, "Hello", "ffff");

// const boundFunc = say.bind(newObject, "Hello", "ddd");
// boundFunc();

//=====================
// const city = {
//     cityName: "Gorkiy",
//     populaton: 1200000,
//     getCityName: function () {
//         return this.cityName;
//     },
//     getPopulation: function () {
//         return this.populaton;
//     },
//     changeKeyValue: function (key, value) {
//         switch (key) {
//             case "cityName":
//                 this.cityName = value;
//                 break;
//             case "population":
//                 this.populaton = value;
//                 break;
//             default:
//                 console.log("Ключ не найден");
//         }
//     },
// };

// const newCity = {
//     cityName: "Moskow",
//     populaton: 10000000,
// };

// console.log(city.getCityName.call(newCity));
// console.log(city.getPopulation.apply(newCity));

// city.changeKeyValue.bind(newCity, "cityName", "Piter")();
// console.log(newCity);
//============================

// замыкание
// const myFunc = () => {
//     const myVar = 5;
//     return (param) => {
//         console.log(myVar + param);
//     };
// };

// myFunc()(10);

// каррирование вместо f(a, b, b) будет f(a)(b)(c)
// const myFunc = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         };
//     };
// };
// console.log(myFunc(2)(3)(10));

// =======================
// const calcVolume = (width, length) => {
//     const heigth = 10;
//     return (width, length) => {
//         return width * length * heigth;
//     };
// };

// console.log(calcVolume()(2, 3));

// const calcVolume2 = (w) => {
//     return (h) => {
//         return (l) => {
//             return w * h * l;
//         };
//     };
// };
// console.log(calcVolume2(2)(3)(10));
