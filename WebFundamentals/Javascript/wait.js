for (var daysUntilMyBirthday = 60; daysUntilMyBirthday > -1; daysUntilMyBirthday--) {
  if (daysUntilMyBirthday > 29) {
    console.log(daysUntilMyBirthday, "days until my birthday. Such a long time ... :(");
  }
  else if (daysUntilMyBirthday < 30 && daysUntilMyBirthday >4) {
    console.log(daysUntilMyBirthday, "days until my birthday. Getting close!");
  }
  else if (daysUntilMyBirthday < 5 && daysUntilMyBirthday > 1) {
    console.log(daysUntilMyBirthday, "DAYS UNTIL MY BIRTHDAY!!!");
  }
  else if (daysUntilMyBirthday < 2 && daysUntilMyBirthday > 0) {
    console.log(daysUntilMyBirthday, "DAY UNTIL MY BIRTHDAY!!!");
  }
  else {
    console.log("HAPPY BIRTHDAY TO ME!!!");
  }
}
