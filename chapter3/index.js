// console.log("index run");
// import { PI, getArea, getCircumference } from "./circle.js";
// import c from "./circle.js";

// console.log(c.PI, c.getArea(1), c.getCircumference(1));

import lodash from "lodash";

const arr = [1, 1, 1, 2, 2, 1, 1, 4, 4, 3, 2];
const uniaueArr = lodash.uniqBy(arr);
console.log(uniaueArr);
