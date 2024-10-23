var factList = [ /*makes fact variables*/
 "Fact 1",
 "Fact 2", 
 "Fact 3", 
 "Fact 4"];

var fact = document.getElementById("fact"); /*Returns a reference to the first object with the specified value of the ID attribute.*/
var myBtn = document.getElementById("myBtn"); /*Returns a reference to the first object with the specified value of the ID attribute.*/
var count = 0; /*makes variable called count and sets it to 0*/

myBtn.addEventListener("click", displayFact);

function displayFact(){ /*counts the amount of facts generated*/
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
