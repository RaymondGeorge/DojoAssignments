function slots(quarters, reward) {
  while (quarters > 0, quarters--) {
    var x = Math.floor(Math.random()*100);
    console.log("You spun number", x);
    if (x == 77) {
      var y = quarters + Math.floor(Math.random()*50)+50;
      console.log("You won! Collect", y, "qaurters!");
      if (y >= reward) {
        break;
      };
    }
    else {
      console.log("Sorry, not the winning number...", quarters, "quarters remaining.");
    }
  }
}

slots(200, 200);
