function printRange(num1, num2, num3) {
    for (var num1 = 2; num1 < num2; num1 = num1+num3) {
      console.log(num1);
    }
}

printRange(2, 10, 2);
