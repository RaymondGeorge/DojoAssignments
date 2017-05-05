function numbersOnly(arr) {
  var newArr = arr;
  var fancyarr = [];
  if (typeof newArr[0] === "number") {
    fancyarr[fancyarr.length] = arr[0];
  }
  else if (typeof newArr[0] != "number") {
    fancyarr[fancyarr.length] = arr[1];
  }
  if (typeof newArr[1] === "number") {
    fancyarr[fancyarr.length] = arr[1];
  }
  else if (typeof newArr[1] != "number") {
    fancyarr[fancyarr.length] = arr[2];
  }
  if (typeof newArr[2] === "number") {
    fancyarr[fancyarr.length] = arr[2];
    fancyarr.pop();
  }
  else if (typeof newArr[2] != "number") {
    fancyarr[fancyarr.length] = arr[3];
  }
  if (typeof newArr[3] === "number") {
    fancyarr[fancyarr.length] = arr[3];
  }
  else if (typeof newArr[3] != "number") {
    fancyarr[fancyarr.length] = arr[4];
  }
  console.log(fancyarr);
}


numbersOnly([1, "apple", -3, "orange", 0.5])
//should return [1, -3, 0.5]
