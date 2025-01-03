function bottles() {
var i = 99;

while (i > 0) {
  if (i > 1) {
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
    console.log("Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
  } else {
    {
    console.log(i + " bottle of beer on the wall, " + i + " bottle of beer.");
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");
  }
  }
  i--;
}
}

bottles();