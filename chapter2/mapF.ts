let arrMap = [1, 2, 3, 4];
let newArrMap = arrMap.map((item) => item * 3);

console.log(newArrMap);

let arrMap2 = [
  { name: "하하하", hobby: "영화감상" },
  { name: "하하히", hobby: "축구" },
  { name: "하하호", hobby: "노래하기" },
];

let NewArrayMap2 = arrMap2.map((item) => item.name);

console.log(NewArrayMap2);
