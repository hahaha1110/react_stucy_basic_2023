let Person = {
  name: "하하하",
  sahyHi: function () {
    console.log("Hi");
  },
};

let isNameExist = "name" in Person;
console.log(isNameExist);
