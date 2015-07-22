/*You have a sequence of positive numbers starting with 1, but one number is missing!

Find out the missing number; if the sequence is not broken, you should return 0. Each sequence always increments by 1.

In short: an invalid sequence must return 1, an already complete (or empty) sequence must return 0; otherwise return the missing element.

Note that the sequence may be shuffled.

E.g.

findMissingNumber("1 2 3 5") # returns 4
findMissingNumber("1 2 3 4") // returns 0
findMissingNumber("5 1 3 4") // returns 2

Test.assertEquals(findMissingNumber("1 2 3 5"),4,"It must work for missing middle terms")
Test.assertEquals(findMissingNumber("1 3"),2,"It must work for missing middle terms")
Test.assertEquals(findMissingNumber(""), 0,"It must return 0 for an empty sequence")*/

function findMissingNumber(sequence){
  //split the sequence into an array but the space
  var array = sequence.split(" ");
  array.sort();
  console.log(array);
}


findMissingNumber("1 2 3 5");
findMissingNumber("5 1 3 4");