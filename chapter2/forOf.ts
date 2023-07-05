let food = ["짜장면", "피자", "치킨"];

for (let item of food) {
  console.log(item);
}

type personType = {
  name: string;
  age: number;
  location: string;
  // 인덱스 시그니처
  [prop: string]: any;
};

let person: personType = {
  name: "하하하",
  age: 29,
  location: "seoul",
};
const keyArr = Object.keys(person);
console.log(keyArr);

for (let key of keyArr) {
  let value = person[key];
  console.log(key, value);
}
