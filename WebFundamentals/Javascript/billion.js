var reward = 0.01;

console.log("Day#", 1, "Amount", reward);

for (var days = 2; days < 31; days++) {
  console.log("Day#", days, "Amount", reward = reward+reward);
}
