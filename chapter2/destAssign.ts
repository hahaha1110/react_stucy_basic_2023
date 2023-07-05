let arr = [1, 2, 3];

let one = arr[0];
let two = arr[1];
let three = arr[2];

console.log(one, two, three);

let [one_, two_, three_] = arr;
console.log(one_, two_, three_);

// 객체의 구조분해할당
type profileType = {
  name_: string;
  age_: number;
  location_: string;
  // 인덱스 시그니처
  [prop: string]: any;
};

let profile: profileType = {
  name_: "하하하",
  age_: 29,
  location_: "seoul",
};

function func_({ name_: n, age_: a, location_: l }: profileType) {
  console.log(n, a, l);
}

func_(profile);

const { name_, age_, location_ } = profile;

console.log(name_, age_, location_);
