//1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы),
// days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника.

class Worker {
    constructor(props) {
        this.name = props.name;
        this.surname = props.surname;
        this.rate = props.rate;
        this.days = props.days;
    }

    getSalary() {
        console.log(`Зарплата - ${this.rate * this.days}`);
    }

    getFullName() {
        console.log(this.name, this.surname);
    }
}

const myWorker = new Worker({
    name: "Ivan",
    surname: "Ivanov",
    rate: 3000,
    days: 25,
});
// myWorker.getFullName();
// myWorker.getSalary();

//2. Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников.
// И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

class Boss extends Worker {
    constructor(props) {
        super(props);
        this.workers = props.workers;
    }

    getSalary() {
        console.log(`Зарплата - ${this.rate * this.days * this.workers}`);
    }
}

const myBoss = new Boss({
    name: "Petr",
    surname: "Petrov",
    rate: 4000,
    days: 25,
    workers: 10,
});
// myBoss.getFullName();
// myBoss.getSalary();

//3. Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
//Смотреть пункт 4
//4. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.

class Worker2 {
    #name = "";
    #surname = "";
    #rate = 0;
    #days = 0;

    constructor(props) {
        this.#name = props.name;
        this.#surname = props.surname;
        this.#rate = props.rate;
        this.#days = props.days;
    }

    get getName() {
        return this.#name;
    }

    get getSurname() {
        return this.#surname;
    }

    get getRate() {
        return this.#rate;
    }

    set setRate(rate) {
        this.#rate = rate;
    }

    get getDays() {
        return this.#days;
    }
    set setDays(days) {
        this.#days = days;
    }

    getSalary() {
        console.log(`Зарплата - ${this.#rate * this.#days}`);
    }

    getFullName() {
        console.log(this.#name, this.#surname);
    }
}

//5. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает
//  ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
//  и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString {
    static reverse(str) {
        const reversedArr = [];
        for (let i = str.length - 1; i >= 0; i--) {
            reversedArr.push(str[i]);
        }
        return reversedArr.join("");
    }

    static ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    static ucWords(str) {
        return str
            .split(" ")
            .map((elem) => {
                return elem[0].toUpperCase() + elem.slice(1);
            })
            .join(" ");
    }
}

// console.log(MyString.reverse("123456"));
// console.log(MyString.ucFirst("aaa bbbb c dddd"));
// console.log(MyString.ucWords("aaa bbbb c dddd"));

//6. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс
// будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.

class Validator {
    static isEmail(str) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str);
    }

    static isDomain(str) {
        return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
            str
        );
    }

    static isDate(str) {
        //Validate dd/mm/yyyy or dd-mm-yyyy format

        // VARIANT 1
        return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
            str
        );
    }

    static isPhone(str) {
        const regexPhoneNo =
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        // valid a phone number like
        // XXX-XXX-XXXX
        // XXX.XXX.XXXX
        // XXX XXX XXXX
        if (str.match(regexPhoneNo)) return true; // or return regex.test(...)
        return false;
    }

    // static isDate(str) {
    //     // VARIANT 2
    //     // changed example from https://www.w3resource.com/javascript/form/javascript-date-validation.php

    //     const regexDateFormat =
    //         /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    //     // Match the date format through regular expression
    //     if (str.match(regexDateFormat)) {
    //         //Test which separator is used '/' or '-'
    //         const opera1 = str.split("/");
    //         const opera2 = str.split("-");
    //         const lopera1 = opera1.length;
    //         const lopera2 = opera2.length;

    //         // Extract the string into month, date and year
    //         let pdate = [];
    //         if (lopera1 > 1) {
    //             pdate = str.split("/");
    //         } else if (lopera2 > 1) {
    //             pdate = str.split("-");
    //         }
    //         const dd = parseInt(pdate[0]);
    //         const mm = parseInt(pdate[1]);
    //         const yy = parseInt(pdate[2]);

    //         // Create list of days of a month [assume there is no leap year by default]
    //         const ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //         if (mm == 1 || mm > 2) {
    //             if (dd > ListofDays[mm - 1]) {
    //                 // alert("Invalid date format!");
    //                 return false;
    //             }
    //         }

    //         //special checkings for February, leap year or normal
    //         if (mm == 2) {
    //             let lyear = false;
    //             if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
    //                 lyear = true;
    //             }
    //             if (lyear == false && dd >= 29) {
    //                 // alert("Invalid date format!");
    //                 return false;
    //             }
    //             if (lyear == true && dd > 29) {
    //                 // alert("Invalid date format!");
    //                 return false;
    //             }
    //         }
    //         return true;
    //     } else {
    //         // alert("Invalid date format!");
    //         return false;
    //     }
    // }
}

console.log(Validator.isEmail("233hjfg@helloworld.com")); // OK
console.log(Validator.isEmail("233hjfg@helloworldcom")); //with mistake

console.log(Validator.isDomain("110.234.52.124")); //110.234.52.124 - ok
console.log(Validator.isDomain("666.10.10.20")); //666.10.10.20 – invalid - digit must between [0-255]

console.log(Validator.isDate("12-05-2022")); // OK
console.log(Validator.isDate("10-45-2022")); //with mistake

console.log(Validator.isPhone("999 999 9999")); // OK
console.log(Validator.isPhone("999 ccc 9999")); //with mistake

//7. Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока.
// Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз).
// Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от
// текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

class User {
    constructor(props) {
        this.name = props.name;
        this.surname = props.surname;
    }

    getFullName() {
        console.log(this.name, this.surname);
    }
}

class Student extends User {
    constructor(props) {
        super(props);
        this.year = props.year;
    }

    getCourse() {
        const today = new Date();
        console.log("Course -", today.getFullYear() - this.year + 1);
    }
}

const newStudent = new Student({
    name: "Ivan",
    surname: "Ivanov",
    year: 2021,
});
// newStudent.getFullName();
// newStudent.getCourse();
