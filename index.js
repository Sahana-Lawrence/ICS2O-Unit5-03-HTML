// JavaScript File

document.getElementById("submitguess").onclick = function() {
var age = document.getElementById("age");
var agevalue = age.value;

 if (age.value >= 17) {
   alert("You can watch R-rated movies!");
}
 else if (age.value >= 13) {
   alert("You can watch PG-13 movies alone!");
}
 else {
  alert("You can watch G-rated movies alone!");
}
};