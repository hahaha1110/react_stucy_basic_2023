const promise = new Promise((resolve, feject) => {
  setTimeout(() => {
    resolve("성공");
  }, 500);
});

promise.then((res) => {
  console.log(res);
});
