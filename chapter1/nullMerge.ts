let varA = 10;
let varB = "20";
let varC;

console.log(varA ?? varB); // 10
console.log(varC ?? varB); // "20"

let Name;
let nickName = "hahaha";

Name = "hhj";

let user = Name ?? nickName;
console.log(`이름은 ${user} 입니다.`);

let typeofName = typeof Name;
console.log(`Name의 자료형은 ${typeofName} 입니다.`);
