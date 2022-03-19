// const user = {
//     name: "ivan",
//     age: 18,
//     goToUniversity: () => console.log("Иду в универ! Хэхэй!"),
// };

// user.goToUniversity();

// const nameKey = "name123";
// const user = {
//     [nameKey]: "ivan",
//     age: 18,
// };

// console.log(user);
// console.log(user.age);
// console.log(user["age"]);

// delete user.age;

// const myFavoriteFilm = {
//     filmName: "Terminator",
//     releaseDate: "17.01.2000",
//     producerName: "Cameron",
//     country: "USA",
// };

// myFavoriteFilm.receivedCash = 10000000;
// // myFavoriteFilm.showFilmName = () => console.log(myFavoriteFilm.filmName);
// myFavoriteFilm.showFilmName = function () {
//     console.log(this.filmName);
// };

// console.log(myFavoriteFilm);
// console.log(myFavoriteFilm.showFilmName());

// delete myFavoriteFilm.releaseDate;
// console.log(myFavoriteFilm);

// const myNumber = 23e4;
// console.log(myNumber);

// console.log(parseInt("12345a55"));
// console.log(parseInt("12.345a55"));
// console.log(parseFloat("12.345a55"));

// const myNumber = 123.3;

// if (typeof myNumber === "number") console.log("число!");
// if (!isNaN(myNumber)) console.log("число!");

// console.log(Math.ceil(myNumber)); // потолок - округление в большую сторону
// console.log(Math.floor(myNumber)); // пол - округление в меньшую сторону

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const isUpperCase = (str, n) => {
    if (!str[n]) return "Error!";

    if (str[n] === str[n].toUpperCase()) return true;
    return false;
};

const replaceAll = (str, subStr, replaceStr) => {
    for (let i = 0; i < str.length; i++) {
        let foundIndex = str.indexOf(subStr);
        if (foundIndex === -1) return str;
        str =
            str.slice(0, foundIndex) +
            replaceStr +
            str.slice(foundIndex + subStr.length);
    }
    return str;
};

console.log(replaceAll("widget for id", "id", "xxx"));
