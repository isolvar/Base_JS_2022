// const user = new Object({
//     name: "Vasya",
//     age: 20,
//     sayHi() {
//         console.log("bye!");
//     },
// });

// // const admin = {
// //     __proto__: user,
// // };
// // console.log(admin);

// const user2 = {
//     name: "Petya",
//     age: 30,
// };
// Object.prototype.sayHi = function () {
//     console.log(`Hi, ${this.name}!`);
// };

// console.log(user);
// console.log(user2);

// user.sayHi();
// user2.sayHi();

//===================================================
// let animal = {
//     jumps: "Прыжок!",
// };

// let rabbit = {
//     __proto__: animal,
//     jumps: "Заяц прыгнул!",
// };

// console.log(rabbit.jumps); // ? (1)
// delete rabbit.jumps;
// console.log(rabbit.jumps); // ? (2)
// delete animal.jumps;
// console.log(rabbit.jumps); // ? (3)

//===================================================
// Object.prototype.sayHi = function () {
//     console.log(`Hello, I am robot ${this.model}`);
// };

// const robot = {
//     model: "R2D2",
//     created: 2150,
//     move: function () {
//         console.group(`${this.model} just moved!`);
//     },
// };

// const terminator = {
//     model: "T-800",
//     sayHi: function () {
//         console.log("I'll be back!");
//     },
// };
// Object.setPrototypeOf(terminator, robot);

// console.log(robot);
// console.log(terminator);

// robot.sayHi();
// terminator.sayHi();

//===================================================
// Functions Constructors

// function CreateUser(name, age) {
//     this.name = name;
//     this.age = age;
// }

// CreateUser.prototype.showName = function () {
//     console.log(this.name);
// };
// CreateUser.prototype.showAge = function () {
//     console.log(this.age);
// };

// const userVasya = new CreateUser("Vasya", 20);
// const userPetya = new CreateUser("Petya", 25);
// console.log(userVasya);
// console.log(userPetya);
// userVasya.showAge();
//===================================================

// function Blank(from, to) {
//     this.from = from;
//     this.to = to;
//     this.show = function () {
//         return this.from + " " + this.to;
//     };
// }

// Blank.prototype.setFrom = function (from) {
//     this.from = from;
// };

// const blank1 = new Blank("Alex", "Andru");
// const blank2 = new Blank("Igor", "Olga");

// console.log(blank1);
// console.log(blank1.show());
// console.log(blank2.show());

// blank2.setFrom("R2D2");
// console.log(blank2.show());

// // если без конструктора, есть разица в контексте
// const blank = {
//     from: from,
//     to: to,
//     show: function () {
//         return this.from + " " + this.to;
//     },
// };

// console.log(blank.show());

//===================================================
// CLASS

// class Animal {
//     constructor(props) {
//         this.name = props.name;
//         this.age = props.age;
//         this.hasTail = props.hasTail;
//     }

//     voice() {
//         console.log("I am animal!");
//     }
// }

// const myAnimal = new Animal({ name: "animal", age: 5, hasTail: true }); // myAnimal инстанс класса Animal
// console.log(myAnimal);
// myAnimal.voice();

// class Cat extends Animal {
//     constructor(props) {
//         super(props);
//         this.color = props.color;
//     }
// }

// const myCat = new Cat({ anme: "Cat", ae: 8, hasTail: true, color: " blue" });

// console.log(myCat);

//===================================================
// class Animal {
//     #name = ""; //private property

//     static type = "ANIMAL"; // данное свойство есть только в Animal
//     //Animal.type
//     //myAnimal.type выдаст undefined

//     constructor(props) {
//         this.#name = props.name;
//         this.age = props.age;
//         this.hasTail = props.hasTail;
//     }

//     voice() {
//         console.log("I am animal!");
//     }

//     get getName() {
//         console.log(this.#name);
//     }

//     set setName(newName) {
//         this.#name = newName;
//     }
// }

// const myAnimal = new Animal({
//     name: "animal",
//     age: 5,
//     hasTail: true,
// });

// class Cat extends Animal {
//     constructor(props) {
//         super(props);
//         this.color = props.color;
//     }
//     voice() {
//         console.log("I am cat");
//     }
// }

// const myCat = new Cat({
//     anme: "Cat",
//     ae: 8,
//     hasTail: true,
//     color: " blue",
// });

// myCat.voice();

// myCat.getName;
// myCat.setName = "Dog";

// console.log(myCat);

//===================================================

// class People {
//     constructor(props) {
//         this.name = props.name;
//         this.surname = props.surname;
//         // this.getFullName = function () {
//         //     return `${this.name} ${this.surname}`;
//         // };
//     }

//     getFullName = function () {
//         return `${this.name} ${this.surname}`;
//     };
// }

// class Worker extends People {
//     constructor(props) {
//         super(props);
//         this.rate = props.rate;
//         this.day = props.day;
//     }

//     getSalary() {
//         return this.day * this.rate;
//     }
// }

// const worker1 = new Worker({
//     name: "Ivan",
//     surname: "Rock",
//     day: 5,
//     rate: 2000,
// });

// const worker2 = new Worker({
//     name: "Boris",
//     surname: "Stone",
//     day: 10,
//     rate: 20000,
// });

// console.log(worker1.getFullName());
// console.log(worker1.getSalary());

// console.log(worker2.getFullName());
// console.log(worker2.getSalary());

//===================================================

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    hide() {
        this.$el.style.display = "none";
    }

    show() {
        this.$el.style.display = "block";
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + "px";
        this.$el.style.background = options.color;
    }
}

const box1 = new Box({
    selector: "#box1",
    size: 100,
    color: "red",
});

const box2 = new Box({
    selector: "#box2",
    size: 80,
    color: "blue",
});

class Circle extends Box {
    constructor(options) {
        super(options);
        this.$el.style.borderRadius = "50%";
    }
}

const myCircle = new Circle({
    selector: "#circle",
    size: 70,
    color: "green",
});
