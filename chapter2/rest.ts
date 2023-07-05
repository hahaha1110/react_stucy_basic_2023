function func(...rest: any) {
  console.log(rest);
}

func(1, 2, 3, 4);

function func2(param: any, ...rest: any) {
  console.log(param);
  console.log(rest);
}

func2(1, 2, 3, 4);
