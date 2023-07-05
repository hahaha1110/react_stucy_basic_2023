function moveMonth(date: any, moveMonth?: any) {
  const curTimestamp = date.getTime();
  const curMonth = date.getMonth();

  const restDate = new Date(curTimestamp);
  restDate.setMonth(curMonth + moveMonth);
  return restDate;
}

const dateA = new Date("2000-10-10");
console.log(`A : ${dateA}`);

const dateB = moveMonth(dateA, 1);
console.log(`B : ${dateB}`);

const dateC = moveMonth(dateA, -1);
console.log(`C : ${dateC}`);
