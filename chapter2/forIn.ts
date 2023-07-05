type personType2 = {
  name: string;
  age: number;
  location: string;
  // 인덱스 시그니처
  [prop: string]: any;
};

let person2: personType2 = {
  name: "하하하",
  age: 29,
  location: "seoul",
};

for (let key in person2) {
  const value = person2[key];
  console.log(key, value);
}
