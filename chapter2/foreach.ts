function cb(item: any, idx: any) {
  console.log(`${idx}번째 요소 : ${item}`);
}

const cbArr = [1, 2, 3];

cbArr.forEach(cb);
