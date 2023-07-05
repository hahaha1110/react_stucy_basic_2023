let arrF = [
  { name: "하하하", hobby: "영화감상" },
  { name: "하하히", hobby: "축구" },
  { name: "하하호", hobby: "노래하기" },
];

let filteredArrF = arrF.filter((item) => item.hobby === "축구");

console.log(filteredArrF);
