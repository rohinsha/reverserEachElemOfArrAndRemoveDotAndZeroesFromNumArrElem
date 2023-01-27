//remove dot and all zeroes from the elements of number array.
//once check the parseInt radix which as of now i kept as 0.
function toRemoveDotAndZeroes(num) {
  console.log(`:=> passed arr is [${num}] `);
  let numStr = num.toString();
  let removeDotStr = numStr.replace(/\./g, "");
  let removeZeroesStr = removeDotStr.replace(/0/g, "");
  let getArrFrmStr = removeZeroesStr.split(",");
  let getNumFromStrArr = getArrFrmStr.map((x) => parseInt(x, 0));
  return getNumFromStrArr;
}

console.log(
  `output of function 1 is [${toRemoveDotAndZeroes([102, 304, 93.05, 43.8])}]`
);

function toReverseArrElem(arr) {
  console.log(`:=> passed arr is [${arr}] `);
  let newSubArr = arr.map((x) => x.toString().split(""));
  let strRevArr = newSubArr.map((x) => x.reverse().join(""));
  let numRevArr = strRevArr.map((x) => parseInt(x, 0));
  return numRevArr;
}
console.log(
  `output of function 2 is [${toReverseArrElem([12, 4572, 821, 57])}]`
);
