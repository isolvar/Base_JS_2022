//  Number
console.log(1, typeof 1);
console.log(5 - "2", typeof (5 - "2"));
console.log(5 - "123abc", typeof (5 - "123abc"));

console.log("\n");

// BigInt
console.log(
  BigInt(0b11111111111111111111111111111111111111111111111111111),
  typeof BigInt(0b11111111111111111111111111111111111111111111111111111)
);

console.log("\n");

// String
console.log("Строка", typeof "Строка");
console.log("2" + 3, typeof ("2" + 3));

console.log("\n");

// Boolean
console.log(true, typeof true);
console.log(!0, typeof !0);
console.log(!!2, typeof !!2);
console.log(Boolean(""), typeof Boolean(""));

console.log("\n");

//Null, undefined
console.log(null, typeof null);
console.log(null + 0, typeof (null + 0));
console.log(null - "2", typeof (null - "2"));
console.log(null + "123", typeof (null + "123"));
console.log(null === undefined);
console.log(null == undefined);

console.log("\n");

//Symblol
console.log(Symbol("123"), typeof Symbol("123"));

console.log("\n");

//Object
const newUser = {
  name: "Vasya",
  age: 23,
  role: {
    id: 1,
    type: "admin",
  },
};

console.log(typeof newUser);
newUser.type = "normal_user";
console.log(newUser);