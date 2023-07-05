let arrA = [1, 2, 3];
let arrB = [...arrA, 4, 5, 6]; // 전개연산자 사용

let arrC = [arrA, 4, 5, 6]; // 전개연산자 미사용

console.log(arrB);
console.log(arrC);

let objA = {
  a: 1,
  b: 2,
};

let objB = {
  ...objA,
  c: 3,
  d: 4,
};

console.log(objB);

function funcSp(a: number, b: number, c: number) {
  console.log(a, b, c);
}

const arrSp = [1, 2, 3] as const;
funcSp(...arrSp);
