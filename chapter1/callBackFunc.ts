function parentFunc(callback: any) {
  console.log("parent");
  callback();
}

function childFunc() {
  console.log("child");
}

parentFunc(childFunc);
