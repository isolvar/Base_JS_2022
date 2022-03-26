// const myArr = [1, () => console.log("sd"), "string"];

// console.log(myArr);
// console.log(typeof myArr);
// console.log(Array.isArray(myArr));

// const newArray = new Array(5);
// console.log(newArray);

//Многомерные массивы
// const myArr = [
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
// ];
// console.log(myArr[1][2]);

//Не надо так делать
// const arr = [1, 2, 3, 4, 5];
// arr[1000] = 10;
// console.log(arr);

// const myArr = ["one", "two", "three", "four", "five"];
// myArr.push("six"); // добавляет в конец массива
// console.log(myArr);

// myArr.unshift("zero"); // добавляет в начало массива
// console.log(myArr);

// myArr.shift(); // удаляет с начала массива и возвращает его
// console.log(myArr);

// myArr.pop(); // удаляет с конца массива  и возвращает его
// console.log(myArr);

//Полезные методы.
//find
// const myArr = ["111", "222", "333", "444"];
// const foundItem = myArr.find((element) => element === "222");
// console.log(foundItem);

// const users = [
//     { id: 1, name: "Vasya1" },
//     { id: 2, name: "Vasya2" },
//     { id: 3, name: "Vasya3" },
//     { id: 4, name: "Vasya4" },
// ];

// const foundUser = users.find((user) => user.id === 1);
// console.log(foundUser);

//filter
// const users = [
//     { id: 1, name: "Vasya1", isAdmin: false },
//     { id: 2, name: "Vasya2", isAdmin: false },
//     { id: 3, name: "Vasya3", isAdmin: true },
//     { id: 4, name: "Vasya4", isAdmin: false },
// ];

// const notAdminUsers = users.filter((user) => !user.isAdmin);
// console.log(notAdminUsers);

//Map
// const users = [
//     { id: 1, name: "Vasya1", isAdmin: false },
//     { id: 2, name: "Vasya2", isAdmin: false },
//     { id: 3, name: "Vasya3", isAdmin: true },
//     { id: 4, name: "Vasya4", isAdmin: false },
// ];

// const modifiedUsers = users.map((user) => user.name);
// const modifiedUsers = users.map((user) => {
//     return {
//         ID: user.id,
//         userName: user.name,
//     };
// });
// console.log(modifiedUsers);
