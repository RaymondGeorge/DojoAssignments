var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

if (MINUTE > 30 && PERIOD == "AM") {
  console.log("It's almost", HOUR+1, "in the morning");
}
else if (MINUTE > 30 && PERIOD == "PM") {
  console.log("It's almost", HOUR+1, "in the evening");
}
else if (MINUTE < 30 && PERIOD == "PM") {
  console.log("It's just after", HOUR, "in the evening");
}
else if (MINUTE < 30 && PERIOD == "AM") {
  console.log("It's just after", HOUR, "in the evening");
}
