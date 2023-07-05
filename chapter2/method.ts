// pop
let food_ = ["짜장면", "피자", "치킨"];
const removedItem = food_.pop();

console.log(removedItem);
console.log(food_);

let nothig: any = [];
const removedItem2 = nothig.pop();

console.log(nothig);
console.log(removedItem2);

let arrC_A = [1, 2];
let arrC_B = [3, 4];
let arrC_C = arrC_A.concat(arrC_B);

console.log(arrC_C);
console.log(arrC_A);
